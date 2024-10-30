<script setup>
import { ref } from 'vue';
import Form from '../forms/Form.vue';
import ErrorList from '../../components/alerts/ErrorList.vue';

const selectTopic = ['Product Features', 'Partnership', 'License cost - private servers', 'Integration', 'Offers']
const agents = ['1-5', '5-10', '10-15', '15-25', '25-50', '50-100', '100-250', '250+']
const formErrors = ref([])

const fields = ref(
    [
        [
            {
                label: 'Your name',
                value: '',
                required: true,
                type: 'text',
            },
            {
                label: 'Your email',
                value: '',
                required: true,
                type: 'text'
            },
            {
                label: 'Company name',
                value: '',
                required: true,
                type: 'text'
            }
        ],
        [
            {
                label: 'Your phone number',
                value: '',
                required: true,
                type: 'text'
            },
            {
                label: 'Your Telegram',
                value: '',
                required: false,
                type: 'text'
            },
            {
                label: 'Number of agents(employees)',
                value: '',
                required: true,
                type: "select",
                options: agents
            }
        ],
        [
            {
                label: 'Select the topic',
                value: '',
                required: true,
                type: "select",
                options: selectTopic
            }
        ],
        [
            {
                label: 'Question content',
                value: '',
                required: true,
                type: "textarea",
            }
        ]
    ])
</script>

<template>
    <ErrorList :errors="formErrors"/>
    <Form :fields="fields" v-model:errors="formErrors"/>
</template>

<style>
.form {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0 100px;
    margin-bottom: 30px;
}

.col4 {
    grid-column-start: span 2;
}

.col3{
    grid-column-start: span 2;
}

.col5 {
    display: flex;
    justify-content: center;
    grid-column-start: 2;
}
</style>