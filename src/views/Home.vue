<template>
    <main class="corpo">
        <section class="conteudo">
            <section class="conteudo-real">
                <AreaTela
                v-if="Object.keys(documento).length > 0 && documento.readme_projeto !== 'Processando...'"
                @setou-tela="setarTela"
                @abrir-historico="$emit('abrir-historico')"
                />
                <img v-else src="@/assets/menu.png" class="menu" @click="$emit('abrir-historico')">

                <ControladorDeTela
                :telaAtual="telaAtual"
                :documento="documento"
                @mostrar-apagar-projeto="setarPojetoApagar"
                />
                <BarraDeMensagem
                v-if="Object.keys(documento).length === 0"
                @projeto-criado="setarDocumento"
                @iniciar-polling="iniciarPolling"
                />
                <button class="baixar"
                v-if="Object.keys(documento).length > 0 && documento.readme_projeto !== 'Processando...'"
                @click="baixarDocumentacao"
                >
                    <img src="@/assets/download.png" class="icon-baixar">
                </button>
            </section>
        </section>
        <section class="pop-ups" v-if="mostrarConfirmacaoApagarProjeto">
            <ConfirmacaoApagarProjeto
            @fechar-apagar-projeto="mostrarConfirmacaoApagarProjeto=false"
            :projetoApagar="projetoApagar"
            />
        </section>
    </main>
</template>

<script>
import AreaTela from '@/components/AreaTela.vue';
import BarraDeMensagem from '@/components/BarraDeMensagem.vue';
import ControladorDeTela from '@/components/FluxoTelasTextoGerado/ControladorDeTela.vue';
import ConfirmacaoApagarProjeto from '@/components/PopUps/ConfirmacaoApagarProjeto.vue';
import { mostrarPopUp } from '@/services/MostrarPopUpGlobal';
import api from '@/services/api';

export default{
    name: 'Home',
    components:{
        BarraDeMensagem,
        AreaTela,
        ControladorDeTela,
        ConfirmacaoApagarProjeto
    },

    data(){
        return{
            telaAtual: '',
            mostrarConfirmacaoApagarProjeto: false,
            documento: {},
            projetoApagar: null
        }
    },

    props:{
        projetoSetado: String
    },

    watch:{
        projetoSetado:{
            immediate: true,
            handler(projetoId){
                if(projetoId){
                    this.buscarProjeto(projetoId)
                }
                else{
                    this.documento = {}
                }
            }
        }
    },

    methods:{
        mostrarPopUp,

        setarTela(tela){
            this.telaAtual = tela
        },

        async buscarProjeto(id){
            try{
                const { data } = await api.get(`/documentacao/buscar?id_projeto=${id}`)
                console.log(data)
                this.documento = data
            }

            catch(err){
                console.error(err)
            }
        },

        setarDocumento(documento){
            this.documento = {} 
            this.$nextTick(() => {
                this.documento = { ...documento }
            })
        },

        setarPojetoApagar(projetoApagar){
            this.projetoApagar =projetoApagar
            this.mostrarConfirmacaoApagarProjeto=true
        },

        async baixarDocumentacao() {
            try{
                const response = await api.get(
                    `/documentacao/download?id_projeto=${this.documento.id}`,
                    {
                        responseType: 'blob'
                    }
                )

                const blob = new Blob([response.data], {
                    type: 'application/pdf'
                })

                const url = window.URL.createObjectURL(blob)
                const link = document.createElement('a')
                link.href = url

                link.download = 'documentacao.pdf'

                document.body.appendChild(link)
                link.click()
                link.remove()

                window.URL.revokeObjectURL(url)
            }

            catch(err){
                console.error(err)
            }
        },

        async iniciarPolling(idProjeto) {
            const intervalo = setInterval(async () => {
            try {

                const { data } = await api.get(
                    `/documentacao/buscar`,
                    {
                        params: {
                            id_projeto: idProjeto
                        }
                    }
                )

                const terminou =
                    data.readme_projeto !== "" &&
                    data.readme_projeto !== "Processando..."

                if (terminou) {
                    clearInterval(intervalo)
                    mostrarPopUp(
                        "concluido",
                        "Concluído.",
                        "Documentação criada com sucesso!"
                    )
                    this.documento = data
                }
            }

            catch (err) {
                clearInterval(intervalo)
                console.error(err)
            }

            }, 3000)
        }
    }
}
</script>

<style scoped>
.corpo{
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: var(--cor-fundo);
    position: relative;
}

.conteudo{
    max-width: 1600px;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
}

.conteudo-real{
    height: 100vh;
    max-height: 100vh;
    overflow: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    position: relative;
    padding: 20px;
}

.baixar{
    position: fixed;
    bottom: 20px;
    right: 25px;
    width: 60px;
    height: 60px;
    background-color: var(--cor-tema);
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 100px;
    transition: all ease 0.3s;
    cursor: pointer;
    animation: surgirDaDireita 1s cubic-bezier(0.22, 1, 0.36, 1);
}

.baixar:hover{
    transform: translateY(-2px);
}

.icon-baixar{
    width: 15px;
    height: 15px;
    filter: brightness(0) invert(1);
}

.pop-ups{
    position: absolute;
    top: 0;
    left: 0;
    background-color: #00000031;
    z-index: 999;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px); 
}

.menu{
    display: none;
}

@keyframes surgirDaDireita {
    0% {
        opacity: 0;
        transform: translateX(40px);
    }

    100% {
        opacity: 1;
        transform: translateX(0);
    }
}

@media (min-width: 768px) and (max-width: 1024px) {
    .conteudo-real{
        padding: 10px;
    }

    .menu{
        display: flex;
        width: 20px;
        height: 20px;
        position: fixed;
        right: 15px;
        padding: 10px;
        border-radius: 100px;
        border: solid 1px var(--cor-borda);
        background-color: var(--cor-fundo-2);
        box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.046);
        z-index: 100;
    } 
}

@media (max-width: 600px) {
    .conteudo-real{
        padding: 10px;
    }

    .menu{
        display: flex;
        width: 20px;
        height: 20px;
        position: fixed;
        right: 15px;
        padding: 10px;
        border-radius: 100px;
        border: solid 1px var(--cor-borda);
        background-color: var(--cor-fundo-2);
        box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.046);
        z-index: 100;
    }
}

</style>