<template>
    <section class="corpo-readme">
        <h3 class="titulo">Readme</h3>

    </section>
</template>
<script>
export default{
    name: 'TelaReadme'
}
</script>

<style scoped>
.corpo-readme{
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