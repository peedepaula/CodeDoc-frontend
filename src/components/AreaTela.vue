<template>
    <div class="area">
        <p class="area-link" @click="setouTela('seu-projeto')" :class="{'ativo': tela === 'seu-projeto'}">Seu projeto</p>
        <p class="area-link" @click="setouTela('readme')" :class="{'ativo': tela === 'readme'}">Readme</p>
        <p class="area-link" @click="setouTela('wiki')" :class="{'ativo': tela === 'wiki'}">Wiki</p>
        <p class="area-link" @click="setouTela('diagramas')" :class="{'ativo': tela === 'diagramas'}">diagramas de fluxo</p>
        <p class="area-link" @click="setouTela('glossario')" :class="{'ativo': tela === 'glossario'}">Glossário</p>
    </div>
</template>

<script>
export default{
    name: 'AreaTela',
    data(){
        return{
            tela: 'seu-projeto'
        }
    },

    methods:{
        setouTela(tela){
            this.tela = tela
            this.$emit("setou-tela", tela)
        }
    }
}
</script>

<style scoped>
.area{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 30px;
    background-color: var(--cor-fundo-2);
    height: 45px;
    padding: 0 30px 0 30px;
    border-radius: 100px;
    position: fixed;
    top: 20px;
    border: solid 1px var(--cor-borda);
    box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.046);
    z-index: 10;
    animation: surgirDeCima 1s cubic-bezier(0.22, 1, 0.36, 1);
}

.area-link{
    height: 30px;
    font-size: 14px;
    font-weight: 500;
    color: var(--cor-texto);
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    user-select: none;
    transition: all ease 0.3s;

}

.area-link:hover{
    padding: 0 15px 0 15px;
    border-radius: 100px;
    background-color: #f6f6f6;
}

.area-link.ativo{
    background-color: var(--cor-tema);
    color: var(--cor-fundo-2);
    padding: 0 15px 0 15px;
    border-radius: 100px;
}

@keyframes surgirDeCima {
    0% {
        opacity: 0;
        transform: translateY(-100px);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>