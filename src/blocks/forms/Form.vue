<script setup>
import FormInput from '../../components/inputs/FormInputFactory.vue';
import PrimaryButton from '../../components/buttons/PrimaryButton.vue';

const props = defineProps({
    fields: {
        type: Array,
        required: true
    }
})

const emit = defineEmits(['submit'])
const errors = defineModel('errors', {
    type: Array,
    default() { return [] },
    required: false
})

function submit() {
    const err = []
    props.fields.forEach(block => {
        block.forEach(field => {
            if (!field.value && field.value.value != 0 && field.required) {
                field.class = 'not-valid'
                err.push({
                    code: 'not-filled',
                    title: 'not-filled',
                    details: `Поле <strong>"${field.label}</strong> является обязательным для заполнения`
                })

            } else {
                field.class = ''
            }

        })
    })
    errors.value = err
    emit('submit')
}
</script>

<template>
    <div class="form" @keyup.enter="submit">
        <div v-for="(blockFields, index) in fields" :key="index" :class="`col${index + 1}`">
            <FormInput :style="field.class" v-for="field in blockFields" :key="field.label" v-model="field.value"
                v-bind="{ ...field }" />
        </div>

        <div :class="`col${fields.length + 1}`">
            <PrimaryButton @click="submit" type="submit" width="80%" height="60px" border-radius="70px" text="Sign Up"
                font-size="20px" />
        </div>
    </div>
</template>

<style scoped>
.form {
    margin-bottom: 50px;
}
</style>