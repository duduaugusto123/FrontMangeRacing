<script setup lang="ts">
;
function getLocalStorageItem(key: string): boolean {
    const value = localStorage.getItem(key);
    return value === 'true';
}

const logado = getLocalStorageItem('logado');
const gerenciador = getLocalStorageItem('gerenciador');

const routes = {
    home: '/',
    motors: '/motors',
    cart: '/realcart',
    aproveCart: '/aprovecart',
    login: '/login',
};
</script>

<template>
    <header class="flex flex-row align-items-center justify-content-start">
        <div class="divlogo">
            <svg
                width="75"
                height="75"
                viewBox="0 0 500 500"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
            >
                <rect width="500" height="500" fill="url(#pattern0_1_3)" />
                <defs>
                    <pattern
                        id="pattern0_1_3"
                        patternContentUnits="objectBoundingBox"
                        width="1"
                        height="1"
                    >
                        <use xlink:href="#image0_1_3" transform="scale(0.002)" />
                    </pattern>
                </defs>
            </svg>
        </div>

        <nav class="navv ml-5">
            <RouterLink class="m-4" :to="routes.home" aria-label="Go to home page">Home</RouterLink>
            <RouterLink class="m-4" :to="routes.motors" aria-label="Explore motors">Motors</RouterLink>
            <RouterLink
                v-if="logado"
                class="m-4"
                :to="routes.cart"
                aria-label="Access your cart"
            >
                Cart
            </RouterLink>
            <RouterLink
                v-if="gerenciador"
                class="m-4"
                :to="routes.aproveCart"
                aria-label="Manage cart approvals"
            >
                Aprove Cart
            </RouterLink>
            <RouterLink class="m-4" :to="routes.login" aria-label="Login or logout">
                Login/Logout
            </RouterLink>
        </nav>
    </header>
</template>

<style scoped lang="scss">  
$background-color: #1a374d;
$link-color: #e6e9ef;
$link-hover: #ffcc29;
$text-muted: #9fa4af;

header {
    height: 5rem;
    width: 100%;
    max-width: 100%;
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    flex-direction: row;
    background: linear-gradient(90deg, $background-color, darken($background-color, 10%));
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    align-items: center;
    justify-content: center;
    z-index: 5;

    .divlogo {
        display: flex;
        position: relative;
        margin-left: 2rem;
    }

    a {
        text-decoration: none;
        font-size: 1.5rem;
        color: $link-color;
        transition: color 0.3s ease, border-bottom 0.3s ease;

        &:hover {
            color: $link-hover;
            border-bottom: 2px solid $link-hover;
        }
    }

    .router-link-exact-active {
        font-weight: bold;
        color: $link-hover;
    }
}

.navv {
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    color: $text-muted;
}
</style>
