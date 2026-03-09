<template>
    <section class="corpo-politica">
        <h3 class="titulo">Política de uso</h3>

        <div class="politicas">
            <div class="politica">
                <h4 class="titulo-politica">1. Uso da plataforma</h4>
                <p class="descricao-politica">
                    A plataforma deve ser utilizada exclusivamente para análise de repositórios de código,
                    geração de documentação técnica, criação de diagramas de fluxo e construção de glossários
                    de funções. O usuário concorda em utilizar os serviços de forma responsável e de acordo
                    com as leis aplicáveis.
                </p>
            </div>

            <div class="politica">
                <h4 class="titulo-politica">2. Responsabilidade sobre os repositórios</h4>
                <p class="descricao-politica">
                    O usuário é responsável por garantir que possui permissão para conectar e analisar
                    os repositórios utilizados na plataforma. A utilização de repositórios sem autorização
                    adequada é de inteira responsabilidade do usuário.
                </p>
            </div>

            <div class="politica">
                <h4 class="titulo-politica">3. Uso adequado da Inteligência Artificial</h4>
                <p class="descricao-politica">
                    Os recursos de inteligência artificial são destinados à geração de documentação,
                    diagramas e explicações sobre o código. O usuário não deve utilizar a plataforma
                    para gerar conteúdo ilegal, ofensivo ou que viole direitos de terceiros.
                </p>
            </div>

            <div class="politica">
                <h4 class="titulo-politica">4. Limitações do serviço</h4>
                <p class="descricao-politica">
                    A plataforma busca fornecer análises e documentações precisas, porém os resultados
                    gerados automaticamente podem conter imprecisões. O usuário é responsável por revisar
                    e validar as informações antes de utilizá-las em ambientes de produção.
                </p>
            </div>

            <div class="politica">
                <h4 class="titulo-politica">5. Uso indevido</h4>
                <p class="descricao-politica">
                    Não é permitido utilizar a plataforma para atividades que possam comprometer sua
                    segurança, funcionamento ou disponibilidade, incluindo tentativas de exploração
                    de vulnerabilidades, acesso não autorizado ou uso abusivo da infraestrutura.
                </p>
            </div>

            <div class="politica">
                <h4 class="titulo-politica">6. Suspensão de acesso</h4>
                <p class="descricao-politica">
                    A plataforma se reserva o direito de suspender ou limitar o acesso de usuários
                    que violem estas políticas ou utilizem o serviço de forma prejudicial à plataforma
                    ou a outros usuários.
                </p>
            </div>
        </div>
    </section>

</template>
<script>
export default{
    name: 'PoliticaDeUsoComp'
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