<template>
    <section class="conteudo-telas-texto-gerado">
        <TelaProjeto v-if="tela === 'seu-projeto'"
        @mostrar-apagar-projeto="$emit('mostrar-apagar-projeto')"
        />

        <TelaReadme v-if="tela === 'readme'"/>

        <TelaWiki v-if="tela === 'wiki'"/>

        <TelaDiagramas v-if="tela === 'diagramas'"/>

        <TelaGlossario v-if="tela === 'glossario'"/>
    </section>

</template>

<script>
import TelaDiagramas from './TelaDiagramas.vue';
import TelaGlossario from './TelaGlossario.vue';
import TelaProjeto from './TelaProjeto.vue';
import TelaReadme from './TelaReadme.vue';
import TelaWiki from './TelaWiki.vue';

export default{
    name: 'ControladorDeTela',
    components:{
        TelaReadme,
        TelaWiki,
        TelaDiagramas,
        TelaGlossario,
        TelaProjeto
    },
    data(){
        return{
            tela: 'seu-projeto'
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
    padding: 70px 0 80px 0;
}
</style>