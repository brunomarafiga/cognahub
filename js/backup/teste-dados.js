// script.js
document.addEventListener('DOMContentLoaded', () => {
    // --- Elementos do DOM ---
    const progressText = document.getElementById('progress-text');
    const progressBar = document.getElementById('progress-bar');
    const questionNumber = document.getElementById('question-number');
    const questionText = document.getElementById('question-text');
    const optionsContainer = document.getElementById('options-container');
    const nextBtn = document.getElementById('next-btn');
    const quizArea = document.getElementById('quiz-area');
    const resultsArea = document.getElementById('results-area');
    const scoreText = document.getElementById('score-text');
    const percentageText = document.getElementById('percentage-text');
    const levelText = document.getElementById('level-text');
    const reviewBtn = document.getElementById('review-btn');
    const restartBtn = document.getElementById('restart-btn');
    const reviewArea = document.getElementById('review-area');
    const reviewContent = document.getElementById('review-content');
    const backToResultsBtn = document.getElementById('back-to-results-btn');
    const restartFromReviewBtn = document.getElementById('restart-from-review-btn');

    // --- Estado do Quiz ---
    let currentQuestionIndex = 0;
    let score = 0;
    let quizData = []; // Array para guardar as perguntas (possivelmente embaralhadas)
    let userAnswers = []; // Guarda { questionIndex, userAnswer, correctAnswer, isCorrect }

    // --- Funções ---

    function shuffleArray(array) {
        // Algoritmo Fisher-Yates (Knuth) Shuffle
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]]; // Troca elementos
        }
        return array;
    }

    function startQuiz() {
        currentQuestionIndex = 0;
        score = 0;
        userAnswers = [];
        quizData = shuffleArray([...questions]); // Cria cópia embaralhada
        
        // Reseta visibilidade
        quizArea.classList.remove('hidden');
        resultsArea.classList.add('hidden');
        reviewArea.classList.add('hidden');
        
        // Carrega a primeira pergunta
        loadQuestion();
    }

    function loadQuestion() {
        // Desabilita o botão "Próxima" até uma opção ser selecionada
        nextBtn.disabled = true;
        
        // Limpa opções anteriores
        optionsContainer.innerHTML = '';

        // Verifica se ainda há perguntas
        if (currentQuestionIndex < quizData.length) {
            const currentQuestion = quizData[currentQuestionIndex];

            // Atualiza texto e barra de progresso
            const questionNum = currentQuestionIndex + 1;
            progressText.textContent = `Questão ${questionNum} de ${quizData.length}`;
            progressBar.value = questionNum;
            progressBar.max = quizData.length; // Garante que o max está correto
            questionNumber.textContent = `Questão ${questionNum}`;
            questionText.textContent = currentQuestion.pergunta;

            // Cria e adiciona as opções de resposta
            const optionLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            currentQuestion.opcoes.forEach((option, index) => {
                const letter = optionLetters[index];
                const optionId = `q${currentQuestionIndex}_opt${letter}`;

                const div = document.createElement('div');
                
                const input = document.createElement('input');
                input.type = 'radio';
                input.id = optionId;
                input.name = `q${currentQuestionIndex}_options`; // Mesmo nome para o grupo
                input.value = letter; // O valor será a letra da opção

                const label = document.createElement('label');
                label.htmlFor = optionId;
                label.textContent = option;

                // Event listener para habilitar o botão 'Próxima' ao selecionar
                input.addEventListener('change', () => {
                    nextBtn.disabled = false;
                });

                div.appendChild(input);
                div.appendChild(label);
                optionsContainer.appendChild(div);
            });
             // Atualiza texto do botão
             if (currentQuestionIndex === quizData.length - 1) {
                nextBtn.textContent = 'Ver Resultado';
            } else {
                nextBtn.textContent = 'Próxima Questão';
            }

        } else {
            // Se não houver mais perguntas (caso raro de chegar aqui sem ser pelo nextBtn)
            showResults();
        }
    }

    function handleNextQuestion() {
        // Encontra a resposta selecionada
        const selectedOptionInput = optionsContainer.querySelector('input[type="radio"]:checked');
        
        if (!selectedOptionInput) return; // Não faz nada se nada foi selecionado

        const userAnswerLetter = selectedOptionInput.value;
        const currentQuestion = quizData[currentQuestionIndex];
        const correctAnswerLetter = currentQuestion.resposta.toUpperCase();
        const isCorrect = userAnswerLetter === correctAnswerLetter;

        // Atualiza pontuação
        if (isCorrect) {
            score++;
        }

        // Guarda a resposta do usuário para revisão
        userAnswers.push({
            questionIndex: currentQuestionIndex, // Guarda índice original se precisar
            questionText: currentQuestion.pergunta,
            options: currentQuestion.opcoes,
            userAnswer: userAnswerLetter,
            correctAnswer: correctAnswerLetter,
            isCorrect: isCorrect
        });

        // Avança para a próxima questão ou mostra resultados
        currentQuestionIndex++;

        if (currentQuestionIndex < quizData.length) {
            loadQuestion();
        } else {
            showResults();
        }
    }

    function showResults() {
        quizArea.classList.add('hidden');
        resultsArea.classList.remove('hidden');
        reviewArea.classList.add('hidden'); // Garante que a revisão esteja oculta

        const totalQuestions = quizData.length;
        const percentage = totalQuestions > 0 ? ((score / totalQuestions) * 100).toFixed(1) : 0;

        scoreText.textContent = `Você acertou ${score} de ${totalQuestions} questões.`;
        percentageText.textContent = `Sua pontuação: ${percentage}%`;

        // Determina o nível
        let level = "Pontuação abaixo do nível Associate.";
        if (percentage >= 80) {
            level = "Nível: Master (Lembre-se que o nível Master oficial requer 2 exames especialistas)";
        } else if (percentage >= 70) {
            level = "Nível: Practitioner";
        } else if (percentage >= 60) {
            level = "Nível: Associate";
        }
        levelText.textContent = level;
    }

    function showReview() {
        resultsArea.classList.add('hidden');
        reviewArea.classList.remove('hidden');
        reviewContent.innerHTML = ''; // Limpa conteúdo anterior

        const optionLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

        userAnswers.forEach((answer, index) => {
            const reviewItem = document.createElement('div');
            reviewItem.classList.add('review-item');

            const questionTitle = document.createElement('p');
            questionTitle.innerHTML = `<strong>Questão ${index + 1}:</strong> ${answer.questionText}`;
            reviewItem.appendChild(questionTitle);

            answer.options.forEach((optionText, optIndex) => {
                 const letter = optionLetters[optIndex];
                 const optionP = document.createElement('span'); // Usar span para ser inline block
                 optionP.classList.add('review-option');
                 optionP.textContent = `${letter}) ${optionText}`;

                 if (letter === answer.correctAnswer) {
                     optionP.classList.add('correct');
                 }
                 if (letter === answer.userAnswer) {
                     optionP.classList.add('user-selected');
                      if (!answer.isCorrect) {
                         optionP.classList.add('incorrect');
                     }
                 }
                 reviewItem.appendChild(optionP);
            });

            reviewContent.appendChild(reviewItem);
        });
    }

    // --- Event Listeners ---
    nextBtn.addEventListener('click', handleNextQuestion);
    restartBtn.addEventListener('click', startQuiz);
    reviewBtn.addEventListener('click', showReview);
    backToResultsBtn.addEventListener('click', showResults); // Simplesmente mostra a tela de resultados novamente
    restartFromReviewBtn.addEventListener('click', startQuiz);


    // --- Iniciar o Quiz ---
    startQuiz(); 
});