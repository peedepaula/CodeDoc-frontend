<template>
    <section class="corpo-perfil">
        <h3 class="titulo">Sua conta</h3>
        <div class="foto-nome-profissao">
            <div class="img">
                <img :src="usuario.foto" class="img-real" v-if="usuario.foto">
                <img src="@/assets/camera.png" class="sem-foto" v-else>
            </div>
            <div class="textos">
                <h3 class="nome">{{ nome }}</h3>
                <p class="cargo">{{ cargo }}</p>
            </div>
        </div>
        <div class="atualizar-dados">
            <div class="input-p">
                <p class="p-input">Seu nome:</p>
                <input type="text" class="input" placeholder="Digite seu nome..." v-model="usuario.nome">
            </div>

            <div class="input-p">
                <p class="p-input">Seu cargo:</p>
                <input type="text" class="input" placeholder="Digite seu cargo..." v-model="usuario.cargo">
            </div>

            <div class="input-p">
                <p class="p-input">Foto perfil:</p>
                <div class="botao-linha">
                    <img :src="usuario.foto" class="mini-foto-preview">
                    <button class="buscar" @click="$refs.fileInput.click()">Buscar</button>
                </div>
                <input type="file"
                style="display: none;"
                ref="fileInput"
                @change="handleFileUpload"
                >
            </div>
        </div>
        <button class="salvar" @click="atualizarPerfil">Salvar</button>
    </section>

</template>
<script>
import fotoPerfil from '@/assets/foto-falsa.jpg'
import api from '@/services/api';
import { mostrarPopUp } from '@/services/MostrarPopUpGlobal';

export default{
    name: 'PerfilComp',
    data(){
        return{
            usuario:{
                nome: '',
                cargo: '',
                foto: ''
            },
        }
    },
    methods:{
        async handleFileUpload(event) {
            const arquivo = event.target.files[0];
            if (arquivo) {
                this.fotoPerfilPreview = URL.createObjectURL(arquivo); // Para ver o preview na hora
                
                // Criar o formulário para enviar o arquivo
                const formData = new FormData();
                formData.append('foto', arquivo);

                try {
                    const response = await api.patch('/usuario/trocar-foto', formData, {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    });
                    // Atualiza a foto real com a URL que o back retornou
                    this.foto_usuario = response.data.url;
                    mostrarPopUp(
                        "concluido",
                        "Foto atualizada.",
                        "Foto atualizada com sucesso."
                    )
                } catch (err) {
                    console.error("Erro ao subir foto", err);
                }
            }
        },

        async buscarPerfil(){
            try{
                const { data } = await api.get(`/usuario/me`)
                this.usuario.nome = data.nome
                this.usuario.cargo = data.cargo
                this.usuario.foto = data.foto
            }
            catch(err){
                console.log(err)
            }
        },

        async atualizarPerfil(){
            try{
                await api.patch(`/usuario/atualizar-nome-cargo`, {'nome_usuario': this.usuario.nome, 'cargo_usuario': this.usuario.cargo,})
                mostrarPopUp(
                    "concluido",
                    "Perfil salvo.",
                    "Perfil salvo com sucesso."
                )
            }
            catch(err){
                console.log(err)
                mostrarPopUp(
                    "erro",
                    "Erro.",
                    "Erro ao salvar o perfil."
                )
            }
        }
    },
    mounted(){
        this.buscarPerfil()
    }
}
</script>
<style scoped>
.corpo-perfil{
    width: 100%;
    height: 520px;
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
    animation: surgir 0.3s ease;
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
    background-color: var(--cor-fundo-2);
    border: solid 1px var(--cor-tema);
    border-radius: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.img-real{
    width: 100%;
    height: 100%;
    border-radius: 100px;
    object-fit: cover;
    border: solid 1px var(--cor-tema);
}

.sem-foto{
    width: 15px;
    height: 15px;
}

.textos{
    display: flex;
    flex-direction: column;
    gap: 3px;
    margin-top: 15px;
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

.botao-linha{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
}

.mini-foto-preview{
    height: 40px;
    width: 40px;
    object-fit: cover;
    border: solid 1px var(--cor-tema);
    border-radius: 10px;
}

.buscar{
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
    align-self: flex-end;
}

.buscar:hover{
    transform: translateY(-2px);
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

@keyframes surgir {
    0%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
}

</style>