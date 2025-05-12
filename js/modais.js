/**
 * modais.js - Gerencia a funcionalidade de todos os modais da aplicação
 * Controla a abertura, fechamento e submissão de formulários em modais
 */

document.addEventListener('DOMContentLoaded', () => {
    // Inicializa todos os modais
    inicializarModais();
});

/**
 * Inicializa todos os modais da página
 */
function inicializarModais() {
    // Seleciona todos os botões de fechar modal
    const botoesFechar = document.querySelectorAll('.modal .close');
    botoesFechar.forEach(botao => {
        botao.addEventListener('click', () => {
            const modal = botao.closest('.modal');
            if (modal) {
                fecharModal(modal.id);
            }
        });
    });

    // Inicializa os formulários dos modais
    inicializarFormularios();

    // Fecha modal ao clicar fora do conteúdo
    window.addEventListener('click', (event) => {
        const modais = document.querySelectorAll('.modal');
        modais.forEach(modal => {
            if (event.target === modal) {
                fecharModal(modal.id);
            }
        });
    });

    // Fecha modal ao pressionar ESC
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            const modalAberto = document.querySelector('.modal.active');
            if (modalAberto) {
                fecharModal(modalAberto.id);
            }
        }
    });
}

/**
 * Inicializa os formulários dos modais
 */
function inicializarFormularios() {
    // Formulário de Livro
    const formLivro = document.getElementById('addBookForm');
    if (formLivro) {
        formLivro.addEventListener('submit', (e) => {
            e.preventDefault();
            const dadosLivro = {
                titulo: document.getElementById('bookTitle').value,
                autor: document.getElementById('bookAuthor').value,
                descricao: document.getElementById('bookDescription').value
            };
            adicionarRecurso('Livros', dadosLivro);
            fecharModal('addBookModal');
            formLivro.reset();
        });
    }

    // Formulário de Podcast
    const formPodcast = document.getElementById('addPodcastForm');
    if (formPodcast) {
        formPodcast.addEventListener('submit', (e) => {
            e.preventDefault();
            const dadosPodcast = {
                titulo: document.getElementById('podcastTitle').value,
                descricao: document.getElementById('podcastDescription').value,
                link: document.getElementById('podcastLink').value
            };
            adicionarRecurso('Podcasts', dadosPodcast);
            fecharModal('addPodcastModal');
            formPodcast.reset();
        });
    }

    // Formulário de Site de Notícias
    const formSiteNoticias = document.getElementById('addNewsSiteForm');
    if (formSiteNoticias) {
        formSiteNoticias.addEventListener('submit', (e) => {
            e.preventDefault();
            const dadosSite = {
                titulo: document.getElementById('newsSiteTitle').value,
                descricao: document.getElementById('newsSiteDescription').value,
                link: document.getElementById('newsSiteLink').value
            };
            adicionarRecurso('Sites de Notícias', dadosSite);
            fecharModal('addNewsSiteModal');
            formSiteNoticias.reset();
        });
    }

    // Formulário de Canal do YouTube
    const formYouTube = document.getElementById('addYoutubeChannelForm');
    if (formYouTube) {
        formYouTube.addEventListener('submit', (e) => {
            e.preventDefault();
            const dadosCanal = {
                titulo: document.getElementById('youtubeChannelTitle').value,
                descricao: document.getElementById('youtubeChannelDescription').value,
                link: document.getElementById('youtubeChannelLink').value
            };
            adicionarRecurso('Canais do YouTube', dadosCanal);
            fecharModal('addYoutubeChannelModal');
            formYouTube.reset();
        });
    }
}

/**
 * Abre um modal específico
 * @param {string} modalId - ID do modal a ser aberto
 */
function abrirModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
        
        // Acessibilidade: foca no primeiro input do modal
        const primeiroInput = modal.querySelector('input, textarea');
        if (primeiroInput) {
            setTimeout(() => {
                primeiroInput.focus();
            }, 100);
        }
    }
}

/**
 * Fecha um modal específico
 * @param {string} modalId - ID do modal a ser fechado
 */
function fecharModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
    }
}

/**
 * Adiciona um novo recurso à categoria especificada
 * @param {string} categoria - Nome da categoria
 * @param {Object} dados - Dados do recurso a ser adicionado
 */
function adicionarRecurso(categoria, dados) {
    const categoriaDiv = document.querySelector(`.categoria[data-categoria="${categoria}"]`);
    if (!categoriaDiv) return;

    const listaUl = categoriaDiv.querySelector('.lista-recursos ul');
    if (!listaUl) return;

    const novoItem = document.createElement('li');
    
    // Formata o conteúdo do item baseado no tipo de recurso
    if (categoria === "Livros" && dados.autor) {
        novoItem.innerHTML = `
            <strong>${dados.titulo}</strong> - <em>${dados.autor}</em>
            <p>${dados.descricao}</p>
        `;
    } else if (dados.link) {
        novoItem.innerHTML = `
            <a href="${dados.link}" target="_blank" rel="noopener noreferrer">
                <strong>${dados.titulo}</strong>
            </a>
            <p>${dados.descricao}</p>
        `;
    } else {
        novoItem.innerHTML = `
            <strong>${dados.titulo}</strong>
            <p>${dados.descricao}</p>
        `;
    }
    
    // Adiciona com animação
    novoItem.classList.add('novo-item');
    listaUl.appendChild(novoItem);
    
    // Remove a classe de animação após a transição
    setTimeout(() => {
        novoItem.classList.remove('novo-item');
    }, 500);
    
    // Opcional: salvar em localStorage ou enviar para o servidor
    salvarRecurso(categoria, dados);
}

/**
 * Salva o recurso no armazenamento local do navegador
 * @param {string} categoria - Nome da categoria
 * @param {Object} dados - Dados do recurso
 */
function salvarRecurso(categoria, dados) {
    try {
        // Recupera os recursos existentes
        let recursos = JSON.parse(localStorage.getItem('recursos')) || {};
        
        // Inicializa a categoria se não existir
        if (!recursos[categoria]) {
            recursos[categoria] = [];
        }
        
        // Adiciona o novo recurso
        recursos[categoria].push({
            ...dados,
            id: Date.now(), // Gera um ID único
            dataCriacao: new Date().toISOString()
        });
        
        // Salva de volta no localStorage
        localStorage.setItem('recursos', JSON.stringify(recursos));
        
        console.log(`Recurso adicionado à categoria ${categoria}`);
    } catch (error) {
        console.error('Erro ao salvar recurso:', error);
    }
}