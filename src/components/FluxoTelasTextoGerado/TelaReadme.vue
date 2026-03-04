<template>
    <section class="corpo-readme">
        <h3 class="titulo">Readme</h3>
        <div class="fundo-textarea">
            <textarea class="texto-resposta"
            v-model="readme"
            @input="autoResize"
            ref="textarea"
            >
            </textarea>
        </div>
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
            readme:
`# Sistema de Cadastro

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
3. Acesse localhost:8000`
        }
    },

    methods:{
        autoResize() {
            const el = this.$refs.textarea
            el.style.height = "auto"          // reseta altura
            el.style.height = el.scrollHeight + "px" // ajusta para conteúdo
        }   
    },

    computed:{
        readmeFormatado(){
            return marked(this.readme)
        }
    },

    mounted(){
        this.$nextTick(() => {this.autoResize()})   
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

.fundo-textarea{
    background-color: black;
    background-image: radial-gradient(#ffffff3f 1px, transparent 1px);
    background-size: 30px 30px;
    margin-top: 40px;
    padding: 40px 0 40px 0;
    width: 100%;
    height: auto;
    border-radius: 10px;
}

.texto-resposta{
    font-size: 15px;
    font-weight: 500;
    color: var(--cor-fundo-2);
    width: 100%;
    height: auto;
    background: none;
    border: none;
    box-sizing: border-box;
    padding: 20px 40px 60px 40px;
    resize: none;
    overflow: hidden;
}

textarea:focus {
    border: none;
    outline: none;
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