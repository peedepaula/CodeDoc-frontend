<template>
    <section class="corpo-projeto">
        <h3 class="titulo">Projeto</h3>
        <div class="conteudo">
            <!-- <h1 class="nome-projeto">Documentação programa</h1> -->
             <div class="nome-bola">
                <div class="bola"></div>
                <textarea 
                class="nome-projeto"
                v-model="nomeProjeto"
                @input="autoResize($event.target)"
                rows="1"
                ></textarea>
             </div>

            <textarea
            class="descricao-projeto"
            v-model="descricaoProjeto"
            @input="autoResize($event.target)"
            ></textarea>

            <div class="bototes-extras">
                <div class="p-input">
                    <p class="input-p">Link do seu repositório</p>
                    <input type="text" class="url-github" v-model="linkProjeto">
                </div>
                <div class="p-input" v-if="titulo !== 'Processando...'">
                    <p class="input-p">Atualizar a documentação</p>
                    <button class="atulizar-documentacao" @click="$emit('atualizar')">Atualizar</button>
                </div>
            </div>
        </div>
        <p class="data">{{ formatarData(dataCriacao) }}</p>
        <div class="botoes">
            <button class="botao-apagar" @click="$emit('mostrar-apagar-projeto', id)" v-if="titulo !== 'Processando...'"><img src="@/assets/lixeira.png" class="icon-lixeira"></button>
            <button class="botao-salvar" v-if="titulo !== 'Processando...'" @click="$emit('salvar')">Salvar</button>
        </div>
    </section>

</template>
<script>
export default{
    name: 'TelaProjeto',
    data(){
        return{
            nomeProjeto: '',
            descricaoProjeto: ``,
            dataCriacao: '',
            id: null,
            linkProjeto: ''
        }
    },

    props:{
        github_url: String,
        titulo: String,
        descricao: String,
        data: String,
        id: String
    },

    watch:{
        titulo:{
            immediate: true,
            handler(titulo){
                if (titulo){
                    this.nomeProjeto = titulo
                }
            }
        },
        github_url:{
            immediate: true,
            handler(link){
                if (link){
                    this.linkProjeto = link
                }
            }
        },
        descricao:{
            immediate: true,
            handler(descricao){
                if (descricao){
                    this.descricaoProjeto = descricao
                }
            }
        },
        data:{
            immediate: true,
            handler(data){
                if (data){
                    this.dataCriacao = data
                }
            }
        },
        id:{
            immediate: true,
            handler(id){
                if (id){
                    this.id = id
                }
            } 
        },

        nomeDoProjeto(novoValor) {
            this.$emit('update-dados', { titulo_projeto: novoValor });
        },
        descricaoDoProjeto(novoValor) {
            this.$emit('update-dados', { descricao_projeto: novoValor });
        },
        linkProjeto(novoValor) {
            this.$emit('update-dados', { github_url: novoValor });
        }
    },


    methods:{
        autoResize(el) {
            if (!el) return

            el.style.height = "0px"
            el.style.height = el.scrollHeight + "px"
        },

        formatarData(dataIso) {
            if (!dataIso) return '';
            const data = new Date(dataIso);
            return new Intl.DateTimeFormat('pt-BR', {
                dateStyle: 'short',
                timeStyle: 'short',
            }).format(data);
        },
    },

    mounted(){
        this.$nextTick(() => {
            const textareas = this.$el.querySelectorAll("textarea")
            textareas.forEach(el => this.autoResize(el))
        })
    }
}
</script>
<style scoped>
.corpo-projeto{
    width: 100%;
    height: auto;
    border-radius: 20px;
    background-color: var(--cor-fundo-2);
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    padding: 15px 30px 15px 30px;
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

.conteudo{
    margin-top: 50px;
    width: 100%;
    height: auto;
    padding-bottom: 100px;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.nome-bola{
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    width: 100%;
}

.bola{
    width: 10px;
    height: 10px;
    background-color: var(--cor-tema);
    border-radius: 100px;
}

.nome-projeto{
    font-size: 40px;
    font-weight: 700;
    color: var(--cor-tema);
    width: 100%;
    border: none;
    resize: none;
    overflow: hidden;
    background: none;
}

.descricao-projeto{
    font-size: 14px;
    font-weight: 500;
    color: var(--cor-tema);
    max-width: 70%;
    border: none;
    resize: none;
    overflow: hidden;
    background: none;
}

.bototes-extras{
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 20px;
}

.url-github{
    background: none;
    border: solid 1px var(--cor-sub-texto);
    border-radius: 10px;
    height: 35px;
    width: 300px;
    padding-left: 10px;
    box-sizing: border-box;
}

.p-input{
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.input-p{
    font-size: 10px;
    font-weight: 400;
    color: var(--cor-tema);
    opacity: 0.6;
}

.atulizar-documentacao{
    width: fit-content;
    height: 35px;
    padding: 0 32px;
    border: none;
    border-radius: 100px;
    font-size: 13px;
    background-color: var(--cor-tema);
    color: var(--cor-fundo-2);
    cursor: pointer;
    transition: all ease 0.3s;
}

.atulizar-documentacao:hover{
    transform: translateY(-2px);
}

textarea:focus {
    border: none;
    outline: none;
}

.data{
    font-size: 12px;
    font-weight: 400;
    color: var(--cor-tema);
    position: absolute;
    left: 30px;
    bottom: 20px;
}

.botoes{
    position: absolute;
    right: 30px;
    bottom: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
}

.botao-apagar{
    height: 35px;
    width: 35px;
    border: solid 1px var(--cor-erro);
    color: var(--cor-erro);
    background-color: var(--cor-fundo-2);
    border-radius: 100px;
    cursor: pointer;
    transition: all ease 0.3s;
    font-size: 13px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.botao-apagar:hover{
    transform: translateY(-2px);
    background-color: var(--cor-erro);
    color: var(--cor-fundo-2);
}

.icon-lixeira{
    width: 15px;
    height: auto;
}

.botao-apagar:hover .icon-lixeira{
    filter: brightness(0) invert(1);
}

.botao-salvar{
    height: 35px;
    border: solid 1px var(--cor-tema);
    background-color: var(--cor-tema);
    color: var(--cor-fundo-2);
    padding: 0 32px 0 32px;
    border-radius: 100px;
    cursor: pointer;
    transition: all ease 0.3s;
    font-size: 13px;
}

.botao-salvar:hover{
    transform: translateY(-2px);
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
    .corpo-projeto{
        padding: 10px 20px 10px 20px;
    }

    .url-github{
        width: 100%;
    }

    .bola{
        width: 5px;
        height: 5px;
    }

    .nome-projeto{
        font-size: 25px;
    }

    .descricao-projeto{
        font-size: 13px;
        max-width: 100%;
    }

    .data{
        left: 20px;
    }

    .botoes{
        right: 20px;
    }
}

</style>