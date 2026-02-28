<template>
    <section class="conteudo-telas-texto-gerado">
        <TelaReadme v-if="tela === 'readme'"/>

        <TelaWiki v-if="tela === 'wiki'"/>

        <TelaDiagramas v-if="tela === 'diagramas'"/>

        <TelaGlossario v-if="tela === 'glossario'"/>
    </section>

</template>

<script>
import TelaDiagramas from './TelaDiagramas.vue';
import TelaGlossario from './TelaGlossario.vue';
import TelaReadme from './TelaReadme.vue';
import TelaWiki from './TelaWiki.vue';

export default{
    name: 'ControladorDeTela',
    components:{
        TelaReadme,
        TelaWiki,
        TelaDiagramas,
        TelaGlossario
    },
    data(){
        return{
            tela: 'readme'
        }
    },

    props:{
        telaAtual: String
    },
    watch:{
        telaAtual:{
            immediate: true,
            handler(tela){
                if(tela){
                    this.tela = tela
                }
            }
        }
    }
}
</script>

<style scoped>
.conteudo-telas-texto-gerado{
    width: 100%;
    height: auto;
    padding: 70px 0 60px 0;
}
</style>