<template>
    <main class="corpo">
        <section class="conteudo">
            <section class="conteudo-real">
                <img src="@/assets/menu.png" class="menu" @click="$emit('abrir-historico')">
                <ConfiguracaoComp
                @mostrar-trocar-email="mostrarTrocarEmail=true"
                @mostrar-trocar-senha="mostrarTrocarSenha=true"
                @mostrar-conta-sair="mostrarSairDaConta=true"
                @mostrar-conta-apagar="mostrarApagarConta=true"
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

        <section class="pop-ups" v-if="mostrarSairDaConta">
            <ConfirmacaoSair
            @fechar-conta-sair="mostrarSairDaConta=false"
            />
        </section>

        <section class="pop-ups" v-if="mostrarApagarConta">
            <ConfirmacaoApagar
            @fechar-conta-apagar="mostrarApagarConta=false"
            />
        </section>
    </main>
</template>

<script>
import ConfiguracaoComp from '@/components/ConfiguracaoComp.vue';
import Historico from '@/components/Historico.vue';
import ConfirmacaoApagar from '@/components/PopUps/ConfirmacaoApagarConta.vue';
import ConfirmacaoSair from '@/components/PopUps/ConfirmacaoSairConta.vue';
import TrocarEmail from '@/components/PopUps/TrocarEmail.vue';
import TrocarSenha from '@/components/PopUps/TrocarSenha.vue';

export default {
    name: 'Configuracao',
    components:{
        Historico,
        ConfiguracaoComp,
        TrocarSenha,
        TrocarEmail,
        ConfirmacaoSair,
        ConfirmacaoApagar
    },
    data(){
        return{
            mostrarTrocarSenha: false,
            mostrarTrocarEmail: false,
            mostrarSairDaConta: false,
            mostrarApagarConta: false
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

.menu{
    display: none;
}

@media (min-width: 768px) and (max-width: 1024px) {
    .conteudo-real{
        padding: 10px;
    }

    .menu{
        display: flex;
        width: 20px;
        height: 20px;
        position: fixed;
        right: 15px;
        padding: 10px;
        border-radius: 100px;
        border: solid 1px var(--cor-borda);
        background-color: var(--cor-fundo-2);
        box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.046);
        z-index: 100;
    }
}

@media (max-width: 600px) {
    .conteudo-real{
        padding: 10px;
    }

    .menu{
        display: flex;
        width: 20px;
        height: 20px;
        position: fixed;
        right: 15px;
        padding: 10px;
        border-radius: 100px;
        border: solid 1px var(--cor-borda);
        background-color: var(--cor-fundo-2);
        box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.046);
        z-index: 100;
    }
}
</style>