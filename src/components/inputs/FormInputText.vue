<script setup>
import { inject } from 'vue';

const settings = inject('settings')
</script>

<template>
    <input :type="settings?.type" :name="settings?.name">
</template>

<style></style>