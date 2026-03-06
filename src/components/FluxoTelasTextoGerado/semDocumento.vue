<template>
        <section class="corpo-diagrama">
            <img src="@/assets/github.png" class="github-logo">
            <div class="conteudo">
                <h3 class="titulo">Digite o link do seu repositório do github!</h3>
                <p class="descricao">Ao você digitar o link do seu repositório, automaticamente irá gerar a documentação do projeto.</p>
                <p class="detalhe">(Lembrando seu repositório deve ser publico).</p>
            </div>
        </section>
</template>
<script>
export default{
    name: 'semDocumento'
}
</script>

<style scoped>
.corpo-diagrama{
    width: 100%;
    height: auto;
    border-radius: 20px;
    background-color: var(--cor-fundo-2);
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    box-sizing: border-box;
    padding: 40px;
    border: solid 1px var(--cor-borda);
    padding-bottom: 60px;
    animation: surgir 0.3s ease;
    overflow: hidden;
    background-image: radial-gradient(#0c465f43 1px, transparent 1px);
    background-size: 30px 30px;
}

.github-logo{
    position: absolute;
    right: 10px;
    bottom: 10px;
    width: 80px;
    height: auto;
    animation: flutuar 3s ease-in-out infinite;
}

.conteudo{
    width: 100%;
    height: auto;
    min-height: 300px;
    display: flex;
    flex-direction: column;
    gap: 3px;
}

.titulo{
    font-size: 40px;
    font-weight: 700;
    color: var(--cor-tema);
    text-decoration: underline;
    width: 100%;
    border: none;
    resize: none;
    overflow: hidden;
    background: none;
}

.descricao{
    font-size: 14px;
    font-weight: 500;
    color: var(--cor-tema);
    border: none;
    resize: none;
    overflow: hidden;
    background: none;
    margin-top: 10px;
}

.detalhe{
    font-size: 12px;
    font-weight: 400;
    color: var(--cor-tema);
}

@keyframes flutuar {
    0% {
        transform: translateY(0px);
    }
    50% {
        transform: translateY(-6px);
    }
    100% {
        transform: translateY(0px);
    }
}

</style>