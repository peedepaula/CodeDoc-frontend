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
import api from '@/services/api';
import { mostrarPopUp } from '@/services/MostrarPopUpGlobal';

export default{
    name: 'EmailTrocado',
    components:{
        NavLandingPage,
    },
    data(){
        return{
            emailTrocado: true
        }
    },

    methods:{
        async confirmarTroca(){
            const token = this.$route.params.token
            try{
                await api.patch(`/usuario/trocar-email?token=${token}`)

                mostrarPopUp(
                    "concluido",
                    "E-mail trocado.",
                    "E-mail trocado com sucesso."
                )
            }
            catch(err){
                console.error(err)
                mostrarPopUp(
                    "erro",
                    "Erro.",
                    "Erro ao tentar trocar e e-mail."
                )
            }
        }
    },
    mounted(){
        this.confirmarTroca()
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

@media (max-width: 600px) {
    .corpo{
        box-sizing: border-box;
        padding: 0 10px 0 10px;
    }
}

</style>