<template>
    <section class="corpo-registrar">
        <h3 class="titulo">Registrar</h3>
        <div class="area-dados">
            <div class="input-p">
                <p class="p-input">Nome:</p>
                <input type="text" class="input" placeholder="Ex: seu@email.com">
            </div>

            <div class="input-p">
                <p class="p-input">E-mail:</p>
                <input type="text" class="input" placeholder="Ex: seu@email.com">
            </div>

            <div class="input-p">
                <p class="p-input">Senha:</p>
                <input type="text" class="input" placeholder="Sua senha...">
            </div>

            <div class="input-p">
                <p class="p-input">Senha novamente:</p>
                <div class="input-icon">
                    <input :type="mostrarSenha? 'text': 'password'" class="input" placeholder="Sua senha novamente...">
                    <img :src="olhoAberto" v-if="!mostrarSenha" @click="mostraEsconderSenha" class="olho">
                    <img :src="olhoFechado" v-else @click="mostraEsconderSenha" class="olho">
                </div>
            </div>
        </div>

        <button class="entrar">Registrar</button>
    </section>
</template>
<script>
import olhoAberto from '@/assets/olho-aberto.png'
import olhoFechado from '@/assets/olho-fechado.png'

export default{
    name: 'RegistrarComp',
    data(){
        return{
            olhoAberto,
            olhoFechado,
            mostrarSenha: false
        }
    },

    methods:{
        mostraEsconderSenha(){
            this.mostrarSenha = !this.mostrarSenha
        }
    }
}
</script>
<style scoped>
.corpo-registrar{
    width: 500px;
    height: 550px;
    border-radius: 30px;
    background-color: var(--cor-fundo-2);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px;
    box-sizing: border-box;
    position: relative;

}

.titulo{
    font-size: 14px;
    font-weight: 400;
    color: var(--cor-tema);
    position: absolute;
    top: 15px;
}

.area-dados{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    width: 100%;
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

.input-icon{
    width: 100%;
    height: 45px;
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
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

.olho{
    position: absolute;
    right: 10px;
    height: 18px;
    width: 18px;
    cursor: pointer;
}

.entrar{
    position: absolute;
    right: 15px;
    bottom: 10px;
    height: 35px;
    color: var(--cor-fundo-2);
    background-color: var(--cor-tema);
    font-size: 13px;
    font-weight: 300;
    border: none;
    border-radius: 100px;
    padding: 0 32px 0 32px;
    cursor: pointer;
    transition: all ease 0.3s;
}

.entrar:hover{
    transform: translateY(-2px);
}

</style>