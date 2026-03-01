<template>
    <div class="corpo-principal">
        <Historico/>
        <div class="corpo-principal-real">
            <RouterView/>
        
            <!-- PopUps -->
            <Copiado/>
             <!-- PopUps -->
        </div>
    </div>
</template>

<script>
import Historico from './components/Historico.vue';
import Copiado from './components/popUps/Copiado.vue';

export default{
    name: "App",
    components:{
        Copiado,
        Historico
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
}

*{
    margin: 0;
    padding: 0;
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
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
