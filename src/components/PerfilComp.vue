<template>
    <section class="corpo-perfil">
        <h3 class="titulo">Perfil</h3>
    </section>

</template>
<script>
export default{
    name: 'PerfilComp'
}
</script>
<style scoped>
.corpo-perfil{
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