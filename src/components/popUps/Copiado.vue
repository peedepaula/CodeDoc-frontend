<template>
    <p class="copiado" v-if="visivel">Copiado!</p>
</template>

<script>
import copiarService from "@/services/MostrarPopUpCopiado"

export default{
    name: 'CopiadoComp',
    setup(){
        return {
            visivel: copiarService.visivel
        }
    }
}
</script>
<style scoped>
.copiado{
    height: 35px;
    padding: 0 32px 0 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    font-size: 13px;
    color: var(--cor-tema);
    border: solid 1px var(--cor-tema);
    background-color: var(--cor-fundo-2);
    position: absolute;
    bottom: 80px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 9999;
    user-select: none;
    animation: surgir 0.3s ease;
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