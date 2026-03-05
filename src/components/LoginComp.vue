<template>
    <section class="corpo-login">
        <h3 class="titulo">Login</h3>
        <div class="area-dados">
            <div class="input-p">
                <p class="p-input">E-mail:</p>
                <input type="text" class="input" placeholder="Ex: seu@email.com" v-model="usuarioLogin.email">
            </div>

            <div class="input-p">
                <p class="p-input">Senha:</p>
                <div class="input-icon">
                    <input :type="mostrarSenha? 'text': 'password'" class="input" placeholder="Sua senha..." v-model="usuarioLogin.senha">
                    <img :src="olhoAberto" v-if="!mostrarSenha" @click="mostraEsconderSenha" class="olho">
                    <img :src="olhoFechado" v-else @click="mostraEsconderSenha" class="olho">
                </div>
                <router-link to="/esqueceu-senha" class="detalhe">Esqueceu a senha? clique aqui para redefinir.</router-link>
            </div>
            <button class="entrar" @click="fazerLogin">Entrar</button>
        </div>
        <router-link to="/registrar" class="detalhe-2">Ainda não tem conta? <span class="grosso">Clique aqui pra criar uma.</span></router-link>
    </section>
</template>
<script>
import olhoAberto from '@/assets/olho-aberto.png'
import olhoFechado from '@/assets/olho-fechado.png'
import api, { TOKEN_KEY } from '@/services/api';

export default{
    name: 'LoginComp',
    data(){
        return{
            olhoAberto,
            olhoFechado,
            mostrarSenha: false,
            usuarioLogin:{
                email: '',
                senha: ''
            }
        }
    },

    methods:{
        mostraEsconderSenha(){
            this.mostrarSenha = !this.mostrarSenha
        },

        async fazerLogin() {
            try {
                // Faz a requisição diretamente aqui
                const response = await api.post("/usuario/entrar", {
                email_usuario: this.usuarioLogin.email,
                senha_usuario: this.usuarioLogin.senha
                });

                // Salva o token no localStorage
                localStorage.setItem(TOKEN_KEY, response.data.access_token);

                // Redireciona para o dashboard
                this.$router.push("/dashboard");
            } catch (error) {
                alert("Erro no login: " + (error.response?.data.detail || error.message));
            }
        }
    }
}
</script>
<style scoped>
.corpo-login{
    width: 500px;
    height: 500px;
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

.detalhe{
    font-size: 11px;
    color: var(--cor-tema);
    text-align: start;
    text-decoration: none;
}

.detalhe-2{
    font-size: 12px;
    color: var(--cor-tema);
    text-align: center;
    text-decoration: none;
    position: absolute;
    bottom: 40px;
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