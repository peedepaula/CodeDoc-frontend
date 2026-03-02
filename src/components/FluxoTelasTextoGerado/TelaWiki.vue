<template>
    <section class="corpo-wiki">
        <h3 class="titulo">Wiki</h3>
        <p class="texto-resposta" v-html="wikiFormatado"></p>

        <Copiar
        :textoParaCopiar="wiki"
        />
    </section>
</template>
<script>
import { marked } from "marked"
import Copiar from "../Copiar.vue";

export default{
    name: 'TelaWiki',
    components:{
        Copiar
    },
    data(){
        return{
            wiki: `
            # 📚 Wiki Técnica – Sistema de Cadastro

            ## 📌 Visão Geral

            O Sistema de Cadastro é uma API desenvolvida em Python utilizando FastAPI.  
            Seu objetivo é gerenciar usuários e autenticação através de tokens JWT.

            A aplicação segue uma arquitetura simples baseada em separação de responsabilidades.

            ---

            ## 🏗 Arquitetura do Projeto

            O sistema está dividido nas seguintes camadas:

            - **Rotas** – Definem os endpoints da API.
            - **Serviços** – Contêm as regras de negócio.
            - **Modelos** – Representam a estrutura dos dados.
            - **Banco de Dados** – Gerencia persistência das informações.

            ---

            ## 📂 Estrutura de Arquivos


            .
            ├── main.py
            ├── auth_service.py
            ├── models.py
            └── database.py


            ---

            ## 📄 main.py

            ### Responsabilidade
            Arquivo principal da aplicação.

            ### Funções
            - Inicializa a aplicação FastAPI.
            - Registra as rotas disponíveis.
            - Define dependências globais.

            ---

            ## 🔐 auth_service.py

            ### Responsabilidade
            Gerencia autenticação e geração de tokens.

            ### Principais Funções

            - login_usuario(email, senha)
            - gerar_token(usuario)

            ### Fluxo
            1. Valida credenciais
            2. Gera token JWT
            3. Retorna token ao cliente

            ---

            ## 🧱 models.py

            ### Responsabilidade
            Define os modelos de dados do sistema.

            ### Modelo Usuario

            - id: inteiro
            - nome: string
            - email: string
            - senha_hash: string

            ---

            ## 🗄 database.py

            ### Responsabilidade
            Configuração de conexão com o banco de dados.

            ### Componentes

            - Engine SQLAlchemy
            - Sessão de banco
            - Base declarativa

            ---

            ## 🔄 Fluxo Geral do Sistema

            1. Cliente envia requisição
            2. API processa na camada de rota
            3. Serviço executa regra de negócio
            4. Banco de dados é acessado se necessário
            5. Resposta é retornada ao cliente

            ---

            ## 🛡 Segurança

            - Senhas armazenadas com hash
            - Autenticação via JWT
            - Validação de dados de entrada
            `
        }
    },

    computed:{
        wikiFormatado(){
            return marked(this.wiki)
        }
    }
}
</script>

<style scoped>
.corpo-wiki{
    width: 100%;
    height: auto;
    border-radius: 20px;
    background-color: var(--cor-fundo-2);
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    padding: 15px;
    border: solid 1px var(--cor-borda);
    padding-bottom: 60px;
    animation: surgir 0.3s ease;
}

.titulo{
    font-size: 14px;
    font-weight: 400;
    color: var(--cor-tema);
    position: absolute;
    top: 15px;
}

.texto-resposta{
    font-size: 15px;
    font-weight: 500;
    color: var(--cor-fundo-2);
    width: 100%;
    text-align: start;
    margin-top: 40px;
}

.texto-resposta :deep(pre){
    background-color: black;
    border-radius: 10px;
    padding: 40px 0 40px 0;
    background-image: radial-gradient(#ffffff3f 1px, transparent 1px);
    background-size: 30px 30px;
}

@keyframes surgir {
    0%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
}

</style>