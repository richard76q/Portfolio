<template>
    <div class="app">
        <NavBar></NavBar>
        <RouterView></RouterView>
    </div>
</template>

<script>
import NavBar from './components/UI/NavBar.vue';

    export default {
    components: {
        NavBar
    }
}
</script>

<style>
*, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.app {
    padding: 20px;
}
</style>