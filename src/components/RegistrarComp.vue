<template>
    <section class="corpo-registrar">
        <h3 class="titulo">Registrar</h3>
        <div class="area-dados">
            <div class="input-p">
                <p class="p-input">Nome:</p>
                <input type="text" class="input" placeholder="Ex: seu nome" v-model="criarConta.nome">
            </div>

            <div class="input-p">
                <p class="p-input">E-mail:</p>
                <input type="text" class="input" placeholder="Ex: seu@email.com" v-model="criarConta.email">
            </div>

            <div class="input-p">
                <p class="p-input">Senha:</p>
                <input type="text" class="input" placeholder="Sua senha..." v-model="criarConta.senha">
                <p class="senha-fraca" :class="senhaFraca ? 'senha-fraca' : 'senha-forte'" v-if="criarConta.senha">{{senhaFraca? 'Senha fraca' : 'Senha forte'}}</p>
                <p class="detalhe">senha deve ter pelo menos 8 caracteres, incluindo letras maiúsculas, minúsculas, números e um símbolo (#$!@&)</p>
            </div>

            <div class="input-p">
                <p class="p-input">Senha novamente:</p>
                <div class="input-icon">
                    <input :type="mostrarSenha? 'text': 'password'" class="input" placeholder="Sua senha novamente..." v-model="senhaNovamente">
                    <img :src="olhoAberto" v-if="!mostrarSenha" @click="mostraEsconderSenha" class="olho">
                    <img :src="olhoFechado" v-else @click="mostraEsconderSenha" class="olho">
                </div>
            </div>
            <button class="entrar">Registrar</button>
        </div>
        
        <router-link to="/login" class="detalhe-2">Já tem conta? <span class="grosso">Clique aqui pra entrar.</span></router-link>
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
            mostrarSenha: false,
            criarConta: {
                nome: '',
                email: '',
                senha: ''
            },
            senhaNovamente: ''
        }
    },

    methods:{
        mostraEsconderSenha(){
            this.mostrarSenha = !this.mostrarSenha
        }
    },

    computed: {
        senhaFraca() {
            const senha = this.criarConta.senha;
            const regexForte = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$!@&])[A-Za-z\d#$!@&]{8,}$/;
            
            return !regexForte.test(senha);
        },

        classeFeedback() {
            return this.senhaFraca ? 'texto-vermelho' : 'texto-verde';
        }
    },
}
</script>
<style scoped>
.corpo-registrar{
    width: 500px;
    height: 580px;
    border-radius: 30px;
    background-color: var(--cor-fundo-2);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px;
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

.area-dados{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    width: 80%;
    margin-top: 60px;
}

.input-p{
    display: flex;
    flex-direction: column;
    gap: 3px;
    width: 100%;
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
    align-self: flex-end;
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

.senha-fraca{
    font-size: 11px;

    color: var(--cor-erro);
}

.senha-forte{
    color: var(--cor-concluido);
}

.detalhe{
    font-size: 11px;
    color: var(--cor-tema);
    text-align: start;
    text-decoration: none;
}

.detalhe-2{
    box-sizing: border-box;
    width: 100%;
    font-size: 12px;
    color: var(--cor-tema);
    text-align: center;
    text-decoration: none;
    position: absolute;
    bottom: 30px;
}

.grosso{
    font-weight: 500;
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