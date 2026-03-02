<template>
    <main class="corpo">
        <section class="conteudo">
            <section class="conteudo-real">
                <AreaTela
                @setou-tela="setarTela"
                />
                <ControladorDeTela
                :telaAtual="telaAtual"
                />
                <BarraDeMensagem/>
                <button class="baixar">
                    <img src="@/assets/download.png" class="icon-baixar">
                </button>
            </section>
        </section>
    </main>
</template>

<script>
import AreaTela from '@/components/AreaTela.vue';
import BarraDeMensagem from '@/components/BarraDeMensagem.vue';
import ControladorDeTela from '@/components/FluxoTelasTextoGerado/ControladorDeTela.vue';
import Historico from '@/components/Historico.vue';

export default{
    name: 'Home',
    components:{
        BarraDeMensagem,
        Historico,
        AreaTela,
        ControladorDeTela
    },

    data(){
        return{
            telaAtual: ''
        }
    },

    methods:{
        setarTela(tela){
            this.telaAtual = tela
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
    justify-content: center;
    background-color: var(--cor-fundo);
}

.conteudo{
    max-width: 1600px;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
}

.conteudo-real{
    height: 100vh;
    max-height: 100vh;
    overflow: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    position: relative;
    padding: 20px;
}

.baixar{
    position: fixed;
    bottom: 20px;
    right: 25px;
    width: 60px;
    height: 60px;
    background-color: var(--cor-tema);
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 100px;
    transition: all ease 0.3s;
    cursor: pointer;
    animation: surgirDaDireita 1s cubic-bezier(0.22, 1, 0.36, 1);
}

.baixar:hover{
    transform: translateY(-2px);
}

.icon-baixar{
    width: 15px;
    height: 15px;
    filter: brightness(0) invert(1);
}

@keyframes surgirDaDireita {
    0% {
        opacity: 0;
        transform: translateX(40px);
    }

    100% {
        opacity: 1;
        transform: translateX(0);
    }
}

</style>