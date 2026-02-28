<template>
    <main class="corpo">
        <section class="conteudo">
            <NavLandingPage/>
            <section class="tela">
                <h1 class="texto-principal">TExto aléatorio sla mano kkkk.</h1>
            </section>
        </section>
    </main>
</template>

<script>
import NavLandingPage from '@/components/NavLandingPage.vue';

export default {
    name: 'LandingPage',
    components:{
        NavLandingPage
    }
}
</script>

<style scoped>
.corpo{
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: var(--cor-tema);
}

.conteudo{
    max-width: 1600px;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
}

.tela{
    height: 100vh;
    width: 100%;
}

.texto-principal{
    font-size: 40px;
    font-weight: 700;
    color: var(--cor-fundo-2);
}
</style>