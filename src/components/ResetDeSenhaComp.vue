<template>
    <section class="corpo-reset">
        <h3 class="titulo">Resetar senha:</h3>
        <div class="area-dados">
            <div class="input-p">
                <p class="p-input">E-mail:</p>
                <input type="text" class="input" placeholder="Ex: seu@email.com" v-model="usuario.email">
            </div>
            <p class="detalhe">Será mandado um link em seu E-mail, ao clicar nele você será redirecionado para a tela pra realizar a troca de senha.</p>
            <button class="mandar" @click="mandarEmailTrocarSenha">Mandar</button>
        </div>
    </section>
</template>
<script>
import api from '@/services/api';
import { mostrarPopUp } from '@/services/MostrarPopUpGlobal';

export default{
    name: 'ResetDeSenhaComp',
    data(){
        return{
            usuario:{
                email: ''
            }
        }
    },

    methods:{
        async mandarEmailTrocarSenha(){
            if(this.usuario.email === ''){
                mostrarPopUp(
                    "erro",
                    "Erro.",
                    "Digite o e-mail."
                )
                return
            }
            try{
                const { data } = await api.post(`/usuario/mandar-email-trocar-senha-nao-logado?email=${this.usuario.email}`)
                mostrarPopUp(
                    "concluido",
                    "E-mail enviado",
                    "O e-mail com o link para realizar a troca de senha, foi enviado."
                )
            }
            catch(err){
                console.log(err)
                mostrarPopUp(
                    "erro",
                    "Erro.",
                    "Erro ao enviar o e-mail."
                )
            }
        }
    }
}
</script>
<style scoped>
.corpo-reset{
    width: 500px;
    height: 270px;
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
    gap: 5px;
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

.input{
    width: 100%;
    height: 45px;
    border-radius: 10px;
    border: solid 1px rgb(238, 238, 238);
    background-color: rgb(248, 248, 248);
    box-sizing: border-box;
    padding-left: 10px;
}

.mandar{
    position: absolute;
    right: 10px;
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

.mandar:hover{
    transform: translateY(-2px);
}

.detalhe{
    font-size: 11px;
    color: var(--cor-tema);
    text-align: start;
    text-decoration: none;
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
    .corpo-reset{
        width: 100%;
    }
}

</style>