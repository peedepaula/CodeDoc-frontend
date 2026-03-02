import { reactive } from "vue"

// Estado único e global
export const estadoPopUp = reactive({
    visivel: false,
    tipo: 'concluido',
    titulo: '',
    mensagem: ''
})

export function mostrarPopUp(tipo, titulo, mensagem) {
    estadoPopUp.tipo = tipo
    estadoPopUp.titulo = titulo
    estadoPopUp.mensagem = mensagem
    estadoPopUp.visivel = true

    setTimeout(() => {
        estadoPopUp.visivel = false
    }, 4000)
}