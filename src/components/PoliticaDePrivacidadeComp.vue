<template>
    <section class="corpo-politica">
        <h3 class="titulo">Política de privacidade</h3>

        <div class="politicas">
            <div class="politica" v-for="n in 10">
                <h4 class="titulo-politica">Politica de faca</h4>
                <p class="descricao-politica">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt repellendus, Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam atque illum quam!</p>
            </div>
        </div>
    </section>

</template>
<script>
export default{
    name: 'PoliticaDePrivacidadeComp'
}
</script>
<style scoped>
.corpo-politica{
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 900px;
    height: auto;
    background-color: var(--cor-fundo-2);
    border-radius: 30px;
    margin-top: 100px;
    animation: surgir 0.3s ease;
}

.titulo{
    font-size: 14px;
    font-weight: 400;
    color: var(--cor-tema);
    position: absolute;
    top: 15px;
}

.politicas{
    display: flex;
    flex-direction: column;
    gap: 40px; 
    margin-top: 100px;
    padding: 0 40px 60px 40px;
    box-sizing: border-box;
}

.politica{
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.titulo-politica{
    font-size: 14px;
    font-weight: 500;
    color: var(--cor-tema);
}

.descricao-politica{
    font-size: 13px;
    font-weight: 400;
    color: var(--cor-tema);
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
    .corpo-politica{
        width: 100%;
        margin-bottom: 50px;
    }
}

</style>