<template>
    <section class="corpo-glossario">
        <h3 class="titulo">Glossário</h3>
        <div class="fundo-textarea">
            <textarea class="texto-resposta"
            v-model="glossario"
            @input="autoResize"
            ref="textarea"
            ></textarea>
        </div>

        <Copiar
        :textoParaCopiar="glossario"
        />
    </section>
</template>
<script>
import { marked } from "marked"
import Copiar from '../Copiar.vue';

export default{
    name: 'TelaGlossario',
    components:{
        Copiar
    },
    data(){
        return{
            glossario:
`# 📖 Glossário

## API (Application Programming Interface)
Interface que permite a comunicação entre diferentes sistemas ou aplicações.

## FastAPI
Framework moderno em Python utilizado para construção de APIs rápidas e eficientes.

## JWT (JSON Web Token)
Token de autenticação utilizado para validar a identidade de um usuário em requisições.

## Endpoint
URL específica da API responsável por executar uma determinada ação.

## Rota
Definição de um caminho da API que responde a uma requisição HTTP.

## Método HTTP
Tipo de operação realizada em uma requisição.  
Exemplos: GET, POST, PUT, DELETE.

## Banco de Dados
Sistema responsável por armazenar e organizar informações de forma persistente.

## Modelo de Dados
Estrutura que representa uma entidade do sistema, como um usuário.

## Serviço
Camada responsável por conter regras de negócio da aplicação.

## Autenticação
Processo de verificação da identidade de um usuário.

## Autorização
Processo que define quais ações um usuário autenticado pode executar.

## Hash
Transformação criptográfica utilizada para proteger senhas.`
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
        glossarioFormatado(){
            return marked(this.glossario)
        }
    },

    mounted(){
        this.$nextTick(() => {this.autoResize()})   
    }
}
</script>

<style scoped>
.corpo-glossario{
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