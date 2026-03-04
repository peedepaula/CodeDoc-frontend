<template>
    <section class="corpo-projeto">
        <h3 class="titulo">Documentação</h3>
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

        </div>
        <p class="data">Criado em: 20/03/2026</p>
        <div class="botoes">
            <button class="botao-apagar" @click="$emit('mostrar-apagar-projeto')">Apagar</button>
            <button class="botao-salvar">Salvar</button>
        </div>
    </section>

</template>
<script>
export default{
    name: 'TelaProjeto',
    data(){
        return{
            nomeProjeto: 'Documentação programa',
            descricaoProjeto:
`Quem se interessa por aprender a falar Português já pode contar com um ensino eficiente. Com os nossos métodos conseguimos ensinar, sobretudo alunos iniciantes, por meio de textos práticos, que favorecem a boa leitura e consequente compreensão do que é ensinado.

Todo o aprendizado foi concebido com o objetivo de proporcionar uma forma inovadora e agradável de ensino, algo que foi estabelecido ao se empregar artigos de interesse geral que são voltados à construção de vocabulário e compreensão dos elementos gramaticais.

Além de todas as facilidades já mencionadas, o aluno ainda terá seu aprendizado reforçado com o acesso a materiais em PDF e isso ocorrerá de forma gratuita.`
        }
    },

    methods:{
        autoResize(el) {
            if (!el) return

            el.style.height = "0px"
            el.style.height = el.scrollHeight + "px"
        }
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
    border: solid 1px var(--cor-erro);
    color: var(--cor-erro);
    background-color: var(--cor-fundo-2);
    padding: 0 32px 0 32px;
    border-radius: 100px;
    cursor: pointer;
    transition: all ease 0.3s;
    font-size: 13px;
}

.botao-apagar:hover{
    transform: translateY(-2px);
    background-color: var(--cor-erro);
    color: var(--cor-fundo-2);
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

</style>