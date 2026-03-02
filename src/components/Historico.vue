<template>
    <section class="corpo-historico">
        <router-link to="/dashboard" class="logo">CodeDoc</router-link>
        <div class="historico">
            <p class="sessao-historico">Histórico</p>
            <div class="historico-conteudo">
                <p class="titlo-historico">Documentação programa</p>
                <p class="titlo-historico">Projeto cinema</p>
                <p class="titlo-historico">Teste de tal coisa</p>
                <p class="titlo-historico">Hoje não</p>
                <p class="titlo-historico">Fazer festa</p>
                <p class="titlo-historico">Tentar jogar</p>
                <p class="titlo-historico">Fazer o documento</p>
            </div>
        </div>

        <div class="nav-usuario">
            <nav class="nav">
                <router-link to="/configuracao" class="sessao-icon">
                    <img src="@/assets/configuracao.png" class="icon">
                    <p class="sessao">Configuração</p>
                </router-link>
                <router-link to="/perfil" class="sessao-icon">
                    <img src="@/assets/perfil.png" class="icon">
                    <p class="sessao">Sua conta</p>
                </router-link>
            </nav>
            <router-link to="/perfil" class="usuario">
                <div class="foto-usuario">
                    <img :src="fotoFalsa" class="foto-real" v-if="fotoFalsa">
                    <img src="@/assets/camera.png" class="sem-foto" v-else>
                </div>
                <div class="detalhes">
                    <p class="nome-usuario">Pedro de Paula</p>
                    <p class="cargo">Programador</p>
                </div>
            </router-link>
        </div>
    </section>

</template>

<script>
import fotoFalsa from '@/assets/foto-falsa.jpg'

export default{
    name: 'Historico',
    data(){
        return{
            fotoFalsa
        }
    }
}
</script>

<style scoped>
.corpo-historico{
    height: 100vh !important;
    width: 280px !important;
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
    gap: 20px;
    box-sizing: border-box;
    padding-top: 20px;
    height: auto;
    max-height: 380px;
    overflow-y: auto;
    margin-left: 10px;
}

.titlo-historico{
    font-size: 13px;
    font-weight: 500;
    color: var(--cor-texto);
    width: fit-content;
    transition: all ease 0.3s;
    cursor: pointer;
    user-select: none;
    opacity: 1;
}

.titlo-historico:hover{
    transform: translateX(5px);
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
    width: 10px;
    height: 10px;
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

</style>