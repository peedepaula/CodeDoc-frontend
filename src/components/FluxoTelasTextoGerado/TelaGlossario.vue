<template>
    <section class="corpo-glossario">
        <h3 class="titulo">Glossário</h3>
        <div class="fundo-textarea">
            <textarea class="texto-resposta"
            v-model="glossarioReal"
            @input="autoResize"
            ref="textarea"
            ></textarea>
        </div>

        <Copiar
        :textoParaCopiar="glossarioReal"
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
            glossarioReal: ``
        }
    },

    props:{
        glossario: String
    },

    watch:{
        glossario:{
            immediate: true,
            handler(glossario){
                if (glossario){
                    const lista = JSON.parse(glossario)

                    this.glossarioReal = lista
                    .map(item => `${item.termo}: ${item.definicao}`)
                    .join("\n\n")
                }
            }
        },

        glossarioReal(novoValor){
            this.$nextTick(() => {
                this.autoResize()
            })
            this.$emit('update-dados', {glossario_projeto: novoValor})
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
            return marked(this.glossarioReal)
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

@media (max-width: 600px) {
    .texto-resposta{
        padding: 10px 15px 60px 15px;
        font-size: 12px;
    }
}

</style>