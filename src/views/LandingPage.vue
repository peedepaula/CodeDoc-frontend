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
                        <a class="saiba-mais" href="#tela-1">Saiba mais</a>
                        <router-link to="/registrar" class="comecar-agora">Começar agora</router-link>
                    </div>
                </div>
            </section>

            <section class="tela" id="tela-1">
                <div class="conteudo-tela-2-fundo">
                    <h2 class="titulo-tela">Sobre nós</h2>
                    <div class="conteudo-tela-2">
                        <h3 class="texto-tela-2">O CodeDoc é uma ferramenta que utiliza Inteligência Artificial para gerar automaticamente documentação técnica a partir do código ou de repositórios do GitHub. Em poucos segundos, a plataforma cria README, wiki técnica, diagramas de fluxo e glossários estruturados, ajudando desenvolvedores a manter seus projetos organizados e reduzir a dívida técnica sem precisar escrever documentação manualmente.</h3>
                        <img src="@/assets/diagramas.jpg" class="img-tela-2">
                    </div>
                </div>
            </section>

            <section class="tela">
                <div class="conteudo-tela-3-fundo">
                    <h2 class="titulo-tela">Serviços</h2>
                    <div class="conteudo-tela-3">
                        <div class="servico-esquerda">
                            <img src="@/assets/readme.png"  class="img-servico">
                            <div class="textos-servico">
                                <p class="nome-servico">Readme</p>
                                <p class="detalhe-servico">O CodeDoc é uma ferramenta que gera automaticamente documentação técnica a partir do código-fonte ou de repositórios do GitHub utilizando Inteligência Artificial. Em poucos segundos, a plataforma analisa a estrutura do projeto e cria arquivos como README, wiki técnica, diagramas de fluxo e glossários organizados. O objetivo é facilitar o entendimento do código, melhorar a organização dos projetos e reduzir o tempo gasto escrevendo documentação manualmente.</p>
                            </div>
                        </div>

                        <div class="servico-direita">
                            <div class="textos-servico">
                                <p class="nome-servico">Wiki</p>
                                <p class="detalhe-servico">A Wiki do CodeDoc reúne informações técnicas importantes do projeto geradas automaticamente a partir da análise do código. Ela organiza conceitos, módulos, funções e estruturas do sistema de forma clara, permitindo que desenvolvedores entendam rapidamente como o projeto funciona, quais são seus principais componentes e como eles se relacionam.</p>
                            </div>
                            <img src="@/assets/wiki.png"  class="img-servico">
                        </div>

                        <div class="servico-esquerda">
                            <img src="@/assets/diagramas.jpg"  class="img-servico">
                            <div class="textos-servico">
                                <p class="nome-servico">Diagramas</p>
                                <p class="detalhe-servico">O CodeDoc também gera automaticamente diagramas que representam o fluxo e a estrutura do projeto. Esses diagramas ajudam a visualizar como os diferentes componentes do sistema se conectam, facilitando o entendimento da arquitetura, da lógica de funcionamento e das interações entre módulos do código.</p>
                            </div>
                        </div>

                        <div class="servico-direita">
                            <div class="textos-servico">
                                <p class="nome-servico">Glossário</p>
                                <p class="detalhe-servico">O Glossário reúne os principais termos, conceitos e componentes identificados no projeto durante a análise do código. Ele ajuda a padronizar a linguagem utilizada na documentação e facilita o entendimento técnico do sistema, principalmente para novos desenvolvedores ou colaboradores que estão conhecendo o projeto.</p>
                            </div>
                            <img src="@/assets/glossario.png"  class="img-servico">
                        </div>
                    </div>
                </div>
            </section>
        </section>
        <footer class="footer">
            <div class="textos-footer">
                <div class="area-texto">
                    <p class="titulo-area-texto">Contato</p>
                    <div class="informacoes-footer">
                        <p class="informacao-footer">E-mail: codedoc.suporte@gmail.com</p>
                        <p class="informacao-footer">Telefone: +55 (11) 97777-0000</p>
                    </div>
                </div>

                <div class="area-texto">
                    <p class="titulo-area-texto">Localização</p>
                    <div class="informacoes-footer">
                        <p class="informacao-footer">Brasil, São Paulo - Sp</p>
                    </div>
                </div>

                <div class="area-texto">
                    <p class="titulo-area-texto">Políticas</p>
                    <div class="informacoes-footer">
                        <router-link to="/politica-de-uso" class="informacao-footer">Política de uso</router-link>
                        <router-link to="/politica-de-privacidade" class="informacao-footer">Política de de privacidade</router-link>
                    </div>
                </div>
            </div>
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
    height: auto;
    min-height: 100vh;
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
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
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
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
}

.comecar-agora:hover{
    transform: translateY(-3px);
    background-color: var(--cor-tema);
    color: var(--cor-fundo-2);
}

/* Tela 2 */

.conteudo-tela-2-fundo{
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

.conteudo-tela-2{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    margin-top: 100px;
}

.texto-tela-2{
    font-size: 30px;
    font-weight: 700;
    color: var(--cor-fundo-2);
    width: 50%;
    line-height: 45px;
}

.img-tela-2{
    background-color: var(--cor-fundo-2);
    height: 100vh;
    width: 40%;
    border-radius: 30px;
    object-fit: cover;
}
/* Tela 2 */

/* Tela 3 */

.conteudo-tela-3-fundo{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
    box-sizing: border-box;
    padding-top: 30px;
    position: relative;
}


.conteudo-tela-3{
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 30px;
    width: 100%;
    height: 100%;
    margin-top: 100px;
}

.servico-esquerda{
    display: flex;
    flex-direction: row;
    /* align-items: center; */
    gap: 15px;
    cursor: pointer;
    transition: all ease 0.3s;
    align-self: flex-start;
}

.servico-direita{
    display: flex;
    flex-direction: row;
    /* align-items: center; */
    gap: 15px;
    cursor: pointer;
    align-self: flex-end;
}

.img-servico{
    width: 300px;
    height: 300px;
    background-color: var(--cor-fundo-2);
    border-radius: 20px;
    object-fit: cover;
    object-position: left top;
}

.textos-servico{
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 300px;
}

.nome-servico{
    font-size: 20px;
    font-weight: 600;
    color: var(--cor-fundo-2);
}

.detalhe-servico{
    font-size: 14px;
    font-weight: 300;
    color: var(--cor-fundo-2);  
}

/* Tela 3 */


/* Footer */

.footer{
    width: 100%;
    height: 350px;
    background-color: var(--cor-fundo-2);
    display: flex;
    flex-direction: column;
    padding-bottom: 70px;
    background-image: radial-gradient(#0c465f4e 1px, transparent 1px);
    background-size: 30px 30px;
    border-radius: 20px 20px 0 0;
}

.textos-footer{
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    gap: 25%;
    padding: 80px 35px 20px 35px;
    box-sizing: border-box;
}

.area-texto{
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.titulo-area-texto{
    font-size: 16px;
    color: var(--cor-tema);
    font-weight: 500;
}

.informacoes-footer{
    display: flex;
    flex-direction: column;
    gap: 5px; 
}

.informacao-footer{
    font-size: 13px;
    color: var(--cor-tema);
    font-weight: 300;
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

/* Footer */


@media (max-width: 600px) {
    .conteudo{
        max-width: 600px;
        gap: 40px;
    }

    .tela{
        padding: 20px;
        height: auto;
        min-height: auto;
    }

    /* Tela 1 */

    .texto-principal{
        font-size: 30px;
        max-width: 100%;
    }
    .descricao{
        max-width: 100%;
    }
    /* Tela 1 */

    /* Tela 2 */

    .conteudo-tela-2{
        flex-direction: column-reverse;
        gap: 50px;
    }

    .titulo-tela{
        font-size: 20px;
    }

    .texto-tela-2{
        font-size: 20px;
        line-height: 30px;
        width: 100%;
    }

    .img-tela-2{
        width: 100%;
        height: 400px;
    }

    /* Tela 3 */

    .conteudo-tela-3{
        gap: 100px;
        padding-bottom: 60px;
    }

    .servico-esquerda{
        flex-direction: column;
        align-self: center;
        width: 100%;
    }

    .servico-direita{
        flex-direction: column-reverse;
        align-self: center;
        width: 100%;
    }

    .img-servico{
        max-width: 100%;
        width: 100%; 
        aspect-ratio: 1 / 1;
    }

    .textos-servico{
        width: 100%;
        align-items: center;
    }

    .detalhe-servico{
        text-align: center;
    }

    /* Tela 3 */

    /* Footer */

    .footer{
        height: 450px;
    }

    .textos-footer{
        flex-direction: column;
        gap: 40px;
    }

    /* Footer */

}
</style>