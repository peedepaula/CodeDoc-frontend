<template>
<section class="corpo-diagrama">
  <h3 class="titulo">Diagramas</h3>

  <div
    class="diagrama-titulo"
    v-for="(d, index) in diagramasArray"
    :key="index"
  >
    <h4 class="titulo-diagrama">Diagrama - {{ index + 1 }}</h4>

    <div
      :id="`diagram-${index}`"
      class="mermaid diagrama"
    >
      {{ d }}
    </div>

  </div>

</section>
</template>
<script>
import mermaid from "mermaid"

export default {
  name: 'TelaDiagrama',

  props: {
    diagramas: {
      type: [String, Array],
      default: () => []
    }
  },

  computed: {
    diagramasArray() {
      if (Array.isArray(this.diagramas)) return this.diagramas
      if (typeof this.diagramas === 'string') return [this.diagramas]
      return []
    }
  },

  mounted() {
    mermaid.initialize({ startOnLoad: false })
    this.renderDiagrams()
  },

  watch: {
    diagramas: {
      deep: true,
      handler() {
        this.$nextTick(() => {
          this.renderDiagrams()
        })
      }
    }
  },

  methods: {
    renderDiagrams() {
      this.diagramasArray.forEach((_, index) => {
        const el = document.getElementById(`diagram-${index}`)
        if (el) mermaid.init(undefined, el)
      })
    }
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
    gap: 20px;
    align-items: center;
    box-sizing: border-box;
    padding: 20px;
    border: solid 1px var(--cor-borda);
    padding-bottom: 60px;
    animation: surgir 0.3s ease;
}

.titulo{
    font-size: 14px;
    font-weight: 400;
    color: var(--cor-tema);
    position: absolute;
    top: 15px;
}

.diagrama-titulo{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: auto;
    min-width: 60%;
    max-width: 100%;
    gap: 5px;
    margin-top: 60px;
    border: 2px dotted var(--cor-tema);
    border-radius: 8px;
    padding: 15px;
    box-sizing: border-box;
}

.titulo-diagrama{
    font-size: 14px;
    font-weight: 400;
    color: var(--cor-tema);
}

#diagramas{
    margin-top: 40px;
}

@keyframes surgir {
    0%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
}
</style>