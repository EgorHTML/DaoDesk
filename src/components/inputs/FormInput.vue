<script setup>
import StarIcon from '../icons/StarIcon.vue'
import FormInputText from './FormInputText.vue'
import FormInputSelect from './FormInputSelect.vue'
import { computed, onMounted, provide, shallowRef, ref, watchEffect } from 'vue';

const props = defineProps({
    required: {
        default: false,
        type: Boolean,
        required: false
    },
    label: {
        default: '',
        type: String,
        required: false
    },
    name: {
        default: '',
        type: String,
        required: false
    },
    type: {
        default: 'text',
        type: String,
        required: false
    },
    afterTemplate: {
        default: '',
        type: String,
        required: false
    }
})

const model = defineModel()

provide('model',model)

const inputComponent = shallowRef()
provide('settings', props)
onMounted(() => {
    const inputComponents = {
        'password': FormInputText,
        'text': FormInputText,
        'select': FormInputSelect,
    }

    inputComponent.value = inputComponents[props.type]
})


</script>

<template>
    <label for="fullname" class="form_input required">

        <span>{{ label }}</span>
        <component v-model="model" :is="inputComponent"></component>

        <StarIcon v-if="required" />
    </label>
</template>

<style>
.form_input {
    width: 100%;
    float: left;
    font-size: 13px;
    font-family: GothamProLight;
    line-height: 20px;
    color: #999;
    margin-bottom: 30px;
    position: relative;
}

.form_input span {
    padding-left: 30px;
}

.form_input input,
.form_input select {
    float: left;
    width: 100%;
    background: 0 0;
    border: 0;
    border-bottom: 1px solid #d8dbe0;
    outline: 0;
    padding: 0 0px 0 30px;
    height: 45px;
    font-size: 17px;
    color: #333;
    text-indent: 1px;
    text-overflow: '';
}

.form_input .star_icon {
    position: absolute;
    top: 40%;
    left: 5px;
}
</style>