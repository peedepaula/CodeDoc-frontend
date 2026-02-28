<template>
    <main class="corpo">
        <section class="conteudo">
            <Historico class="historico"/>
            <section class="conteudo-real">
                <AreaTela
                @setou-tela="setarTela"
                />
                <ControladorDeTela
                :telaAtual="telaAtual"
                />
                <BarraDeMensagem/>
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

.historico{
    width: 300px;
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

</style>