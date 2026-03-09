<template>
    <section class="corpo-politica">
        <h3 class="titulo">Política de privacidade</h3>

        <div class="politicas">
            <div class="politica">
                <h4 class="titulo-politica">1. Coleta de informações</h4>
                <p class="descricao-politica">
                    Nossa plataforma pode acessar informações de repositórios Git conectados pelo usuário,
                    incluindo estrutura de arquivos, nomes de funções, comentários e documentação existente.
                    Esses dados são utilizados exclusivamente para análise e geração automática de documentação.
                </p>
            </div>

            <div class="politica">
                <h4 class="titulo-politica">2. Uso das informações</h4>
                <p class="descricao-politica">
                    As informações coletadas são utilizadas para gerar automaticamente documentos como README,
                    páginas de Wiki, diagramas de fluxo e glossários de funções. Esses recursos ajudam
                    desenvolvedores a compreender melhor a estrutura e o funcionamento do código.
                </p>
            </div>

            <div class="politica">
                <h4 class="titulo-politica">3. Processamento por Inteligência Artificial</h4>
                <p class="descricao-politica">
                    Parte da análise do código é realizada por sistemas de inteligência artificial.
                    Esses sistemas analisam trechos do código para gerar explicações, documentação
                    e diagramas que auxiliam na compreensão do projeto.
                </p>
            </div>

            <div class="politica">
                <h4 class="titulo-politica">4. Armazenamento de dados</h4>
                <p class="descricao-politica">
                    Apenas as informações necessárias para o funcionamento da plataforma podem ser
                    armazenadas temporariamente, como dados de sessão, tokens de autenticação e
                    configurações do usuário. O conteúdo do repositório não é armazenado permanentemente
                    sem autorização do usuário.
                </p>
            </div>

            <div class="politica">
                <h4 class="titulo-politica">5. Segurança</h4>
                <p class="descricao-politica">
                    Adotamos medidas de segurança para proteger as informações dos usuários,
                    incluindo criptografia de comunicação e controle de acesso aos dados.
                </p>
            </div>

            <div class="politica">
                <h4 class="titulo-politica">6. Direitos do usuário</h4>
                <p class="descricao-politica">
                    O usuário pode, a qualquer momento, revogar o acesso aos seus repositórios,
                    remover integrações ou solicitar a exclusão de seus dados da plataforma.
                </p>
            </div>
        </div>
    </section>

</template>
<script>
export default{
    name: 'PoliticaDePrivacidadeComp'
}
</script>
<style scoped>
.corpo-politica{
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 900px;
    height: auto;
    background-color: var(--cor-fundo-2);
    border-radius: 30px;
    margin-top: 100px;
    animation: surgir 0.3s ease;
}

.titulo{
    font-size: 14px;
    font-weight: 400;
    color: var(--cor-tema);
    position: absolute;
    top: 15px;
}

.politicas{
    display: flex;
    flex-direction: column;
    gap: 40px; 
    margin-top: 100px;
    padding: 0 40px 60px 40px;
    box-sizing: border-box;
}

.politica{
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.titulo-politica{
    font-size: 14px;
    font-weight: 500;
    color: var(--cor-tema);
}

.descricao-politica{
    font-size: 13px;
    font-weight: 400;
    color: var(--cor-tema);
}

@keyframes surgir {
    0%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
}

@media (max-width: 600px) {
    .corpo-politica{
        width: 100%;
        margin-bottom: 50px;
    }
}

</style>