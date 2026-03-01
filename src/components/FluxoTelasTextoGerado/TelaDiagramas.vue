<template>
    <section class="corpo-diagrama">
        <h3 class="titulo">Diagramas</h3>
        <div id="diagramas"
            class="mermaid diagrama"
            v-html="codigoDiagrama">
        </div>

    </section>
</template>
<script>
import mermaid from "mermaid"

export default{
    name: 'TelaDiagrama',

    data(){
        return{
            codigoDiagrama: `
            flowchart TD
                A[Início] --> B[Login]
                B --> C{Credenciais válidas?}
                C -->|Sim| D[Gerar JWT]
                C -->|Não| E[Erro]
                D --> F[Fim]
            `
        }
    },

    mounted() {
        mermaid.initialize({ startOnLoad: false })
        this.$nextTick(() => {
            mermaid.run()
        })
    }
}
</script>

<style scoped>
.corpo-diagrama{
    width: 100%;
    height: auto;
    border-radius: 20px;
    background-color: var(--cor-fundo-2);
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    padding: 15px;
    border: solid 1px var(--cor-borda);
    padding-bottom: 60px;
}

.titulo{
    font-size: 14px;
    font-weight: 400;
    color: var(--cor-tema);
    position: absolute;
    top: 15px;
}

#diagramas{
    margin-top: 40px;
}
</style>