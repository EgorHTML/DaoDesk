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
        <input :type="settings?.type" :name="settings?.name" v-model="model">
        <input type="text" v-model="template" v-if="afterTemplate"
            style="position: absolute; left: 0;z-index: -1; color: #adadad;" disabled>

    </div>
    </input>

</template>

<style></style>