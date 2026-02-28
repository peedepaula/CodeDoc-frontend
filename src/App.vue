<template>
    <RouterView/>
</template>

<script>
export default{
    name: "App"
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

:root{
    --cor-fundo: #f1f1f1;
    --cor-fundo-2: #ffffff;
    --cor-tema: #0c465f;
    --cor-texto: #0c465f;
    --cor-sub-texto: #909090;
}

*{
    margin: 0;
    padding: 0;
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
}

/* Scroll moderno */
.mensagem::-webkit-scrollbar {
    width: 6px;
}

.mensagem::-webkit-scrollbar-track {
    background: transparent;
}

.mensagem::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    transition: background-color 0.3s ease;
}

.mensagem::-webkit-scrollbar-thumb:hover {
    background-color: rgba(0, 0, 0, 0.4);
}
</style>
