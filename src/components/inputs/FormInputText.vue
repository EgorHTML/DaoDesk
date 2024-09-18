<script setup>
defineProps(['name', 'type'])
</script>

<template>
    <input :type="type" :name="name">
</template>

<style></style>