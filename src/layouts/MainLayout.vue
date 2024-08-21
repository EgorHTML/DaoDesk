<script setup>
import HeaderBlock from '../blocks/HeaderBlock.vue';
import FooterBlock from '../blocks/FooterBlock.vue';
</script>

<template>
    <div class="container">
        <HeaderBlock />
        <RouterView />
        <FooterBlock />
    </div>
</template>

<style>
.container {
    height: 100%;
    display: flex;
    flex-direction: column;
}

main {
    flex: 1 1;
}
</style>