<template>
    <section class="corpo-historico">
        <h2 class="logo">DocCode</h2>
        <div class="historico">
            <p class="sessao-historico">Histórico</p>
            <div class="historico-conteudo">
                <p class="titlo-historico" v-for="n in 10" :key="ht">Documentação programa</p>
            </div>
        </div>

        <div class="nav-usuario">
            <nav class="nav">
                <router-link to="/" class="sessao-icon">
                    <img src="@/assets/configuracao.png" class="icon">
                    <p class="sessao">Configuração</p>
                </router-link>
                <router-link to="/" class="sessao-icon">
                    <img src="@/assets/perfil.png" class="icon">
                    <p class="sessao">Pefil</p>
                </router-link>
            </nav>
            <div class="usuario">
                <div class="foto-usuario">
                    <img src="@/assets/camera.png" class="sem-foto">
                </div>
                <div class="detalhes">
                    <p class="nome-usuario">Pedro de Paula</p>
                    <p class="cargo">Programador</p>
                </div>
            </div>
        </div>
    </section>

</template>

<script>
export default{
    name: 'Historico'
}
</script>

<style scoped>
.corpo-historico{
    height: 100vh !important;
    width: 250px;
    /* border-right: solid 1px #898989; */
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
    font-size: 14px;
    font-weight: 500;
    color: var(--cor-texto);
    width: fit-content;
    transition: all ease 0.3s;
    cursor: pointer;
    user-select: none;
}

.titlo-historico:hover{
    transform: translateX(5px);
}

.nav-usuario{
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 40px;
    box-sizing: border-box;
    padding-left: 10px;
    margin-top: auto;
}

.nav{
    display: flex;
    flex-direction: column;
    gap: 15px;
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
}


.sessao{
    font-size: 14px;
    font-weight: 500;
    color: var(--cor-texto);
    text-decoration: none;
    transition: all ease 0.3s;
}

.sessao:hover{
    transform: translateX(5px);
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
    font-weight: 300;
    color: var(--cor-texto);
}

</style>