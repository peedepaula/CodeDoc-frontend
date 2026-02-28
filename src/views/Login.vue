<template>
    <main class="corpo">
        <div class="nav">
            <NavLandingPage/>
        </div>
        <LoginComp/>
    </main>
</template>

<script>
import LoginComp from '@/components/LoginComp.vue';
import NavLandingPage from '@/components/NavLandingPage.vue';

export default {
    name: 'Login',
    components:{
        LoginComp,
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

}

.nav{
    width: 100%;
    position: absolute;
    top: 0;
}
</style>