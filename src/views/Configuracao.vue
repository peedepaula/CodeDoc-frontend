<template>
    <main class="corpo">
        <section class="conteudo">
            <section class="conteudo-real">
                <ConfiguracaoComp
                @mostrar-trocar-email="mostrarTrocarEmail=true"
                @mostrar-trocar-senha="mostrarTrocarSenha=true"
                />
            </section>
        </section>

        <section class="pop-ups" v-if="mostrarTrocarEmail">
            <TrocarEmail
            @fechar-trocar-email="mostrarTrocarEmail=false"
            />
        </section>

        <section class="pop-ups" v-if="mostrarTrocarSenha">
            <TrocarSenha
            @fechar-trocar-senha="mostrarTrocarSenha=false"
            />
        </section>
    </main>
</template>

<script>
import ConfiguracaoComp from '@/components/ConfiguracaoComp.vue';
import Historico from '@/components/Historico.vue';
import TrocarEmail from '@/components/TrocarEmail.vue';
import TrocarSenha from '@/components/TrocarSenha.vue';

export default {
    name: 'Configuracao',
    components:{
        Historico,
        ConfiguracaoComp,
        TrocarSenha,
        TrocarEmail
    },
    data(){
        return{
            mostrarTrocarSenha: false,
            mostrarTrocarEmail: false
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

.pop-ups{
    position: absolute;
    top: 0;
    left: 0;
    background-color: #00000031;
    z-index: 999;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px); 
}
</style>