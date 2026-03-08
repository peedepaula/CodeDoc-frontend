<template>
    <section class="conteudo-telas-texto-gerado">
        <TelaProjeto
        v-if="tela === 'seu-projeto' && Object.keys(documento).length > 0"
        :titulo="titulo"
        :descricao="descricao"
        :data="data"
        :id="id"
        @mostrar-apagar-projeto="setarProjetoApagar"
        @update-dados="sincronizarMudancas"
        @salvar="atualizarDocumento"
        />

        <TelaReadme
        v-if="tela === 'readme' && Object.keys(documento).length > 0"
        :readme="readme"
        @update-dados="sincronizarMudancas"
        />

        <TelaWiki
        v-if="tela === 'wiki' && Object.keys(documento).length > 0"
        :wiki="wiki"
        @update-dados="sincronizarMudancas"
        />

        <TelaDiagramas
        v-if="tela === 'diagramas' && Object.keys(documento).length > 0"
        :diagramas="diagramas"
        />

        <TelaGlossario
        v-if="tela === 'glossario' && Object.keys(documento).length > 0"
        :glossario="glossario"
        @update-dados="sincronizarMudancas"
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
import { mostrarPopUp } from '@/services/MostrarPopUpGlobal';

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
            id: null,

            projetoEditado: {}

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

        sincronizarMudancas(fragmento) {
            this.projetoEditado = { ...this.projetoEditado, ...fragmento }
            console.log(fragmento)
        },

        async atualizarDocumento() {
            console.log("Fui")
            if (Object.keys(this.projetoEditado).length === 0) return;

            try {
                const { data } = await api.patch(
                    `/documentacao/atualizar?id_projeto=${this.id}`, 
                    this.projetoEditado
                );
                mostrarPopUp(
                    "concluido",
                    "Projeto salvo.",
                    "Projeto salvo com sucesso."
                )
                this.projetoEditado = {};

            } catch (err) {
                console.error(err);
                mostrarPopUp(
                    "erro",
                    "Erro.",
                    "Erro ao tentar salvar o projeto."
                )
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

@media (max-width: 600px) {
    .conteudo-telas-texto-gerado{
        padding: 80px 0 80px 0;
    }
}
</style>