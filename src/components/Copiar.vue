<template>
    <img src="@/assets/copiar.png" class="copiar-icon" @click="copiarReadme">
</template>

<script>
import copiarService from "@/services/MostrarPopUpCopiado"

export default{
    name: 'Copiar',
    props:{
        textoParaCopiar: String
    },
    methods:{
        async copiarReadme(){
            if (!this.textoParaCopiar) return;
            try {

                if (navigator.clipboard) {
                    await navigator.clipboard.writeText(this.textoParaCopiar)
                    copiarService.mostrar()
                } else {
                    const textarea = document.createElement("textarea")
                    textarea.value = this.textoParaCopiar
                    document.body.appendChild(textarea)
                    textarea.select()
                    document.execCommand("copy")
                    document.body.removeChild(textarea)
                    copiarService.mostrar()
                }

            } catch (err) {
                console.error("Erro ao copiar:", err)
            }
        }
    }
}
</script>
<style scoped>
.copiar-icon{
    width: 20px;
    height: auto;
    position: absolute;
    right: 18px;
    bottom: 18px;
    cursor: pointer;
    transition: all ease 0.3s;
}

.copiar-icon:hover{
    transform: translateY(-2px);
}
</style>