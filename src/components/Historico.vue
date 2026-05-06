<template>
    <section class="corpo-historico" :class="{'aberto': mostrarMobile || fecharMobile}">
        <router-link to="/dashboard" @click="fecharHistoricoSetarDocumentoNull" class="logo">CodeDoc</router-link>
        <div class="historico">
            <p class="sessao-historico">Histórico</p>
            <div class="historico-conteudo">
                <div class="carregando-historico" v-if="carregandoHistorico" v-for="h in 15" :key="h"></div>
                <router-link to="/dashboard" v-else-if="!carregandoHistorico && historico.length > 0" class="titlo-historico" :class="{'ativo': documento?.id === DocumentoSelecionado}" v-for="documento in historico" @click="setarProjeto(documento.id)">{{ documento?.titulo }}</router-link>
                <p class="p-informacao-vazio" v-else>Sem histórico</p>
            </div>
        </div>

        <div class="nav-usuario">
            <nav class="nav">
                <router-link to="/dashboard" class="sessao-icon"
                @click="setarNovo"
                :class="{ desativado: DocumentoSelecionado }"
                >
                    <img src="@/assets/mais.png" class="icon">
                    <p class="sessao">Novo documento</p>  
                </router-link>

                <router-link to="/configuracao" class="sessao-icon"
                @click="fecharHistoricoSetarDocumentoNull"
                >
                    <img src="@/assets/configuracao.png" class="icon">
                    <p class="sessao">Configuração</p>
                </router-link>

                <router-link to="/perfil" class="sessao-icon"
                @click="fecharHistoricoSetarDocumentoNull"
                >
                    <img src="@/assets/perfil.png" class="icon">
                    <p class="sessao">Sua conta</p>
                </router-link>
            </nav>

            <router-link to="/perfil" class="usuario"
            @click="fecharHistoricoSetarDocumentoNull"
            >
                <div class="foto-usuario">
                    <img :src="usuario.foto" class="foto-real" v-if="usuario?.foto">
                    <p class="sem-foto" v-else>{{usuario?.nome?.split(' ').slice(0, 2).map(n => n[0]?.toUpperCase()).join('.')}}</p>
                </div>
                <div class="detalhes">
                    <p class="nome-usuario">{{ usuario?.nome }}</p>
                    <p class="cargo">{{ usuario?.cargo }}</p>
                </div>
            </router-link>
        </div>
    </section>

</template>

<script>
import fotoFalsa from '@/assets/foto-falsa.jpg'
import api from '@/services/api';

export default{
    name: 'Historico',
    data(){
        return{
            fotoFalsa,
            historico: [],
            usuario:{
                nome: '',
                cargo: '',
                foto: ''
            },
            DocumentoSelecionado: null,
            carregandoHistorico: false
        }
    },

    props:{
        mostrarMobile: Boolean
    },

    methods:{
        async buscarHistorico(){
            this.carregandoHistorico = true
            try{
                const { data } = await api.get(`/documentacao/historico`)
                this.historico = data   
                console.log(data)
            }
            catch(err){
                console.error(err)
            }
            finally{
                this.carregandoHistorico = false
            }
        },

        setarProjeto(projetoId){
            this.DocumentoSelecionado = projetoId
            this.$emit('projeto-selecionado', projetoId)
            this.$emit('fechar-historico')
        },

        async buscarPerfil(){
            try{
                const { data } = await api.get(`/usuario/me`)
                this.usuario.nome = data.nome
                this.usuario.cargo = data.nome
                this.usuario.foto = data.foto
            }
            catch(err){
                console.log(err)
            }
        },

        setarNovo(){
            this.DocumentoSelecionado = null
            this.$emit('novo-documento')
            this.$emit('fechar-historico')
        
        },

        fecharHistoricoSetarDocumentoNull(){
            this.DocumentoSelecionado=null
            this.$emit('fechar-historico')
        }

    },

    mounted(){
        this.buscarHistorico()
        this.buscarPerfil()
    }
}
</script>

<style scoped>
.corpo-historico{
    height: 100vh !important;
    width: 280px !important;
    flex: none;
    border-right: solid 1px var(--cor-borda);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 20px;
    align-items: center;
    padding: 12px;
    box-sizing: border-box;
    position: relative;
    background-color: var(--cor-fundo-2);
    border-radius: 0 20px 20px 0;
}

.logo{
    font-size: 25px;
    font-weight: 700;
    color: var(--cor-texto);
    text-decoration: none;
}

.historico{
    height: auto;
    width: 100%;
}

.sessao-historico{
    font-size: 12px;
    font-weight: 400;
    color: var(--cor-texto);
    align-self: flex-end;
    opacity: 0.5;
}

.historico-conteudo{
    display: flex;
    flex-direction: column;
    gap: 5px;
    box-sizing: border-box;
    padding-top: 20px;
    height: auto;
    max-height: 380px;
    overflow-y: auto;
    overflow-x: hidden;
}

.carregando-historico{
    width: 90%;
    height: 30px;
    border-radius: 100px;
    background-color: #dedede;
    position: relative;
    overflow: hidden;
    flex-shrink: 0;
}

.carregando-historico::before{
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;

    background: linear-gradient(
        90deg,
        transparent,
        var(--cor-padrao-fundo-shimmer-sufla),
        transparent
    );

    animation: shimmer 1.4s infinite;
}

.p-informacao-vazio{
    font-size: 13px;
    font-weight: 500;
    color: var(--cor-texto);
    margin: auto;
}

.titlo-historico{
    font-size: 13px;
    font-weight: 500;
    color: var(--cor-texto);
    height: 35px;
    width: 90%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    transition: all ease 0.3s;
    cursor: pointer;
    user-select: none;
    opacity: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 10px;
    text-decoration: none;
}

.titlo-historico:hover{
    transform: translateX(5px);
}

.ativo{
    background-color: var(--cor-tema);
    border-radius: 100px;
    color: var(--cor-fundo-2);
}

.nav-usuario{
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 20px;
    box-sizing: border-box;
    /* padding-left: 10px; */
    margin-top: auto;
}

.nav{
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 100%;
    
}

.sessao-icon{
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    user-select: none;
    transition: all ease 0.3s;
    cursor: pointer;
    text-decoration: none;
    height: 40px;
    border-radius: 100px;
    padding-left: 15px;
    box-sizing: border-box;
}

.sessao-icon:hover{
    background-color: #f4f4f4;
}

.sessao-icon.router-link-active{
    background-color: var(--cor-tema);
}

.sessao-icon.desativado.router-link-active{
   background-color: var(--cor-fundo-2);

}

.sessao-icon.desativado.router-link-active .sessao{
   color: var(--cor-tema);

}

.sessao-icon.desativado.router-link-active .icon{
   filter: brightness(1) invert(0);

}

.sessao-icon.router-link-active .sessao{
    color: var(--cor-fundo-2);
}

.sessao-icon.router-link-active .icon{
    filter: brightness(0) invert(1);
}

.sessao{
    font-size: 13px;
    font-weight: 500;
    color: var(--cor-texto);
    text-decoration: none;
    transition: all ease 0.3s;
}

.icon{
    height: 13px;
    width: auto;
}

.usuario{
    width: 100%;
    height: 45px;
    display: flex;
    flex-direction: row;
    gap: 10px;
    user-select: none;
    cursor: pointer;
    text-decoration: none;
}

.foto-usuario{
    width: 45px;
    height: 45px;
    border-radius: 100px;
    border: solid 0.5px var(--cor-texto);
    background-color: var(--cor-tema);
    display: flex;
    justify-content: center;
    align-items: center;
}

.foto-real{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 100px;
}

.sem-foto{
    font-size: 11px;
    font-weight: 500;
    color: var(--cor-fundo-2);
    color: #f4f4f4;
    z-index: 10;
}

.detalhes{
    display: flex;
    flex-direction: column;

}

.nome-usuario{
    font-size: 12px;
    color: var(--cor-texto);
}

.cargo{
    font-size: 10px;
    opacity: 0.7;
    color: var(--cor-texto);
}

@keyframes surgirDaDireita {
    0%{
        transform: translateX(100%);
        opacity: 0;
    }

    100%{
        transform: translateX(0);
        opacity: 1;
    }
}

@keyframes shimmer {
    0% {
        left: -100%;
    }
    100% {
        left: 100%;
    }
}

@media (min-width: 768px) and (max-width: 1024px) {
    .corpo-historico{
        display: none;
        border-radius: 20px 0 20px 20px;
        border-left: solid 1px var(--cor-borda);
        border-bottom: solid 1px var(--cor-borda);
        height: 90vh !important;
        width: 260px !important;
        box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.046);
    }

    .corpo-historico.aberto{
        transform: translateX(0);
        display: flex;
        position: fixed;
        right: 0;
        top: 0;
        z-index: 999;
        animation: surgirDaDireita 0.35s cubic-bezier(0.22, 1, 0.36, 1) forwards;
    }

    .corpo-historico.fecharMobile{
        display: none;
    }
}

@media (max-width: 600px) {
    .corpo-historico{
        display: none;
        border-radius: 20px 0 20px 20px;
        border-left: solid 1px var(--cor-borda);
        border-bottom: solid 1px var(--cor-borda);
        height: 90vh !important;
        width: 260px !important;
        box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.046);
    }

    .corpo-historico.aberto{
        transform: translateX(0);
        display: flex;
        position: fixed;
        right: 0;
        top: 0;
        z-index: 999;
        animation: surgirDaDireita 0.35s cubic-bezier(0.22, 1, 0.36, 1) forwards;
    }

    .corpo-historico.fecharMobile{
        display: none;
    }
    
}

</style>