<script setup>
import { inject } from 'vue';

const settings = inject('settings')

</script>

<template>
    <select :required="settings.required" class="" :name="settings.name">
        <option value="" selected="selected"></option>
        <option :value="i" v-for="(option,i) in settings.options">{{ option }}</option>
    </select>

</template>

<style></style>