<template>
    <section class="corpo-configuracao">
        <h3 class="titulo">Configuração</h3>
        <div class="dados">
            <div class="linha">
                <div class="input-p">
                    <p class="p-input">E-mail:</p>
                    <input type="text" class="input" placeholder="Seu E-mail.." v-model="usuario.email" disabled>
                </div>
                <button class="botao" @click="$emit('mostrar-trocar-email')">Trocar E-mail</button>
            </div>
            <!-- <hr> -->
            <div class="linha">
                <div class="input-p">
                    <p class="p-input">Senha:</p>
                    <input type="password" class="input" placeholder="Sua senha..." v-model="usuario.senha" disabled>
                </div>
                <button class="botao" @click="$emit('mostrar-trocar-senha')">Trocar senha</button>
            </div>
            <hr>
            <div class="linha">
                <div class="input-p">
                    <p class="p-input">Sair da conta:</p>
                </div>
                <button class="botao" id="sair" @click="$emit('mostrar-conta-sair')">Sair</button>
            </div>
            <hr>
            <div class="linha">
                <div class="input-p">
                    <p class="p-input">Apagar conta:</p>
                </div>
                <button class="botao" id="apagar" @click="$emit('mostrar-conta-apagar')">Apagar</button>
            </div>
        </div>
    </section>

</template>
<script>
import api from '@/services/api';

export default{
    name: 'ConfiguracaoComp',
    data(){
        return{
            usuario:{
                email: '',
                senha: '**********'
            }
        }
    },
    methods:{
        async buscarPerfil(){
            try{
                const { data } = await api.get(`/usuario/me`)
                this.usuario.email = data.email_usuario
            }
            catch(err){
                console.log(err)
            }
        }
    },

    mounted(){
        this.buscarPerfil()
    }
}
</script>
<style scoped>
.corpo-configuracao{
    width: 100%;
    height: 550px;
    background-color: var(--cor-fundo-2);
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    box-sizing: border-box;
    padding: 20px;
    border: solid 1px var(--cor-borda);
    animation: surgir 0.3s ease;
}

.titulo{
    font-size: 14px;
    font-weight: 400;
    color: var(--cor-tema);
    position: absolute;
    top: 15px;
}

.dados{
    width: 100%;
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    gap: 15px;
}

hr{
    border: solid 1px var(--cor-borda);
    width: 100%;
}

.linha{
    width: 100%;
    display: flex;
    align-self: flex-start;
    flex-direction: column;
    gap: 5px;
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

#apagar{
    background-color: var(--cor-erro);
}

#sair{
    background-color: var(--cor-erro);
}

.botao{
    height: 35px;
    padding: 0 32px 0 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: flex-end;
    border: none;
    border-radius: 100px;
    background-color: var(--cor-tema);
    color: var(--cor-fundo-2);
    font-size: 12px;
    font-weight: 400;
    cursor: pointer;
    transition: all ease 0.3s;
}

.botao:hover{
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

@media (min-width: 768px) and (max-width: 1024px) {
    .corpo-configuracao{
        margin-top: 50px;
    }
}

@media (max-width: 600px) {
    .corpo-configuracao{
        margin-top: 50px;
    }
}

</style>