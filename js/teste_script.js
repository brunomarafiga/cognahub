document.addEventListener('DOMContentLoaded', () => {
    // --- Elementos do DOM ---
    const progressText = document.getElementById('progress-text');
    const progressBar = document.getElementById('progress-bar');
    // const questionNumber = document.getElementById('question-number'); // Comentado pois não usado no HTML fornecido
    const questionDiscipline = document.getElementById('question-discipline'); // Elemento para disciplina
    const questionText = document.getElementById('question-text-id'); // ID do HTML dos testes
    const optionsContainer = document.getElementById('options-container-id'); // ID do HTML dos testes
    const nextBtn = document.getElementById('next-btn-id'); // ID do HTML dos testes
    const quizArea = document.getElementById('quiz-content'); // ID do HTML dos testes (main content)
    const resultsArea = document.getElementById('results-area');
    const scoreText = document.getElementById('score-text');
    const percentageText = document.getElementById('percentage-text');
    const levelText = document.getElementById('level-text');
    const reviewBtn = document.getElementById('review-answers-btn'); // ID do HTML dos testes
    const restartBtn = document.getElementById('restart-quiz-btn'); // ID do HTML dos testes
    const reviewArea = document.getElementById('review-section'); // ID do HTML dos testes
    const reviewContent = document.getElementById('review-content');
    const backToResultsBtn = document.getElementById('back-to-results-btn-review'); // ID do HTML dos testes

    // Elementos da seleção de nível
    const levelSelectionArea = document.getElementById('level-selection-area');
    const levelEasyBtn = document.getElementById('level-easy-btn');
    const levelMediumBtn = document.getElementById('level-medium-btn');
    const levelHardBtn = document.getElementById('level-hard-btn');

    // Para o script funcionar com o HTML dos testes, precisamos de uma área de apresentação e botão de início
    // Se não existir, o quiz iniciará automaticamente. Para o fluxo do script, vamos simular que existem.
    // Idealmente, o HTML dos testes deveria ter uma section#presentation-area e button#start-btn
    let presentationArea = document.getElementById('presentation-area');
    let startBtn = document.getElementById('start-btn');
    const quizTitleH1 = document.getElementById('quiz-title-h1'); // ID do H1 do título do quiz
    const pageTitle = document.querySelector('title'); // Elemento title da página

    // Elemento do loader
    const loader = document.getElementById('loader');

    // Estado global para controle de acessibilidade
    let isQuizStarted = false;
    let currentQuestionNumber = 0;
    let totalQuestions = 0;

    // Função para mostrar/esconder o loader
    function toggleLoader(show) {
        if (loader) {
            loader.style.display = show ? 'flex' : 'none';
            loader.setAttribute('aria-busy', show.toString());
        }
    }

    // Função para atualizar o progresso com ARIA
    function updateProgress(current, total) {
        if (progressBar && progressText) {
            progressBar.value = current;
            progressBar.max = total;
            progressBar.setAttribute('aria-valuenow', current);
            progressBar.setAttribute('aria-valuemax', total);
            progressText.textContent = `Questão ${current} de ${total}`;
            document.title = `Questão ${current}/${total} - Questionário`;
        }
    }

    // Função para criar opções de resposta acessíveis
    function createAccessibleOption(option, index, questionId) {
        const label = document.createElement('label');
        label.className = 'option-label';
        
        const input = document.createElement('input');
        input.type = 'radio';
        input.name = `question-${questionId}`;
        input.value = option;
        input.id = `option-${index}`;
        input.setAttribute('aria-labelledby', `option-text-${index}`);
        
        const span = document.createElement('span');
        span.id = `option-text-${index}`;
        span.textContent = option;
        
        label.appendChild(input);
        label.appendChild(span);
        
        // Evento de teclado para acessibilidade
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                input.checked = true;
                nextBtn.focus();
            }
        });
        
        return label;
    }

    // Função para habilitar/desabilitar o botão de próxima questão
    function toggleNextButton(enabled) {
        nextBtn.disabled = !enabled;
        if (enabled) {
            nextBtn.setAttribute('aria-label', 'Ir para a próxima questão');
        } else {
            nextBtn.setAttribute('aria-label', 'Selecione uma opção para continuar');
        }
    }

    // Função para anunciar mudanças para leitores de tela
    function announceToScreenReader(message) {
        const ariaLive = document.createElement('div');
        ariaLive.setAttribute('aria-live', 'polite');
        ariaLive.setAttribute('class', 'sr-only'); // Certifique-se que .sr-only está definido no CSS
        document.body.appendChild(ariaLive);
        
        setTimeout(() => {
            ariaLive.textContent = message;
            // Remove o elemento após um tempo para não poluir o DOM
            setTimeout(() => document.body.removeChild(ariaLive), 1000);
        }, 100); // Pequeno delay para garantir que o DOM atualize antes de anunciar
    }

    // --- Configurações do Quiz ---
    let allQuestionsData = [];
    let totalQuizQuestions = 0;
    let quizName = ''; // Para identificar o quiz atual (ex: 'sociais', 'dados')
    let selectedNumberOfQuestions = 0; // Número de questões com base no nível

    // --- Estado do Quiz ---
    let currentQuestionIndex = 0;
    let score = 0;
    let quizData = []; // Será preenchido a partir do 'allQuestionsData' global
    let userAnswers = []; // Guarda dados para revisão

    // --- Funções ---

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    function selectQuestionsSociais(allQuestions) {
        const principalAreas = ['Antropologia', 'Ciencia Politica', 'Sociologia'];
        const principalQuestions = allQuestions.filter(q => principalAreas.includes(q.disciplina));
        const otherQuestions = allQuestions.filter(q => !principalAreas.includes(q.disciplina));

        const shuffledPrincipal = shuffleArray([...principalQuestions]);
        const shuffledOthers = shuffleArray([...otherQuestions]);

        const selectedPrincipal = shuffledPrincipal.slice(0, 35);
        const selectedOthers = shuffledOthers.slice(0, 15);

        return shuffleArray([...selectedPrincipal, ...selectedOthers]);
    }

    function getQuizNameFromURL() {
        const urlParams = new URLSearchParams(window.location.search);
        const quiz = urlParams.get('quiz');
        if (quiz && ['sociais', 'dados', 'projetos'].includes(quiz)) {
            return quiz;
        }
        console.warn("Parâmetro 'quiz' não encontrado ou inválido na URL. Tentando deduzir pelo nome do arquivo (fallback).");
        // Fallback para o nome do arquivo se o parâmetro não estiver presente (mantendo a lógica anterior como segurança)
        const path = window.location.pathname;
        const pageName = path.split("/").pop();
        if (pageName.startsWith('teste_') && pageName.endsWith('.html')) {
            return pageName.substring(6, pageName.length - 5);
        }
        if (pageName.includes('sociais')) return 'sociais';
        if (pageName.includes('dados')) return 'dados';
        if (pageName.includes('projetos')) return 'projetos';
        return null; // Retorna null se não conseguir determinar
    }

    function initQuiz() {
        quizName = getQuizNameFromURL();
        // Certifique-se de que este log está presente para depuração
        console.log(`[Debug] quizName obtido da URL: ${quizName}`); 

        // Mostrar loader enquanto carrega o JSON
        toggleLoader(true);

        if (!quizName) {
            console.error("Não foi possível determinar o tipo de quiz a partir da URL ou nome do arquivo.");
            if(quizArea) quizArea.innerHTML = `<h2>Erro ao Identificar Questionário</h2><p>Não foi possível determinar qual questionário carregar. Verifique a URL ou o nome do arquivo HTML.</p>`;
            return;
        }

        const jsonPath = `../json/teste_${quizName}.json`; 

        fetch(jsonPath)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status} para ${jsonPath}`);
                }
                return response.json();
            })
            .then(data => {
                allQuestionsData = data.questions; 
                const quizTitle = data.title || `Questionário de ${quizName.charAt(0).toUpperCase() + quizName.slice(1)}`; 

                if(quizTitleH1) quizTitleH1.textContent = quizTitle;
                if(pageTitle) pageTitle.textContent = quizTitle;

                // Validação básica da estrutura do JSON
                if (!data || !Array.isArray(data.questions) || data.questions.length === 0) {
                    console.error(`Erro: Dados das perguntas de ${quizName} não foram carregados corretamente, estão vazios ou em formato inválido.`);
                    if(quizArea) quizArea.innerHTML = `<h2>Erro ao Carregar Perguntas</h2><p>Não foi possível encontrar os dados das perguntas para ${quizName} ou o formato é inválido.</p>`;
                    toggleLoader(false);
                    return;
                }

                // Validação de cada questão (exemplo)
                for (const q of data.questions) {
                    if (!q.id || !q.pergunta || !Array.isArray(q.opcoes) || q.opcoes.length === 0 || !q.resposta || !q.tipo) {
                        console.error(`Erro: Questão inválida no JSON (${quizName}): `, q);
                        if(quizArea) quizArea.innerHTML = `<h2>Erro nos Dados das Perguntas</h2><p>Uma ou mais perguntas no arquivo de ${quizName} estão malformadas. Verifique o console para detalhes.</p>`;
                        toggleLoader(false);
                        return;
                    }
                    // Para VF e AG, verificar se vfStatements/afirmacoes existem se o tipo for VF/AG
                    if (q.tipo === 'VF' && !Array.isArray(q.vfStatements)) {
                        console.error(`Erro: Questão VF (id: ${q.id}) não possui 'vfStatements' em ${quizName}.`, q);
                        // Tratar erro ou fornecer fallback
                    }
                    if (q.tipo === 'AG' && !Array.isArray(q.afirmacoes)) {
                        console.error(`Erro: Questão AG (id: ${q.id}) não possui 'afirmacoes' em ${quizName}.`, q);
                        // Tratar erro ou fornecer fallback
                    }
                }

                allQuestionsData = data.questions; // Atribuir após validação

                if (!Array.isArray(allQuestionsData) || allQuestionsData.length === 0) {
                    console.error(`Erro: Dados das perguntas de ${quizName} não foram carregados corretamente ou estão vazios.`);
                    if(quizArea) quizArea.innerHTML = `<h2>Erro ao Carregar Perguntas</h2><p>Não foi possível encontrar os dados das perguntas para ${quizName}.</p>`;
                    return;
                }

                if (quizName === 'sociais') {
                    quizData = selectQuestionsSociais(allQuestionsData);
                } else if (quizName === 'dados') {
                    quizData = shuffleArray([...allQuestionsData]); 
                } else if (quizName === 'projetos') {
                    quizData = shuffleArray([...allQuestionsData]); 
                } else {
                    quizData = shuffleArray([...allQuestionsData]); 
                }

                totalQuizQuestions = quizData.length;
                console.log(`Total de perguntas selecionadas para ${quizName}: ${totalQuizQuestions}`, quizData); 
                if (totalQuizQuestions === 0) {
                    console.error(`Nenhuma pergunta foi selecionada para o quiz ${quizName}. Verifique a lógica de seleção e o conteúdo do JSON.`);
                    if(quizArea) quizArea.innerHTML = `<h2>Erro ao Preparar Perguntas</h2><p>Nenhuma pergunta pôde ser preparada para este questionário. Verifique o console para mais detalhes.</p>`;
                    return; 
                }

                if(progressBar) progressBar.max = totalQuizQuestions;

                // Exibe a seleção de nível em vez de iniciar o quiz diretamente
                if (levelSelectionArea) {
                    levelSelectionArea.classList.remove('hidden');
                    if(quizArea) quizArea.classList.add('hidden');
                    if(resultsArea) resultsArea.classList.add('hidden');
                    if(reviewArea) reviewArea.classList.add('hidden');

                    // Adiciona event listeners aos botões de nível
                    if(levelEasyBtn) levelEasyBtn.addEventListener('click', () => handleLevelSelection(parseInt(levelEasyBtn.dataset.questions)));
                    if(levelMediumBtn) levelMediumBtn.addEventListener('click', () => handleLevelSelection(parseInt(levelMediumBtn.dataset.questions)));
                    if(levelHardBtn) levelHardBtn.addEventListener('click', () => handleLevelSelection(parseInt(levelHardBtn.dataset.questions)));
                } else {
                    // Fallback se a área de seleção de nível não existir (inicia com todas as questões do tipo de quiz)
                    console.warn("Área de seleção de nível não encontrada. Iniciando quiz com configuração padrão.");
                    selectedNumberOfQuestions = quizData.length; // Usa todas as questões selecionadas para o quizName
                    startQuiz(); 
                }

                // Adiciona event listeners principais (movidos para após a seleção de nível ou para startQuiz)
                // if(nextBtn) nextBtn.addEventListener('click', handleNextQuestion);
                // if(restartBtn) restartBtn.addEventListener('click', () => location.reload()); 
                // if(reviewBtn) reviewBtn.addEventListener('click', showReview);
                // if(backToResultsBtn) backToResultsBtn.addEventListener('click', showResults);
            })
            .catch(error => {
                // Certifique-se de que o bloco catch está generalizado
                const errorMessage = `Erro fatal ao carregar ou processar perguntas para o quiz '${quizName}'.`;
                console.error(errorMessage, error);
                if(quizArea) quizArea.innerHTML = `<h2>Erro Crítico</h2><p>Ocorreu um erro ao carregar as perguntas do questionário de ${quizName ? quizName.charAt(0).toUpperCase() + quizName.slice(1) : 'desconhecido'}. Por favor, tente novamente mais tarde. Detalhe: ${error.message}</p>`;
                toggleLoader(false); // Esconder loader em caso de erro
            });
    }

    function handleLevelSelection(numQuestions) {
        selectedNumberOfQuestions = numQuestions;
        toggleLoader(true); // Mostrar loader ao preparar questões

        // Seleciona e embaralha as questões com base no nível escolhido
        // A lógica de quizName (sociais, dados, projetos) já foi aplicada para obter allQuestionsData
        // Agora, selecionamos a quantidade desejada a partir do allQuestionsData específico do quiz.
        
        let questionsForThisQuizType = [];
        if (quizName === 'sociais') {
            // A função selectQuestionsSociais já limita a 35+15 = 50. 
            // Precisamos ajustar para que ela possa retornar mais ou menos, ou ter uma lógica diferente aqui.
            // Por enquanto, vamos pegar do allQuestionsData e depois fatiar.
            questionsForThisQuizType = selectQuestionsSociais(allQuestionsData); // Retorna até 50 questões
        } else {
            // Para outros tipos de quiz, atualmente pega todas e embaralha.
            questionsForThisQuizType = shuffleArray([...allQuestionsData]);
        }

        // Garante que não tentemos pegar mais questões do que o disponível para o tipo de quiz
        const availableQuestionsCount = questionsForThisQuizType.length;
        if (selectedNumberOfQuestions > availableQuestionsCount) {
            console.warn(`Nível ${selectedNumberOfQuestions} solicitado, mas apenas ${availableQuestionsCount} questões disponíveis para ${quizName}. Usando ${availableQuestionsCount} questões.`);
            selectedNumberOfQuestions = availableQuestionsCount;
        }

        quizData = shuffleArray(questionsForThisQuizType).slice(0, selectedNumberOfQuestions);
        totalQuizQuestions = quizData.length; // Atualiza o total de questões para o quiz

        if (totalQuizQuestions === 0) {
            console.error("Nenhuma pergunta disponível para o nível selecionado.");
            if(quizArea) quizArea.innerHTML = `<h2>Sem Perguntas</h2><p>Não há perguntas suficientes para o nível selecionado neste questionário.</p>`;
            if(levelSelectionArea) levelSelectionArea.classList.add('hidden'); // Esconde seleção de nível
            return;
        }

        if(progressBar) progressBar.max = totalQuizQuestions; // Atualiza o max da barra de progresso

        if(levelSelectionArea) levelSelectionArea.classList.add('hidden');
        startQuiz();
        toggleLoader(false); // Esconder loader após iniciar o quiz
    }

    function startQuiz() {
        currentQuestionIndex = 0;
        score = 0;
        userAnswers = [];
        // quizData já foi selecionado e embaralhado em initQuiz, mas podemos embaralhar de novo se quisermos
        // shuffleArray(quizData); // Descomente se quiser re-embaralhar a cada tentativa

        if(presentationArea) presentationArea.classList.add('hidden');
        if(quizArea) quizArea.classList.remove('hidden');
        if(resultsArea) resultsArea.classList.add('hidden');
        if(reviewArea) reviewArea.classList.add('hidden');

        // Adiciona event listeners principais aqui, pois o quiz está efetivamente começando
        if(nextBtn) nextBtn.addEventListener('click', handleNextQuestion);
        // Modificado para chamar resetAndRestartQuiz em vez de location.reload()
        if(restartBtn) restartBtn.addEventListener('click', resetAndRestartQuiz); 
        if(reviewBtn) reviewBtn.addEventListener('click', showReview);
        if(backToResultsBtn) backToResultsBtn.addEventListener('click', showResults);

        loadQuestion();
    }

    function loadQuestion() {
        toggleLoader(true); // Mostrar loader ao carregar nova questão
        if(nextBtn) nextBtn.disabled = true;
        if(optionsContainer) optionsContainer.innerHTML = '';

        const oldList = quizArea.querySelector('.statements-list');
        if (oldList) {
            oldList.remove();
        }

        if (currentQuestionIndex < totalQuizQuestions) {
            const currentQuestion = quizData[currentQuestionIndex];
            const questionNum = currentQuestionIndex + 1;

            if(progressText) progressText.textContent = `Questão ${questionNum} de ${totalQuizQuestions}`;
            if(progressBar) progressBar.value = questionNum;
            
            // if(questionNumber) questionNumber.textContent = questionNum; // 'questionNumber' não está no HTML dos testes
            if(questionDiscipline) questionDiscipline.textContent = currentQuestion.disciplina;
            if(questionText) questionText.textContent = currentQuestion.pergunta;

            let statementsArray = null;
            if (currentQuestion.tipo === 'AG' && currentQuestion.afirmacoes) {
                statementsArray = currentQuestion.afirmacoes;
            } else if (currentQuestion.tipo === 'VF' && currentQuestion.vfStatements) {
                statementsArray = currentQuestion.vfStatements;
            }

            if (statementsArray && Array.isArray(statementsArray)) {
                const statementsList = document.createElement('ol');
                statementsList.classList.add('statements-list');
                statementsList.style.listStyleType = 'upper-roman'; // Para I, II, III
                statementsArray.forEach((statement) => {
                    const li = document.createElement('li');
                    li.textContent = statement;
                    statementsList.appendChild(li);
                });
                if(questionText) questionText.after(statementsList);
            } else if (currentQuestion.tipo === 'AG' || currentQuestion.tipo === 'VF') {
                console.warn(`Questão ${questionNum} (ID: ${currentQuestion.id}) é ${currentQuestion.tipo} mas falta array de afirmações/statements.`);
            }

            createMcOptions(currentQuestion);

            if(nextBtn) {
                if (currentQuestionIndex === totalQuizQuestions - 1) {
                    nextBtn.textContent = 'Ver Resultado';
                } else {
                    nextBtn.textContent = 'Próxima Questão';
                }
            }

        } else {
            showResults();
        }
        // Gerenciamento de foco e anúncio para leitor de tela
        setTimeout(() => { // Adiciona um pequeno delay para garantir que o DOM esteja pronto
            if (questionText) {
                questionText.focus(); // Foca no texto da pergunta
                announceToScreenReader(`Questão ${currentQuestionIndex + 1} de ${totalQuizQuestions} carregada: ${questionText.textContent}`);
            } else if (optionsContainer && optionsContainer.querySelector('input[type="radio"]')) {
                const firstOption = optionsContainer.querySelector('input[type="radio"]');
                if (firstOption) {
                    firstOption.focus(); // Ou na primeira opção
                    const firstOptionLabel = document.querySelector(`label[for="${firstOption.id}"]`);
                    announceToScreenReader(`Questão ${currentQuestionIndex + 1} de ${totalQuizQuestions} carregada. Primeira opção: ${firstOptionLabel ? firstOptionLabel.textContent : ''}`);
                }
            }
            toggleLoader(false); // Esconder loader após carregar a questão
        }, 150); // Aumentar um pouco o delay se necessário
    }

    function createMcOptions(question) {
        const optionLetters = 'ABCDE';
        const radioName = `q${currentQuestionIndex}_options`;

        if (!question.opcoes || !Array.isArray(question.opcoes)) {
             console.error(`Erro: Questão ${currentQuestionIndex + 1} (ID: ${question.id}) não possui 'opcoes' válidas.`);
             if(optionsContainer) optionsContainer.textContent = "Erro: Opções não encontradas para esta questão.";
             return;
        }

        question.opcoes.forEach((optionTextFromJson, index) => {
            let valueForRadioInput = ''; 
            
            if (index < optionLetters.length) {
                valueForRadioInput = optionLetters[index];
            } else {
                console.warn(`Mais de ${optionLetters.length} opções para questão ${question.id}`);
                return; 
            }

            const optionId = `q${currentQuestionIndex}_opt${valueForRadioInput}`;
            let displayTextForLabel = '';

            if (question.tipo === 'VF') {
                if (optionTextFromJson.toUpperCase() === 'V') {
                    displayTextForLabel = 'Verdadeiro';
                } else if (optionTextFromJson.toUpperCase() === 'F') {
                    displayTextForLabel = 'Falso';
                } else {
                    displayTextForLabel = optionTextFromJson; // Fallback
                }
            } else { // Para MC, AG
                displayTextForLabel = `${valueForRadioInput}) ${optionTextFromJson}`;
            }
            createRadioOption(valueForRadioInput, displayTextForLabel, optionId, radioName);
        });
    }

    function createRadioOption(value, labelText, optionId, radioName) {
        const div = document.createElement('div');
        div.classList.add('option-item');

        const input = document.createElement('input');
        input.type = 'radio';
        input.id = optionId;
        input.name = radioName;
        input.value = value;

        const label = document.createElement('label');
        label.htmlFor = optionId;
        label.textContent = labelText;

        input.addEventListener('change', () => {
            if(nextBtn) nextBtn.disabled = false;
        });

        div.appendChild(input);
        div.appendChild(label);
        if(optionsContainer) optionsContainer.appendChild(div);
    }

    function handleNextQuestion() {
        if(!optionsContainer) return;
        const selectedOptionInput = optionsContainer.querySelector('input[type="radio"]:checked');
        if (!selectedOptionInput) return;

        const userAnswerValue = selectedOptionInput.value;
        const currentQuestion = quizData[currentQuestionIndex];
        const correctAnswerLetter = currentQuestion.resposta.toUpperCase();

        const isCorrect = userAnswerValue === correctAnswerLetter;

        if (isCorrect) {
            score++;
        }

        const answerData = {
            questionIndex: currentQuestionIndex,
            id: currentQuestion.id,
            type: currentQuestion.tipo,
            disciplina: currentQuestion.disciplina || 'Desconhecida',
            questionText: currentQuestion.pergunta,
            contexto: currentQuestion.contexto || '',
            options: currentQuestion.opcoes,
            userAnswer: userAnswerValue,
            correctAnswer: correctAnswerLetter,
            isCorrect: isCorrect
        };

        if (currentQuestion.tipo === 'AG') {
            answerData.statements = currentQuestion.afirmacoes;
        } else if (currentQuestion.tipo === 'VF') {
            answerData.statements = currentQuestion.vfStatements;
        }

        userAnswers.push(answerData);

        currentQuestionIndex++;
        if (currentQuestionIndex < totalQuizQuestions) {
            loadQuestion();
        } else {
            showResults();
        }
    }

    function showResults() {
        if(quizArea) quizArea.classList.add('hidden');
        if(resultsArea) resultsArea.classList.remove('hidden');
        if(reviewArea) reviewArea.classList.add('hidden');

        const percentage = totalQuizQuestions > 0 ? ((score / totalQuizQuestions) * 100).toFixed(1) : 0;

        if(scoreText) scoreText.textContent = `Você acertou ${score} de ${totalQuizQuestions} questões.`;
        if(percentageText) percentageText.textContent = `Sua pontuação: ${percentage}%`;

        let level = "Pontuação abaixo do nível Associate.";
        if (percentage >= 80) {
            level = "Nível: Master (Lembre-se que o nível Master oficial requer 2 exames especialistas)";
        } else if (percentage >= 70) {
            level = "Nível: Practitioner";
        } else if (percentage >= 60) {
            level = "Nível: Associate";
        }
        if(levelText) levelText.textContent = level;

        // Focar no título dos resultados para acessibilidade
        const resultsTitle = resultsArea.querySelector('h2');
        if (resultsTitle) {
            resultsTitle.focus();
        }
        announceToScreenReader(`Quiz finalizado. Você acertou ${score} de ${totalQuizQuestions}. Sua pontuação: ${percentage}%. Nível: ${level}`);
    }

    function showReview() {
        if(resultsArea) resultsArea.classList.add('hidden');
        if(reviewArea) reviewArea.classList.remove('hidden');
        if(reviewContent) reviewContent.innerHTML = '';

        const optionLetters = 'ABCDE';

        userAnswers.sort((a, b) => a.questionIndex - b.questionIndex);

        userAnswers.forEach((answer, displayIndex) => {
            const reviewItem = document.createElement('div');
            reviewItem.classList.add('review-item');

            const questionTitle = document.createElement('p');
            questionTitle.innerHTML = `<strong>Questão ${displayIndex + 1} (${answer.disciplina} - ${answer.type}):</strong><br>${answer.questionText}`;
            reviewItem.appendChild(questionTitle);

             if (answer.contexto) {
                 const contextP = document.createElement('p');
                 contextP.classList.add('review-context');
                 contextP.innerHTML = `<em>Contexto: ${answer.contexto}</em>`;
                 reviewItem.appendChild(contextP);
             }

            if ((answer.type === 'AG' || answer.type === 'VF') && answer.statements && Array.isArray(answer.statements)) {
                const statementsList = document.createElement('ol');
                statementsList.classList.add('review-statements');
                statementsList.style.listStyleType = 'upper-roman';
                answer.statements.forEach(statement => {
                    const li = document.createElement('li');
                    li.textContent = statement;
                    statementsList.appendChild(li);
                });
                reviewItem.appendChild(statementsList);
            }

            if (answer.options && Array.isArray(answer.options)) {
                 answer.options.forEach((optionText, optIndex) => {
                      if (optIndex >= optionLetters.length) return;
                      const letter = optionLetters[optIndex];
                      createReviewOption(reviewItem, letter, optionText, answer);
                 });
            } else {
                 const errorP = document.createElement('p');
                 errorP.textContent = "Erro: Opções desta questão não foram salvas para revisão.";
                 reviewItem.appendChild(errorP);
            }
            if(reviewContent) reviewContent.appendChild(reviewItem);
        });

        // Focar no título da revisão
        const reviewTitle = reviewArea.querySelector('h3');
        if (reviewTitle) {
            reviewTitle.focus();
        }
        announceToScreenReader("Modo de revisão de respostas ativado.");
    }

    function createReviewOption(container, letterForComparison, optionTextFromJson, answerData) {
        const optionDiv = document.createElement('div');
        optionDiv.classList.add('review-option');

        let displayReviewOptionText = '';
        if (answerData.type === 'VF') {
            if (optionTextFromJson.toUpperCase() === 'V') {
                displayReviewOptionText = 'Verdadeiro';
            } else if (optionTextFromJson.toUpperCase() === 'F') {
                displayReviewOptionText = 'Falso';
            } else {
                displayReviewOptionText = optionTextFromJson; // Fallback
            }
        } else { // MC, AG
            displayReviewOptionText = `${letterForComparison}) ${optionTextFromJson}`;
        }
        optionDiv.textContent = displayReviewOptionText;

        const isUserAnswer = (letterForComparison === answerData.userAnswer);
        const isCorrectAnswer = (letterForComparison === answerData.correctAnswer);

        if (isCorrectAnswer) {
            optionDiv.classList.add('correct');
        }

        if (isUserAnswer) {
            const indicator = document.createElement('span');
            indicator.classList.add('user-answer-indicator');
            indicator.textContent = ' (Sua Resposta)';
            optionDiv.appendChild(indicator);

            if (!answerData.isCorrect) {
                optionDiv.classList.add('incorrect', 'user-selected');
            } else {
                optionDiv.classList.add('user-selected');
            }
        }
        container.appendChild(optionDiv);
    }

    // Nova função para resetar o quiz
    function resetAndRestartQuiz() {
        toggleLoader(true);
        // Resetar variáveis de estado
        currentQuestionIndex = 0;
        score = 0;
        userAnswers = [];
        quizData = [];
        allQuestionsData = []; // Importante para recarregar o JSON
        selectedNumberOfQuestions = 0;
        quizName = ''; // Resetar nome do quiz para ser redefinido

        // Esconder áreas de quiz/resultado/revisão
        if (quizArea) quizArea.classList.add('hidden');
        if (resultsArea) resultsArea.classList.add('hidden');
        if (reviewArea) reviewArea.classList.add('hidden');
        
        // Limpar containers de conteúdo dinâmico
        if (optionsContainer) optionsContainer.innerHTML = '';
        if (progressText) progressText.textContent = 'Carregando...';
        if (progressBar) {
            progressBar.value = 0;
            progressBar.max = 10; // Resetar para um valor padrão
        }
        if (scoreText) scoreText.textContent = '';
        if (percentageText) percentageText.textContent = '';
        if (levelText) levelText.textContent = '';
        if (reviewContent) reviewContent.innerHTML = '';
        if (quizTitleH1) quizTitleH1.textContent = 'Questionário'; // Resetar título
        if (pageTitle) pageTitle.textContent = 'Questionário';


        // Remover listeners de botões que são adicionados em startQuiz para evitar duplicidade
        // (ou garantir que initQuiz/startQuiz os configurem corretamente sem duplicar)
        // Esta parte é delicada. Uma forma mais segura é ter uma função que remove e adiciona listeners.
        // Por simplicidade, vamos confiar que initQuiz irá reconfigurar ou que os listeners não se acumulam problematicamente
        // se os botões forem os mesmos.

        // Re-exibir a seleção de nível (se existir) ou a apresentação
        if (levelSelectionArea) {
            levelSelectionArea.classList.remove('hidden');
            // Limpar botões de nível se eles foram modificados ou para resetar estado
            const levelButtons = levelSelectionArea.querySelectorAll('.level-btn');
            levelButtons.forEach(btn => {
                // Se houver listeners específicos adicionados dinamicamente, eles podem precisar ser recriados
                // ou gerenciados com mais cuidado.
            });
        } else if (presentationArea) {
            presentationArea.classList.remove('hidden');
        }
        
        // Re-inicializar o quiz para buscar o JSON e mostrar a seleção de nível
        // initQuiz() já é chamado no final, e ele lida com o loader.
        initQuiz(); 
        // toggleLoader(false) será chamado dentro de initQuiz ou handleLevelSelection
    }

    // --- Iniciar ---
    initQuiz();
});
