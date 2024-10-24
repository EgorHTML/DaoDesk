<script setup>
import { inject, ref, watchEffect } from 'vue';

const settings = inject('settings')
const model = defineModel()

const afterTemplate = settings.afterTemplate

const input = ref()
const template = ref()

watchEffect(() => {
    if (model.value) {
        template.value = `${model.value}${afterTemplate}`
    } else {
        template.value = ''
    }
})
</script>

<template>
    <div style="position: relative;">
        <textarea :name="settings?.name" v-model="model"></textarea>
        <input type="textarea" v-model="template" v-if="afterTemplate"
            style="position: absolute; left: 0;z-index: -1; color: #adadad;" disabled>

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