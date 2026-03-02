<template>
    <section class="corpo-pagina-nao-encontrada">
        <div class="textos">
            <h1 class="texto-principal">Erro 404!</h1>
            <p class="detalhe">Sinto muito mas não foi possível encontrar essa página.</p>
            <div class="botoes">
                <button class="voltar" @click="$router.back()">Voltar</button>
                <button class="recarregar" @click="recarregar">Recarregar</button>
            </div>
        </div>
        <img src="@/assets/pessoa-erro.svg" class="pessoa-erro">
    </section>
</template>
<script>
export default{
    name: 'PaginaNaoEncontradaComp',
    methods:{
        recarregar(){
            window.location.reload()
        }
    }
}
</script>
<style scoped>
.corpo-pagina-nao-encontrada{
    width: 900px;
    height: 500px;
    border-radius: 30px;
    background-color: var(--cor-fundo-2);
    margin-top: 100px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 60px 60px 30px 60px;
}

.textos{
    height: 250px;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.texto-principal{
    font-size: 50px;
    font-weight: 800;
    color: var(--cor-tema);
}

.detalhe{
    font-size: 14px;
    color: var(--cor-tema);
}

.botoes{
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    margin-top: 30px;
}

.voltar{
    padding: 0 32px 0 32px;
    height: 45px;
    font-size: 13px;
    background-color: var(--cor-tema);
    color: var(--cor-fundo-2);
    border: none;
    border-radius: 100px;
    cursor: pointer;
    transition: all ease 0.3s;
}

.voltar:hover{
    transform: translateY(-2px);
}

.recarregar{
     padding: 0 32px 0 32px;
    height: 45px;
    font-size: 13px;
    background-color: var(--cor-erro);
    color: var(--cor-fundo-2);
    border: none;
    border-radius: 100px;
    cursor: pointer;
    transition: all ease 0.3s;
}

.recarregar:hover{
    transform: translateY(-2px);
}

.pessoa-erro{
    width: auto;
    height: 250px;
}
</style>