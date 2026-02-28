<template>
    <section class="corpo-configuracao">
        <h3 class="titulo">Configuração</h3>
    </section>

</template>
<script>
export default{
    name: 'ConfiguracaoComp'
}
</script>
<style scoped>
.corpo-configuracao{
    width: 100%;
    height: 500px;
    background-color: var(--cor-fundo-2);
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    box-sizing: border-box;
    padding: 15px;
}

.titulo{
    font-size: 14px;
    font-weight: 400;
    color: var(--cor-tema);
    position: absolute;
    top: 15px;
}
</style>