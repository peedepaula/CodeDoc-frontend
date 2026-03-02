<template>
    <main class="corpo">
        <div class="nav">
            <NavLandingPage/>
        </div>
        <RegistrarComp/>
    </main>
</template>

<script>
import NavLandingPage from '@/components/NavLandingPage.vue';
import RegistrarComp from '@/components/RegistrarComp.vue';

export default {
    name: 'Registrar',
    components:{
        RegistrarComp,
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
    align-items: center;
    background-color: var(--cor-tema);
    background-image: radial-gradient(#ffffff3f 1px, transparent 1px);
    background-size: 30px 30px;
}

.nav{
    width: 100%;
    position: absolute;
    top: 0;
}
</style>