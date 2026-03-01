import { ref } from "vue"

const visivel = ref(false)

function mostrar() {
    visivel.value = true

    setTimeout(() => {
        visivel.value = false
    }, 2000)
}

export default {
    visivel,
    mostrar
}