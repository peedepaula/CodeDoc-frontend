<template>
    <section class="corpo-glossario">
        <h3 class="titulo">Glossário</h3>

    </section>
</template>
<script>
export default{
    name: 'TelaGlossario'
}
</script>

<style scoped>
.corpo-glossario{
    width: 100%;
    height: 1000px;
    border-radius: 20px;
    background-color: var(--cor-fundo-2);
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    padding: 15px;
}

.titulo{
    font-size: 14px;
    font-weight: 400;
    color: var(--cor-tema);
}
</style>