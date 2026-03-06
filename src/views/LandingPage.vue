<template>
    <main class="corpo">
        <section class="conteudo">
            <nav class="nav">
                <NavLandingPage/>
            </nav>

            <section class="tela">
                <div class="conteudo-tela-1">
                    <h1 class="texto-principal">CodeDoc documentação automática com Inteligência Artificial para seus projetos em segundos e totalmente grátis.</h1>
                    <p class="descricao">O CodeDoc analisa seu código ou repositório GitHub e gera automaticamente README,
                    Wiki técnica, diagramas de fluxo e glossário estruturado.
                    Reduza a dívida técnica e mantenha seus projetos organizados sem esforço manual.
                </p>
                    <div class="botoes-tela-1">
                        <button class="saiba-mais">Saiba mais</button>
                        <button class="comecar-agora">Começar agora</button>
                    </div>
                </div>
            </section>

            <section class="tela">
                <div class="conteudo-tela-2">
                    <h2 class="titulo-tela">Sobre nós</h2>
                </div>
            </section>
        </section>
        <footer class="footer">
            <div class="direitos">
                <p class="p-direitos">© 2026 CodeDoc. Todos os direitos reservados.</p>
            </div>
        </footer>
    </main>
</template>

<script>
import NavLandingPage from '@/components/NavLandingPage.vue';

export default {
    name: 'LandingPage',
    components:{
        NavLandingPage
    }
}
</script>

<style scoped>
.corpo{
    height: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: var(--cor-tema);
    padding-top: 70px;
    background-image: radial-gradient(#ffffff3f 1px, transparent 1px);
    background-size: 30px 30px;
}

.nav{
    width: 100%;
    position: absolute;
    top: 0;
}

.conteudo{
    max-width: 1600px;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
}

.tela{
    height: 100vh;
    width: 100%;
    box-sizing: border-box;
    padding: 40px;
    flex: none;
}

/* Tela 1 */

.conteudo-tela-1{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
    box-sizing: border-box;
    padding-top: 30px;
}

.texto-principal{
    font-size: 50px;
    max-width: 80%;
    font-weight: 700;
    color: var(--cor-fundo-2);
}

.descricao{
    font-size: 14px;
    color: var(--cor-fundo-2);
    max-width: 50%;
    font-weight: 300;
    opacity: 0.6;
}

.botoes-tela-1{
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    margin-top: 20px;
}

.saiba-mais{
    padding: 0 32px 0 32px;
    height: 35px;
    border-radius: 100px;
    border: solid 1px var(--cor-fundo-2);
    color: var(--cor-fundo-2);
    background-color: var(--cor-tema);
    cursor: pointer;
    transition: all ease 0.3s;
    width: fit-content;
    font-size: 13px;
}

.saiba-mais:hover{
    transform: translateY(-3px);
    background-color: var(--cor-fundo-2);
    color: var(--cor-tema);
}

.comecar-agora{
    padding: 0 32px 0 32px;
    height: 35px;
    border-radius: 100px;
    border: solid 1px var(--cor-fundo-2);
    color: var(--cor-tema);
    background-color: var(--cor-fundo-2);
    cursor: pointer;
    transition: all ease 0.3s;
    width: fit-content;
    font-size: 13px;
}

.comecar-agora:hover{
    transform: translateY(-3px);
    background-color: var(--cor-tema);
    color: var(--cor-fundo-2);
}

/* Tela dois */

.conteudo-tela-2{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
    box-sizing: border-box;
    padding-top: 30px;
    position: relative;
}

.titulo-tela{
    font-size: 30px;
    font-weight: 600;
    color: var(--cor-fundo-2);
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
}

.footer{
    width: 100%;
    height: 500px;
    background-color: var(--cor-fundo-2);
    display: flex;
    flex-direction: column;
    padding-bottom: 70px;
}

.direitos{
    height: 70px;
    width: 100%;
    border-top: solid 1px var(--cor-tema);
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}

.p-direitos{
    font-size: 13px;
    font-weight: 300;
    color: var(--cor-tema);
}
</style>