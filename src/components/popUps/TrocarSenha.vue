<template>
    <section class="corpo-trocar-senha">
        <h3 class="titulo">Trocar senha</h3>
        <img src="@/assets/sair.png" class="x" @click="$emit('fechar-trocar-senha')">
        <div class="dados">
            <div class="input-p">
                <p class="p-input">Senha atual:</p>
                <input type="text" class="input" placeholder="Seu senha atual...">
            </div>

            <div class="input-p">
                <p class="p-input">Nova senha:</p>
                <input type="text" class="input" placeholder="Nova senha...">
            </div>

            <div class="input-p">
                <p class="p-input">Nova senha novamente:</p>
                <input type="text" class="input" placeholder="Nova senha novamente...">
            </div>

        </div>
        <button class="salvar">Salvar</button>
    </section>

</template>

<script>
export default{
    name: 'TrocarSenha'
}
</script>
<style scoped>
.corpo-trocar-senha{
    width: 500px;
    height: 550px;
    border-radius: 30px;
    background-color: var(--cor-fundo-2);
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    position: relative;
    animation: surgir 0.3s ease;
}

.titulo{
    font-size: 14px;
    font-weight: 400;
    color: var(--cor-tema);
    position: absolute;
    top: 15px;
}

.x{
    width: 15px;
    height: 15px;
    opacity: 0.6;
    position: absolute;
    right: 20px;
    top: 15px;
    cursor: pointer;
}

.dados{
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    margin-top: 60px;
}

.input-p{
    display: flex;
    flex-direction: column;
    gap: 3px;
    width: 80%;
}

.p-input{
    font-size: 13px;
    font-weight: 500;
    color: var(--cor-tema);
}

.input{
    width: 100%;
    height: 45px;
    border-radius: 10px;
    border: solid 1px rgb(238, 238, 238);
    background-color: rgb(248, 248, 248);
    box-sizing: border-box;
    padding-left: 10px;
}

.salvar{
    position: absolute;
    right: 10px;
    bottom: 10px;
    height: 35px;
    padding: 0px 32px 0 32px;
    border: none;
    background-color: var(--cor-tema);
    color: var(--cor-fundo-2);
    font-size: 13px;
    font-weight: 400;
    border-radius: 100px;
    cursor: pointer;
    transition: all ease 0.3s;
}

.salvar:hover{
    transform: translateY(-2px);
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