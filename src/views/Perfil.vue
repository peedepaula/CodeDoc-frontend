<template>
    <main class="corpo">
        <section class="conteudo">
                <section class="conteudo-real">
                    <img src="@/assets/menu.png" class="menu" @click="$emit('abrir-historico')">
                    <PerfilComp/>
                </section>
        </section>
    </main>
</template>

<script>
import PerfilComp from '@/components/PerfilComp.vue';

export default {
    name: 'Perfil',
    components:{
        PerfilComp
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