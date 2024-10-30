<script setup>
import Form from '../forms/Form.vue';
import { ref, watchEffect } from 'vue';

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
                value: ref(''),
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
                required: true,
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
                label: 'Domain address',
                value: '',
                required: true,
                type: "text",
                afterTemplate: '.daodesk.ai'
            }
        ],
        [
            {
                label: 'Password',
                value: '',
                required: true,
                type: "password",
            }
        ],
        [
            {
                label: 'Promo code',
                value: '',
                required: false,
                type: "text",
            }
        ]
    ])

watchEffect(() => {
    const companyName = fields.value[0][2].value
    const domainAddress = fields.value[2][0]

    domainAddress.value = companyName
})

watchEffect(()=>{
    console.log(formErrors.value, 'formErrors');
})

function submit() {
    console.log(fields.value, 'trial');
    
}
</script>

<template>
    <Form :fields="fields" @submit="submit" v-model:errors="formErrors"/>
</template>

<style>
.not-valid {
    background-color: brown !important;
}

.form {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0 100px;
    margin: 50px 0;
}

.col3 {
    grid-column-start: span 2;
}

.col6 {
    display: flex;
    justify-content: center;
    grid-column-start: 2;
}
</style>