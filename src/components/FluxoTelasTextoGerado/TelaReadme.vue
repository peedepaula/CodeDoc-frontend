<template>
    <section class="corpo-readme">
        <h3 class="titulo">Readme</h3>
        <p class="texto-resposta" v-html="readmeFormatado"></p>

        <Copiar
        :textoParaCopiar="readme"
        />
    </section>
</template>
<script>
import { marked } from "marked"
import Copiar from "../Copiar.vue";

export default{
    name: 'TelaReadme',
    components:{
        Copiar
    },
    data(){
        return{
            readme: `
            # Sistema de Cadastro

            Este projeto é um sistema desenvolvido em Python utilizando FastAPI.

            ## Funcionalidades

            - Cadastro de usuários
            - Login com autenticação JWT
            - Listagem de registros

            ## Estrutura do Projeto

            - main.py: Arquivo principal da aplicação
            - auth_service.py: Lógica de autenticação
            - models.py: Modelos de dados

            ## Como executar

            1. Instale as dependências
            2. Execute o servidor
            3. Acesse localhost:8000
            `
        }
    },

    computed:{
        readmeFormatado(){
            return marked(this.readme)
        }
    }
}
</script>

<style scoped>
.corpo-readme{
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