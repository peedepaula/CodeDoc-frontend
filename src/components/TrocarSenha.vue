<template>
    <section class="corpo-trocar-senha">
        <h3 class="titulo">Trocar senha</h3>
        <img src="@/assets/sair.png" class="x" @click="$emit('fechar-trocar-senha')">

    </section>

</template>

<script>
export default{
    name: 'TrocarSenha'
}
</script>
<style scoped>
.corpo-trocar-senha{
    width: 500px;
    height: 550px;
    border-radius: 30px;
    background-color: var(--cor-fundo-2);
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    position: relative;
    animation: surgir 0.3s ease;
}

.titulo{
    font-size: 14px;
    font-weight: 400;
    color: var(--cor-tema);
    position: absolute;
    top: 15px;
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

@keyframes surgir {
    0%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
}

</style>