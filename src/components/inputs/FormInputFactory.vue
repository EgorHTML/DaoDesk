<script setup>
import StarIcon from '../icons/StarIcon.vue'
import { onMounted, provide, shallowRef } from 'vue'

const FormInputText = () => import('./FormInputText.vue')
const FormInputSelect = () => import('./FormInputSelect.vue')
const FormInputTextarea = () => import('./FormInputTextarea.vue')

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
    },
    options: {
        default() {
            return []
        },
        required: false,
        type: Array
    }
})

const model = defineModel()
const inputComponent = shallowRef()

provide('model', model)
provide('settings', props)

onMounted(async () => {
    const inputComponents = {
        'password': FormInputText,
        'text': FormInputText,
        'select': FormInputSelect,
        'textarea': FormInputTextarea
    }

    inputComponent.value = (await inputComponents[props.type ?? 'text']()).default
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
.form_input.not-valid input,
.form_input.not-valid select,
.form_input.not-valid textarea {
    border-color: #c53636;
}

.form_input.not-valid .star_icon.line {
    background-color: red;
}

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