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
    background-image: radial-gradient(#ffffff3f 1px, transparent 1px);
    background-size: 30px 30px;

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