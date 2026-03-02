<template>
    <main class="corpo">
        <div class="nav">
            <NavLandingPage/>
        </div>
        <p class="confirmacao" v-if="emailTrocado">E-mail trocado com sucesso!</p>
        <p class="confirmacao" v-else>Aguarde um momento!</p>
    </main>
</template>
<script>
import NavLandingPage from '@/components/NavLandingPage.vue';

export default{
    name: 'EmailTrocado',
    components:{
        NavLandingPage,
    },
    data(){
        return{
            emailTrocado: true
        }
    }
}
</script>

<style scoped>
.corpo{
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
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

.confirmacao{
    font-size: 14px;
    color: var(--cor-fundo-2);
    border: solid 1px var(--cor-fundo-2);
    padding: 10px 20px 10px 20px;
    border-radius: 10px;
    animation: flutuar 3s ease-in-out infinite;
    user-select: none;
    margin-top: 150px;
}

@keyframes flutuar {
    0% {
        transform: translateY(0px);
    }
    50% {
        transform: translateY(-6px);
    }
    100% {
        transform: translateY(0px);
    }
}
</style>