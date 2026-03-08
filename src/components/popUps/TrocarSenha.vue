<template>
    <section class="corpo-trocar-senha">
        <h3 class="titulo">Trocar senha</h3>
        <img src="@/assets/sair.png" class="x" @click="$emit('fechar-trocar-senha')">
        <div class="dados">
            <div class="input-p">
                <p class="p-input">Senha atual:</p>
                <input type="text" class="input" placeholder="Seu senha atual..." v-model="usuario.senhaAtual">
            </div>

            <div class="input-p">
                <p class="p-input">Nova senha:</p>
                <input type="text" class="input" placeholder="Nova senha..." v-model="usuario.novaSenha">
                <p class="senha-fraca" :class="senhaFraca ? 'senha-fraca' : 'senha-forte'" v-if="usuario.novaSenha">{{senhaFraca? 'Senha fraca' : 'Senha forte'}}</p>
                <p class="detalhe">senha deve ter pelo menos 8 caracteres, incluindo letras maiúsculas, minúsculas, números e um símbolo (#$!@&)</p>
            </div>

            <div class="input-p">
                <p class="p-input">Nova senha novamente:</p>
                <input type="text" class="input" placeholder="Nova senha novamente..." v-model="novaSenhaRepetida">
            </div>

        </div>
        <button class="salvar" @click="trocarSenha">Salvar</button>
    </section>

</template>

<script>
import api from '@/services/api';
import { mostrarPopUp } from '@/services/MostrarPopUpGlobal';

export default{
    name: 'TrocarSenha',
    data(){
        return{
            usuario:{
                senhaAtual: '',
                novaSenha: ''
            },
            novaSenhaRepetida: ''
        }
    },

    methods:{
        async trocarSenha(){
            if(this.senhaFraca){
                mostrarPopUp(
                    "erro",
                    "Erro.",
                    "A senha não atende aos requisitos."
                )
                return
            }

            if(this.usuario.novaSenha !== this.novaSenhaRepetida){
                mostrarPopUp(
                    "erro",
                    "Erro.",
                    "As senhas não coincidem."
                )
                return
            }

            try{
                const { data } = await api.patch(`/usuario/trocar-senha-logado?senha_atual=${this.usuario.senhaAtual.trim()}&nova_senha=${this.usuario.novaSenha.trim()}`)
                this.$emit('fechar-trocar-senha')
                mostrarPopUp(
                    "concluido",
                    "Senha trocada.",
                    "Senha trocada com sucesso."
                )
            }
            catch(err){
                console.error(err)
                mostrarPopUp(
                    "erro",
                    "Erro.",
                    "Erro ao tentar trocar senha."
                )
            }
        }
    },

    computed: {
        senhaFraca() {
            const senha = this.usuario.novaSenha;
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


.detalhe{
    font-size: 11px;
    color: var(--cor-tema);
    text-align: start;
    text-decoration: none;
}

.senha-fraca{
    font-size: 11px;
    color: var(--cor-erro);
}

.senha-forte{
    color: var(--cor-concluido);
}


@keyframes surgir {
    0%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
}

@media (max-width: 600px) {
    .corpo-trocar-senha{
        width: 95%;
    }
}


</style>