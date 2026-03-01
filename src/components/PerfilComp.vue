<template>
    <section class="corpo-perfil">
        <h3 class="titulo">Sua conta</h3>
        <div class="foto-nome-profissao">
            <div class="img"></div>
            <div class="textos">
                <h3 class="nome">Pedro de Paula</h3>
                <p class="cargo">Programador</p>
            </div>
        </div>
        <div class="atualizar-dados">
            <div class="input-p">
                <p class="p-input">Seu nome:</p>
                <input type="text" class="input" placeholder="Digite seu nome...">
            </div>

            <div class="input-p">
                <p class="p-input">Seu cargo:</p>
                <input type="text" class="input" placeholder="Digite seu cargo...">
            </div>
        </div>
        <button class="salvar">Salvar</button>
    </section>

</template>
<script>
export default{
    name: 'PerfilComp'
}
</script>
<style scoped>
.corpo-perfil{
    width: 100%;
    height: 500px;
    background-color: var(--cor-fundo-2);
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    gap: 50px;
    align-items: center;
    position: relative;
    box-sizing: border-box;
    padding: 20px;
    border: solid 1px var(--cor-borda);
}

.titulo{
    font-size: 14px;
    font-weight: 400;
    color: var(--cor-tema);
    position: absolute;
    top: 15px;
}

.foto-nome-profissao{
    display: flex;
    flex-direction: row;
    gap: 20px;
    height: 120px;
    align-self: flex-start;
    margin-top: 60px;
}

.img{
    width: 120px;
    height: 120px;
    background-color: var(--cor-tema);
    border-radius: 100px;
}

.textos{
    display: flex;
    flex-direction: column;
    gap: 3px;
}

.nome{
    font-size: 18px;
    font-weight: 500;
    color: var(--cor-tema);
}

.cargo{
    font-size: 13px;
    font-weight: 400;
    color: var(--cor-tema);
}

.atualizar-dados{
    align-self: flex-start;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.input-p{
    display: flex;
    flex-direction: column;
    gap: 2px;
}

.p-input{
    font-size: 13px;
    font-weight: 500;
    color: var(--cor-tema);
}

.input{
    width: 300px;
    height: 45px;
    border-radius: 10px;
    border: solid 1px rgb(238, 238, 238);
    background-color: rgb(248, 248, 248);
    box-sizing: border-box;
    padding-left: 10px;
}

.salvar{
    position: absolute;
    right: 15px;
    bottom: 10px;
    height: 35px;
    padding: 0 32px 0 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 100px;
    background-color: var(--cor-tema);
    color: var(--cor-fundo-2);
    font-size: 13px;
    font-weight: 400;
    cursor: pointer;
    transition: all ease 0.3s;
}

.salvar:hover{
    transform: translateY(-2px);
}

</style>