<script setup>
import { inject } from 'vue';

const settings = inject('settings')
const model = defineModel()
</script>

<template>
    <div style="position: relative;">
        <textarea  v-bind="settings"  v-model="model"></textarea>
    </div>
    </input>

</template>

<style scoped>
textarea {
    min-height: 100px;
    min-width: 100%;
    max-width: 100%;
    margin-top: 12px;

    background: 0 0;
    border: 0;
    border-bottom: 1px solid #d8dbe0;
    outline: 0;
    padding: 30px 0 0 30px;
    height: 35px;
    font-size: 17px;
    color: #333;
    -webkit-appearance: none;
    -moz-appearance: none;
    text-indent: 1px;
    text-overflow: '';
}
</style>