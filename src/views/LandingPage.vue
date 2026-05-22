<template>
    <main class="corpo">
        <nav class="nav">
            <NavLandingPage/>
        </nav>

        <!-- Hero -->
        <section class="tela hero">
            <div class="hero-grid">
                <div class="hero-tag">IA para desenvolvedores</div>
                <h1 class="hero-titulo">Documentação automática para seu código.</h1>
                <p class="hero-sub">O CodeDoc analisa seu repositório GitHub e gera README, Wiki, diagramas e glossário em segundos — sem esforço manual.</p>
                <div class="hero-botoes">
                    <router-link to="/registrar" class="btn-primario">Começar grátis</router-link>
                    <a href="#sobre" class="btn-secundario">Ver como funciona</a>
                </div>
            </div>
        </section>

        <!-- Sobre -->
        <section class="tela sobre" id="sobre">
            <div class="sobre-inner">
                <span class="secao-label">Sobre nós</span>
                <h2 class="secao-titulo">Elimine a dívida técnica de uma vez por todas.</h2>
                <p class="sobre-texto">O CodeDoc é uma plataforma que usa Inteligência Artificial para gerar documentação técnica completa a partir do código-fonte ou repositórios do GitHub. Em poucos segundos, a plataforma cria README, wiki técnica, diagramas de fluxo e glossários estruturados — mantendo seus projetos organizados sem escrever uma linha de documentação manualmente.</p>
                <div class="stats">
                    <div class="stat">
                        <span class="stat-num">4</span>
                        <span class="stat-label">tipos de doc gerados</span>
                    </div>
                    <div class="stat">
                        <span class="stat-num">&lt;30s</span>
                        <span class="stat-label">tempo médio</span>
                    </div>
                    <div class="stat">
                        <span class="stat-num">100%</span>
                        <span class="stat-label">gratuito</span>
                    </div>
                </div>
            </div>
        </section>

        <!-- Serviços -->
        <section class="tela servicos">
            <div class="servicos-inner">
                <span class="secao-label">Serviços</span>
                <h2 class="secao-titulo">Tudo que seu projeto precisa.</h2>

                <div class="servicos-grid">
                    <div class="servico-card">
                        <div class="servico-icon">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14,2 14,8 20,8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10,9 9,9 8,9"/></svg>
                        </div>
                        <h3 class="servico-nome">README</h3>
                        <p class="servico-desc">Gerado automaticamente com título, descrição, como instalar, como usar e tecnologias do projeto. Pronto para o GitHub.</p>
                    </div>

                    <div class="servico-card">
                        <div class="servico-icon">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/></svg>
                        </div>
                        <h3 class="servico-nome">Wiki técnica</h3>
                        <p class="servico-desc">Documentação detalhada dos módulos, funções, estruturas e arquitetura do sistema. Ideal para onboarding de novos devs.</p>
                    </div>

                    <div class="servico-card">
                        <div class="servico-icon">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
                        </div>
                        <h3 class="servico-nome">Diagramas</h3>
                        <p class="servico-desc">Fluxogramas e diagramas de arquitetura gerados a partir da análise do código. Visualize a estrutura do projeto de forma clara.</p>
                    </div>

                    <div class="servico-card">
                        <div class="servico-icon">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
                        </div>
                        <h3 class="servico-nome">Glossário</h3>
                        <p class="servico-desc">Lista estruturada dos principais termos, conceitos e componentes do projeto. Padroniza a linguagem da equipe.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA -->
        <section class="tela cta-section">
            <div class="cta-inner">
                <h2 class="cta-titulo">Pronto para documentar seu projeto?</h2>
                <p class="cta-sub">Gratuito, sem cartão de crédito. Basta conectar seu repositório.</p>
                <router-link to="/registrar" class="btn-primario btn-grande">Começar agora →</router-link>
            </div>
        </section>

        <!-- Footer -->
        <footer class="footer">
            <div class="footer-inner">
                <div class="footer-brand">
                    <span class="footer-logo">CodeDoc</span>
                    <p class="footer-tagline">Documentação automática com IA.</p>
                </div>
                <div class="footer-links">
                    <div class="footer-col">
                        <p class="footer-col-titulo">Contato</p>
                        <p class="footer-link">codedoc.suporte@gmail.com</p>
                        <p class="footer-link">+55 (11) 97777-0000</p>
                    </div>
                    <div class="footer-col">
                        <p class="footer-col-titulo">Localização</p>
                        <p class="footer-link">Brasil, São Paulo — SP</p>
                    </div>
                    <div class="footer-col">
                        <p class="footer-col-titulo">Legal</p>
                        <router-link to="/politica-de-uso" class="footer-link footer-link-a">Política de uso</router-link>
                        <router-link to="/politica-de-privacidade" class="footer-link footer-link-a">Política de privacidade</router-link>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <p>© 2026 CodeDoc. Todos os direitos reservados.</p>
            </div>
        </footer>
    </main>
</template>

<script>
import NavLandingPage from '@/components/NavLandingPage.vue';

export default {
    name: 'LandingPage',
    components: { NavLandingPage }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Mono:wght@300;400;500&display=swap');

/* ── Base ── */
.corpo {
    width: 100%;
    min-height: 100vh;
    background-color: var(--cor-tema);
    color: var(--cor-fundo-2);
    /* font-family: 'Syne', sans-serif; */
    overflow-x: hidden;
    background-image: radial-gradient(#ffffff3f 1px, transparent 1px);
    background-size: 30px 30px;
}

.nav {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 100;
}

/* ── Shared ── */
.tela {
    width: 100%;
    box-sizing: border-box;
    padding: 120px 60px;
}

.secao-label {
    display: inline-block;
    /* font-family: 'DM Mono', monospace; */
    font-size: 11px;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--cor-tema, #1a7a9a);
    border: 1px solid var(--cor-tema, #1a7a9a);
    padding: 4px 12px;
    border-radius: 100px;
    margin-bottom: 24px;
}

.secao-titulo {
    font-size: clamp(28px, 4vw, 48px);
    font-weight: 700;
    color: var(--cor-fundo-2);
    line-height: 1.1;
    margin-bottom: 24px;
    max-width: 640px;
}

/* ── Hero ── */
.hero {
    min-height: 100vh;
    display: grid;
    grid-template-columns: 1fr;
    gap: 60px;
    align-items: center;
    padding-top: 10px;
    border-bottom: 1px solid #1e1e1e;
    position: relative;
}

.hero::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background-image: radial-gradient(circle at 20% 50%, rgba(26,122,154,0.08) 0%, transparent 60%);
    pointer-events: none;
}

.hero-tag {
    display: inline-block;
    /* font-family: 'DM Mono', monospace; */
    font-size: 11px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--cor-fundo-2, #1a7a9a);
    border: 1px solid var(--cor-fundo-2);
    padding: 5px 14px;
    border-radius: 100px;
    margin-bottom: 32px;
    width: fit-content;
}

.hero-titulo {
    font-size: clamp(36px, 5vw, 64px);
    font-weight: 800;
    line-height: 1.05;
    color: var(--cor-fundo-2);
    margin-bottom: 24px;
    letter-spacing: -0.02em;
}

.hero-sub {
    font-size: 16px;
    line-height: 1.7;
    color: var(--cor-fundo-2);
    max-width: 480px;
    margin-bottom: 40px;
    font-weight: 400;
}

.hero-botoes {
    display: flex;
    gap: 12px;
    align-items: center;
    flex-wrap: wrap;
}

/* ── Botões ── */
.btn-primario {
    display: inline-flex;
    align-items: center;
    height: 44px;
    padding: 0 28px;
    background-color: var(--cor-fundo-2, #1a7a9a);
    color: var(--cor-tema);
    border-radius: 6px;
    /* font-family: 'Syne', sans-serif; */
    font-size: 14px;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.2s ease;
    border: 1px solid var(--cor-fundo-2, #1a7a9a);
}

.btn-primario:hover {
    background-color: transparent;
    color: var(--cor-fundo-2, #1a7a9a);
    transform: translateY(-2px);
}

.btn-secundario {
    display: inline-flex;
    align-items: center;
    height: 44px;
    padding: 0 28px;
    background-color: transparent;
    color: var(--cor-fundo-2);
    border-radius: 6px;
    /* font-family: 'Syne', sans-serif; */
    font-size: 14px;
    font-weight: 500;
    text-decoration: none;
    transition: all 0.2s ease;
    border: 1px solid var(--cor-fundo-2);
}

.btn-secundario:hover {
    color: var(--cor-fundo-2);
    border-color: #444;
}

.btn-grande {
    height: 52px;
    padding: 0 36px;
    font-size: 16px;
}

/* ── Terminal ── */
.hero-visual {
    display: flex;
    justify-content: center;
    align-items: center;
}

.terminal {
    background-color: #111;
    border: 1px solid #222;
    border-radius: 12px;
    width: 100%;
    max-width: 480px;
    overflow: hidden;
    box-shadow: 0 40px 80px rgba(0,0,0,0.5);
}

.terminal-header {
    background-color: #1a1a1a;
    padding: 12px 16px;
    display: flex;
    align-items: center;
    gap: 8px;
    border-bottom: 1px solid #222;
}

.dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
}

.dot-red   { background-color: #ff5f57; }
.dot-yellow { background-color: #ffbd2e; }
.dot-green { background-color: #28c840; }

.terminal-title {
    /* font-family: 'DM Mono', monospace; */
    font-size: 12px;
    color: #555;
    margin-left: auto;
    margin-right: auto;
    transform: translateX(-24px);
}

.terminal-body {
    padding: 24px;
    /* font-family: 'DM Mono', monospace; */
    font-size: 13px;
    line-height: 2;
}

.terminal-body p { margin: 0; }

.t-prompt { color: var(--cor-tema, #1a7a9a); }
.t-dim    { color: #444; }
.t-success { color: #28c840; }
.t-blink  { color: var(--cor-fundo-2); margin-top: 8px; }

.cursor {
    animation: piscar 1s step-end infinite;
}

@keyframes piscar {
    0%, 100% { opacity: 1; }
    50%       { opacity: 0; }
}

/* ── Sobre ── */
.sobre {
    border-bottom: 1px solid #1e1e1e;
    background-image: radial-gradient(circle at 80% 50%, rgba(26,122,154,0.05) 0%, transparent 60%);
}

.sobre-inner {
    max-width: 800px;
}

.sobre-texto {
    font-size: 17px;
    line-height: 1.8;
    color: var(--cor-fundo-2);
    margin-bottom: 60px;
}

.stats {
    display: flex;
    gap: 60px;
    flex-wrap: wrap;
}

.stat {
    display: flex;
    flex-direction: column;
    gap: 6px;
}

.stat-num {
    font-size: 42px;
    font-weight: 800;
    color: var(--cor-fundo-2, #1a7a9a);
    line-height: 1;
    letter-spacing: -0.02em;
}

.stat-label {
    /* font-family: 'DM Mono', monospace; */
    font-size: 11px;
    color: var(--cor-fundo-2);
    text-transform: uppercase;
    letter-spacing: 0.1em;
}

/* ── Serviços ── */
.servicos {
    border-bottom: 1px solid var(--cor-fundo-2);
}

.servicos-inner {
    width: 100%;
}

.servicos-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 1px;
    border-radius: 12px;
    overflow: hidden;
    margin-top: 48px;
}

.servico-card {
    background-color: var(--cor-fundo-2);
    padding: 40px 32px;
    transition: transform 0.4s ease;
    cursor: pointer;
}

.servico-card:hover {
    transform: translateY(-2px);
}

.servico-icon {
    color: var(--cor-tema, #1a7a9a);
    margin-bottom: 20px;
}

.servico-nome {
    font-size: 20px;
    font-weight: 700;
    color: var(--cor-tema);
    margin-bottom: 12px;
}

.servico-desc {
    font-size: 14px;
    line-height: 1.7;
    color: var(--cor-tema);
}

/* ── CTA ── */
.cta-section {
    text-align: center;
    background-image: radial-gradient(circle at 50% 50%, rgba(26,122,154,0.08) 0%, transparent 70%);
    border-bottom: 1px solid #1e1e1e;
}

.cta-inner {
    max-width: 560px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
}

.cta-titulo {
    font-size: clamp(28px, 4vw, 44px);
    font-weight: 800;
    line-height: 1.1;
    letter-spacing: -0.02em;
}

.cta-sub {
    font-size: 15px;
    color: #666;
    margin-bottom: 8px;
}

/* ── Footer ── */
.footer {
    background-color: var(--cor-fundo-2);
    border-top: 1px solid #1a1a1a;
    padding: 100px 60px 0 ;
}

.footer-inner {
    display: flex;
    justify-content: space-between;
    gap: 60px;
    flex-wrap: wrap;
    padding-bottom: 60px;
    border-bottom: 1px solid #1a1a1a;
}

.footer-brand {
    max-width: 200px;
}

.footer-logo {
    font-size: 22px;
    font-weight: 800;
    color: #1a1a1a;
    letter-spacing: -0.02em;
}

.footer-tagline {
    font-size: 13px;
    color: #444;
    margin-top: 8px;
    /* font-family: 'DM Mono', monospace; */
}

.footer-links {
    display: flex;
    gap: 80px;
    flex-wrap: wrap;
}

.footer-col {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.footer-col-titulo {
    font-size: 12px;
    font-weight: 600;
    color: #1a1a1a;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    /* font-family: 'DM Mono', monospace; */
    margin-bottom: 4px;
}

.footer-link {
    font-size: 13px;
    color: #555;
    text-decoration: none;
}

.footer-link-a {
    transition: color 0.2s ease;
}

.footer-link-a:hover {
    color: var(--cor-tema, #1a7a9a);
}

.footer-bottom {
    padding: 20px 0;
    font-size: 12px;
    color: #333;
    /* font-family: 'DM Mono', monospace; */
}

/* ── Responsivo ── */
@media (max-width: 1024px) {
    .tela { padding: 80px 40px; }

    .hero {
        grid-template-columns: 1fr;
        min-height: auto;
        padding-top: 120px;
        gap: 40px;
    }

    .hero-visual { order: -1; }

    .terminal { max-width: 100%; }

    .footer { padding: 60px 40px 0; }

    .footer-links { gap: 40px; }

    .servicos-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 600px) {
    .tela { padding: 70px 24px; }

    .hero { padding-top: 100px; }

    .hero-sub { font-size: 15px; }

    .stats { gap: 32px; }

    .stat-num { font-size: 32px; }

    .servicos-grid { grid-template-columns: 1fr; }

    .footer { padding: 50px 24px 0; }

    .footer-inner { flex-direction: column; gap: 40px; }

    .footer-links { flex-direction: column; gap: 32px; }
}
</style>