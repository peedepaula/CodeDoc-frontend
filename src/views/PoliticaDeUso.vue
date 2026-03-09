<template>
    <main class="corpo">
        <div class="nav">
            <NavLandingPage/>
        </div>
        <PoliticaDeUsoComp/>
    </main>
</template>

<script>
import NavLandingPage from '@/components/NavLandingPage.vue';
import PoliticaDeUsoComp from '@/components/PoliticaDeUsoComp.vue';

export default {
    name: 'PoliticaDeUso',
    components:{
        NavLandingPage,
        PoliticaDeUsoComp
    }
}
</script>

<style scoped>
.corpo{
    height: auto;
    min-height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--cor-tema);
    background-image: radial-gradient(#ffffff3f 1px, transparent 1px);
    background-size: 30px 30px;
    padding-bottom: 30px;

}

.nav{
    width: 100%;
    position: absolute;
    top: 0;
}

@media (max-width: 600px) {
    .corpo{
        box-sizing: border-box;
        padding: 0 10px 0 10px;
    }
}
</style>