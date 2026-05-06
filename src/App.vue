<template>
    <div class="corpo-principal">
        <Historico
        v-if="!$route.meta.esconderHistorico"
        @projeto-selecionado="setarProjeto"
        @novo-documento="projetoSetado = null"
        @fechar-historico="fecharHistorico"
        :mostrarMobile="mostrarHistoricoMobile"
        />
        <div class="corpo-principal-real">
            <RouterView
            :projetoSetado="projetoSetado"
            @abrir-historico="abrirHistorico"
            />
        
            <!-- PopUps -->
            <Copiado/>
            <PopUpGlobal/>
             <!-- PopUps -->
        </div>
    </div>
</template>

<script>
import Historico from '@/components/Historico.vue';
import Copiado from '@/components/popUps/Copiado.vue';
import PopUpGlobal from '@/components/PopUps/PopUpGlobal.vue';

export default{
    name: "App",
    components:{
        Copiado,
        Historico,
        PopUpGlobal
    },
    data(){
        return{
            projetoSetado: null,
            mostrarHistoricoMobile: false
        }
    },

    methods:{
        setarProjeto(projetoId){
            this.projetoSetado = projetoId
        },

        abrirHistorico(){
            this.mostrarHistoricoMobile = true
        },

        fecharHistorico(){
            this.mostrarHistoricoMobile = false
        }
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

:root{
    --cor-fundo: #eeeeee;
    --cor-fundo-2: #fcfcfc;
    --cor-tema: #0c465f;
    --cor-texto: #0c465f;
    --cor-sub-texto: #909090;
    --cor-borda: #dddddd;
    --cor-erro: #FF0000;
    --cor-concluido: #008000;
}

html{
    scroll-behavior: smooth;
}

*{
    margin: 0;
    padding: 0;
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
}

::placeholder{
    opacity: 0.7;
}

input{
  font-size: 13px;
  color: var(--cor-tema);
  font-weight: 500;
}

.corpo-principal{
    display: flex;
    flex-direction: row;
    width: 100%;
    background-color: var(--cor-fundo);
}

.corpo-principal-real{
    width: 100%;
    position: relative;
}
</style>
