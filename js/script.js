/**
 * script.js - Arquivo JavaScript principal da aplicação Cognita Hub
 * Inicializa componentes, navegação responsiva e renderização dinâmica de recursos
 */

// ========== INICIALIZAÇÃO PRINCIPAL ==========
document.addEventListener('DOMContentLoaded', () => {
    atualizarAnoRodape();
    inicializarNavegacaoScroll();
    inicializarNavegacaoMobile();
    carregarRecursosDasCategorias();
});

// ========== UTILITÁRIOS ==========
function atualizarAnoRodape() {
    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }
}

// ========== NAVEGAÇÃO SCROLL & ACTIVE STATE ==========
function inicializarNavegacaoScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = document.querySelector('.main-navigation')?.offsetHeight || 80;
                window.scrollTo({
                    top: targetElement.offsetTop - headerHeight,
                    behavior: 'smooth'
                });
                
                // Fechar menu mobile ao clicar em um link de ancoragem
                const navMenu = document.getElementById('nav-menu');
                const navToggle = document.querySelector('.nav-toggle');
                if (navMenu && navMenu.classList.contains('is-active')) {
                    navMenu.classList.remove('is-active');
                    if (navToggle) {
                        navToggle.setAttribute('aria-expanded', 'false');
                        navToggle.setAttribute('aria-label', 'Abrir menu');
                    }
                }
            }
        });
    });

    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        let foundActive = false;
        document.querySelectorAll('main section[id]').forEach(section => {
            const sectionTop = section.offsetTop - 150;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.id;
            const navLink = document.querySelector(`.site-nav a[href="#${sectionId}"]`);
            if (navLink) {
                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    document.querySelectorAll('.site-nav a').forEach(link => link.classList.remove('active'));
                    navLink.classList.add('active');
                    foundActive = true;
                } else {
                    navLink.classList.remove('active');
                }
            }
        });
        if (!foundActive && scrollPosition < 200) {
            const homeLink = document.querySelector('.site-nav a[href="index.html"]');
            if (homeLink) homeLink.classList.add('active');
        }
    });
}

// ========== NAVEGAÇÃO MOBILE TOGGLE ==========
function inicializarNavegacaoMobile() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            const isActive = navMenu.classList.toggle('is-active');
            navToggle.setAttribute('aria-expanded', isActive.toString());
            if (isActive) {
                navToggle.setAttribute('aria-label', 'Fechar menu');
            } else {
                navToggle.setAttribute('aria-label', 'Abrir menu');
            }
        });

        // Fechar o menu se clicar fora dele em mobile
        document.addEventListener('click', (event) => {
            if (!navMenu.contains(event.target) && !navToggle.contains(event.target) && navMenu.classList.contains('is-active')) {
                navMenu.classList.remove('is-active');
                navToggle.setAttribute('aria-expanded', 'false');
                navToggle.setAttribute('aria-label', 'Abrir menu');
            }
        });
    }
}

// ========== CARREGAMENTO E RENDERIZAÇÃO DE RECURSOS ==========
function carregarRecursosDasCategorias() {
    fetch('json/categorias.json')
        .then(response => {
            if (!response.ok) {
                console.error('Falha ao carregar categorias.json. Status:', response.status);
                throw new Error('Erro ao carregar categorias.json. Status: ' + response.status);
            }
            return response.json();
        })
        .then(categorias => {
            renderizarRecursos(categorias);
        })
        .catch(err => exibirErroRecursos(err));
}

function renderizarRecursos(categorias) {
    const categoriasContainer = document.querySelector('#recursos-anchor .categorias-grid') || document.querySelector('.categorias-grid');
    if (!categoriasContainer) {
        console.error('Container de categorias-grid não encontrado');
        return;
    }
    categoriasContainer.innerHTML = '';

    Object.entries(categorias).forEach(([categoriaNome, recursos]) => {
        const categoriaDiv = document.createElement('div');
        categoriaDiv.className = 'categoria';
        categoriaDiv.setAttribute('data-categoria', categoriaNome);
        
        let tituloSubcategoria = categoriaNome;
        if (categoriaNome === "Livros") tituloSubcategoria = "Biblioteca Cognita";
        else if (categoriaNome === "Podcasts") tituloSubcategoria = "Audioteca Cognita";
        else if (categoriaNome === "Canais do YouTube") tituloSubcategoria = "Videoteca Cognita";
        else if (categoriaNome === "Sites de Notícias") tituloSubcategoria = "Observatório Cognita";

        categoriaDiv.innerHTML = `<h3>${tituloSubcategoria}</h3>`;
        
        const ul = document.createElement('ul');
        ul.className = 'lista-recursos';
        
        if (!recursos || recursos.length === 0) {
            const liEmpty = document.createElement('li');
            liEmpty.textContent = 'Nenhum recurso disponível no momento.';
            liEmpty.className = 'recurso-item-empty';
            ul.appendChild(liEmpty);
        } else {
            recursos.forEach((recurso, index) => {
                const itemLi = criarItemRecurso(recurso, categoriaNome, index);
                if (itemLi) {
                    ul.appendChild(itemLi);
                }
            });
        }
        categoriaDiv.appendChild(ul);
        categoriasContainer.appendChild(categoriaDiv);

        // Lógica para "Mostrar Mais"
        const itensLi = ul.querySelectorAll('li.recurso-item');
        const maxItensVisiveis = 5;

        if (itensLi.length > maxItensVisiveis) {
            for (let i = maxItensVisiveis; i < itensLi.length; i++) {
                itensLi[i].classList.add('item-hidden'); 
            }

            const btnMostrarMais = document.createElement('button');
            btnMostrarMais.classList.add('btn-show-more');
            btnMostrarMais.textContent = 'Mostrar Mais';
            categoriaDiv.appendChild(btnMostrarMais); 

            btnMostrarMais.addEventListener('click', function() {
                const itensOcultosNestaCategoria = ul.querySelectorAll('li.recurso-item.item-hidden');
                if (itensOcultosNestaCategoria.length > 0) {
                    itensOcultosNestaCategoria.forEach(item => item.classList.remove('item-hidden'));
                    this.textContent = 'Mostrar Menos';
                } else {
                    for (let i = maxItensVisiveis; i < itensLi.length; i++) {
                        itensLi[i].classList.add('item-hidden');
                    }
                    this.textContent = 'Mostrar Mais';
                }
            });
        }
    });
}

function criarItemRecurso(recurso, categoria, index) {
    if (!recurso || typeof recurso !== 'object') {
        console.warn('Recurso inválido:', recurso);
        return null;
    }

    const li = document.createElement('li');
    li.className = 'recurso-item';
    if (index === 0) {
        li.classList.add('item-featured');
    }

    const cardDiv = document.createElement('div');
    cardDiv.className = 'recurso-card';

    const temCapaValida = recurso.capa && recurso.capa.trim() !== '';
    const capaSrc = temCapaValida ? recurso.capa : 'img/placeholder.jpg'; 
    const altText = recurso.titulo ? `Capa de ${recurso.titulo}` : 'Capa do recurso';
    
    const capaHtml = `
        <div class="recurso-capa">
            <img src="${capaSrc}" alt="${altText}" 
                 onerror="this.onerror=null; this.src='img/placeholder.jpg'; this.alt='Imagem indisponível';">
        </div>`;

    let infoHtml = '<div class="recurso-info">';
    const tituloDisplay = recurso.titulo || 'Título Indisponível';

    if (recurso.link) { 
        infoHtml += `<h4><a href="${recurso.link}" target="_blank" rel="noopener noreferrer">${tituloDisplay}</a></h4>`;
    } else {
        infoHtml += `<h4>${tituloDisplay}</h4>`;
    }

    if (categoria === 'Livros' && recurso.autor) {
        infoHtml += `<p class="recurso-autor">Por: ${recurso.autor}</p>`;
    }
    
    if (recurso.descricao) {
        infoHtml += `<p class="recurso-descricao">${recurso.descricao}</p>`;
    }
    infoHtml += '</div>';
    
    cardDiv.innerHTML = capaHtml + infoHtml;
    li.appendChild(cardDiv);
    return li;
}

function exibirErroRecursos(err) {
    const categoriasContainer = document.querySelector('#recursos-anchor .categorias-grid') || document.querySelector('.categorias-grid');
    if (categoriasContainer) {
        categoriasContainer.innerHTML = '<p class="error-message">Erro ao carregar os recursos. Tente novamente mais tarde.</p>';
    }
    console.error('Erro detalhado ao carregar recursos:', err);
}