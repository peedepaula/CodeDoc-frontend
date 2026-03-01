<template>
    <div class="corpo-barra-mensagem">
        <textarea
            ref="textarea"
            v-model="mensagem"
            class="mensagem"
            placeholder="Cole seu código ou link do repositório do github ou o arquivo zip..."
            @input="autoResize"
            rows="1"
        ></textarea>
        <button class="pegar-arquivo">
            <img src="@/assets/arquivo.png" class="icon-arquivo">
        </button>
        <button class="enviar">
            <img src="@/assets/enviar.png" class="icon-enviar">
        </button>
    </div>
</template>

<script>
export default {
    name: 'BarraDeMensagem',
    data() {
        return {
            mensagem: ''
        }
    },
    methods: {
        autoResize() {
            const el = this.$refs.textarea

            el.style.height = 'auto'
            el.style.height = Math.min(el.scrollHeight, 200) + 'px'
        }
    }
}
</script>

<style scoped>
.corpo-barra-mensagem{
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    height: auto;
    min-height: 46px;
    width: auto;
    position: fixed;
    bottom: 20px;
}

.mensagem{
    width: 500px;
    min-height: 40px;
    max-height: 200px;
    background-color: var(--cor-fundo-2);
    border: none;
    border-radius: 20px;
    box-sizing: border-box;
    padding: 12px;
    resize: none;
    overflow-y: auto;
    color: #898989;
    border: solid 1px var(--cor-borda);
    box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.046);
}

.pegar-arquivo{
    height: 40px;
    width: 40px;
    background-color: var(--cor-tema);
    border: none;
    border-radius: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all ease 0.3s;
    align-self: flex-end;
    border: solid 1px var(--cor-tema);
}

.pegar-arquivo:hover{
    transform: translateY(-2px);
}

.icon-arquivo{
    width: 15px;
    height: 15px;
    filter: brightness(0) invert(1);
}

.enviar{
    height: 40px;
    width: 40px;
    background-color: var(--cor-tema);
    border: none;
    border-radius: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all ease 0.3s;
    align-self: flex-end;
    border: solid 1px var(--cor-tema);
}

.enviar:hover{
    transform: translateY(-2px);
}

.icon-enviar{
    width: 15px;
    height: 15px;
    filter: brightness(0) invert(1);
}

</style>