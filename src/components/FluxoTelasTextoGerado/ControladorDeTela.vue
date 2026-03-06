<template>
    <section class="conteudo-telas-texto-gerado">
        <TelaProjeto
        v-if="tela === 'seu-projeto' && Object.keys(documento).length > 0"
        :titulo="titulo"
        :descricao="descricao"
        :data="data"
        :id="id"
        @mostrar-apagar-projeto="setarProjetoApagar"
        />

        <TelaReadme
        v-if="tela === 'readme' && Object.keys(documento).length > 0"
        :readme="readme"
        />

        <TelaWiki
        v-if="tela === 'wiki' && Object.keys(documento).length > 0"
        :wiki="wiki"
        />

        <TelaDiagramas
        v-if="tela === 'diagramas' && Object.keys(documento).length > 0"
        :diagramas="diagramas"
        />

        <TelaGlossario
        v-if="tela === 'glossario' && Object.keys(documento).length > 0"
        :glossario="glossario"
        />

        <SemDocumento
        v-if="Object.keys(documento).length === 0"
        />
    </section>

</template>

<script>
import api from '@/services/api';
import SemDocumento from './semDocumento.vue';
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
        TelaProjeto,
        SemDocumento
    },
    data(){
        return{
            tela: 'seu-projeto',
            titulo: null,
            descricao: null,
            readme: null,
            wiki: null,
            diagramas: null,
            glossario: null,
            data: null,
            id: null

        }
    },

    props:{
        telaAtual: String,
        documento: Object
    },
    watch:{
        telaAtual:{
            immediate: true,
            handler(tela){
                if(tela){
                    this.tela = tela
                }
            }
        },
        documento:{
            immediate: true,
            handler(dadosDocumento){
                this.titulo = dadosDocumento.titulo_projeto
                this.descricao = dadosDocumento.descricao_projeto
                this.data = dadosDocumento.criado_em
                this.readme = dadosDocumento.readme_projeto
                this.wiki = dadosDocumento.wiki_projeto
                this.diagramas = dadosDocumento.diagramas_projeto
                this.glossario = dadosDocumento.glossario_projeto
                this.id = dadosDocumento.id
            }
        }
    },
    methods:{
        setarProjetoApagar(projetoApagar){
            this.$emit('mostrar-apagar-projeto', projetoApagar)
        },

        async atualizarDocumento(){
           const { data } = await api.patch(`/documentacao/atualizar`)
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