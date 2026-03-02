<template>
    <nav class="nav">
        <router-link to="/"class="logo">CodeDoc</router-link>
        <img src="@/assets/menu.png" class="menu" style="display: none;">
        <div class="botoes">
            <router-link to="/login" class="link-nav">Entrar</router-link>
            <router-link to="/registrar" class="link-nav">Registrar</router-link>
        </div>
        <!-- <nav class="nav-visivel">
            <router-link to="" class="link">Entrar</router-link>
            <router-link to="" class="link">Registrar</router-link>
        </nav> -->
    </nav>

</template>

<script>
export default{
    name: 'NavLandingPage'
}
</script>

<style scoped>
.nav{
    width: 100%;
    height: 70px;
    /* background-color: var(--cor-fundo-2); */
    border-radius: 0 0 10px 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0 20px 0 20px;
}

.logo{
    font-size: 20px;
    font-weight: 700;
    color: var(--cor-fundo-2);
    text-decoration: none;
    user-select: none;
    transition: all ease 0.3s;
}
.logo:hover{
    transform: translateY(-2px);
}

.botoes{
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
}

.link-nav{
    height: 35px;
    padding: 0 32px 0 32px;
    background: none;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 13px;
    font-weight: 400;
    color: var(--cor-fundo-2);
    text-decoration: none;
    border-radius: 100px;
    border: solid 1px var(--cor-fundo-2);
    transition: all ease 0.3s;
}

.link-nav:hover{
    transform: translateY(-2px);
}

.menu{
    height: 15px;
    width: 15px;
    cursor: pointer;
    user-select: none;
}

</style>