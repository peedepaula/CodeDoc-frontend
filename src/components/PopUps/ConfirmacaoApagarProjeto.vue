<template>
    <section class="corpo-pop-up">
        <h3 class="titulo">Projeto</h3>
        <img src="@/assets/sair.png" class="x" @click="$emit('fechar-apagar-projeto')">
        <div class="textos">
            <h4 class="titulo-pop-up">Apagar projeto?</h4>
            <p class="detalhe-pop-up">Você tem certeza que deseja apagar seu projeto? Ao apagar você não terá como recuperar seus dados novamente.</p>
        </div>
        <button class="botao-pop-up" @click="apagarProjeto">Apagar</button>
    </section>
</template>
<script>
import api from '@/services/api';
import { mostrarPopUp } from '@/services/MostrarPopUpGlobal';

export default{
    name: 'ConfirmacaoApagarProjeto',

    props:{
        projetoApagar: String
    },

    methods:{
        async apagarProjeto(){
            const id = this.projetoApagar
            try{
                await api.delete(`/documentacao/apagar?id_projeto=${id}`)
                this.$emit('fechar-apagar-projeto')
                mostrarPopUp(
                    "concluido",
                    "Projeto apagado.",
                    "Projeto apagado com sucesso."
                )
            }
            catch(err){
                console.error(err)
                mostrarPopUp(
                    "erro",
                    "Erro.",
                    "Erro ao tentar apagar o projeto."
                )
            }
        }
    }
}
</script>
<style scoped>
.corpo-pop-up{
    width: 400px;
    height: auto;
    min-height: 200px;
    box-sizing: border-box;
    padding: 20px;
    background-color: var(--cor-fundo-2);
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    position: relative;
    animation: surgir 0.3s ease;

}

.titulo{
    font-size: 14px;
    font-weight: 400;
    color: var(--cor-tema);
    position: absolute;
    top: 15px;
    left: 50%;
    transform: translateX(-50%);
}

.x{
    width: 15px;
    height: 15px;
    opacity: 0.6;
    position: absolute;
    right: 20px;
    top: 15px;
    cursor: pointer;
}

.textos{
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: start;
    margin-top: 15px;
    padding: 10px;
}

.titulo-pop-up{
    font-size: 14px;
    color: var(--cor-tema);
}

.detalhe-pop-up{
    font-size: 12px;
    color: var(--cor-tema);
}

.botao-pop-up{
    height: 35px;
    padding: 0 32px 0 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 100px;
    background-color: var(--cor-erro);
    color: var(--cor-fundo-2);
    font-size: 13px;
    font-weight: 400;
    cursor: pointer;
    transition: all ease 0.3s;
    align-self: flex-end;
    position: absolute;
    right: 15px;
    bottom: 10px;
}

.botao-pop-up:hover{
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
    .corpo-pop-up{
        width: 95%;
    }
}

</style>