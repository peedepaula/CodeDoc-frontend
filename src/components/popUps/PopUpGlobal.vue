<template>
    <div class="corpo-popup" v-if="visivel">
        <img src="@/assets/erro.png" class="icon-erro-concluido" v-if="tipo === 'erro'">
        <img src="@/assets/concluido.png" class="icon-erro-concluido" v-else>
        <div class="mensagem">
            <h5 class="titulo-mensagem" :class="{'erro': tipo === 'erro'}">{{ titulo }}</h5>
            <p class="detalhe-mensagem" :class="{'erro': tipo === 'erro'}">{{ mensagem }}</p>
        </div>
    </div>
</template>
<script>
import { estadoPopUp } from '@/services/MostrarPopUpGlobal.js'

export default {
    name: 'PopUpGlobal',
    computed: {
        visivel() { return estadoPopUp.visivel },
        titulo() { return estadoPopUp.titulo },
        mensagem() { return estadoPopUp.mensagem },
        tipo() { return estadoPopUp.tipo }
    }
}
</script>
<style scoped>
.corpo-popup{
    padding: 8px;
    box-sizing: border-box;
    background-color: var(--cor-fundo-2);
    width: 200px;
    height: auto;
    min-height: 60px;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
    position: fixed;
    right: 20px;
    top: 10px;
    box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.046);
    border: solid 1px var(--cor-borda);
    animation: surgirDaDireita 1s cubic-bezier(0.22, 1, 0.36, 1);
}

.icon-erro-concluido{
    width: 20px;
    height: auto;
}

.mensagem{
    display: flex;
    flex-direction: column;
    gap: 3px;
}

.titulo-mensagem{
    font-size: 14px;
    font-weight: 500;
    color: var(--cor-concluido);
}

.detalhe-mensagem{
    font-size: 12px;
    color: var(--cor-concluido);
}

.erro{
    color: var(--cor-erro);
}

@keyframes surgirDaDireita {
    0% {
        opacity: 0;
        transform: translateX(40px);
    }

    60% {
        opacity: 1;
        transform: translateX(-10px);
    }

    100% {
        opacity: 1;
        transform: translateX(0);
    }
}
</style>

