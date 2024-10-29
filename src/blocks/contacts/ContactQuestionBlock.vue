<script setup>
import FormInput from '../../components/inputs/FormInput.vue';
import PrimaryButton from '../../components/buttons/PrimaryButton.vue';

const selectTopic = ['Product Features', 'Partnership', 'License cost - private servers', 'Integration', 'Offers']
const agents = ['1-5','5-10','10-15','15-25','25-50','50-100','100-250','250+']
</script>

<template>
   <form class="question_form" @submit.prevent>
            <div class="col1">
                <FormInput label="Your name" required type="text" />
                <FormInput label="Your email" required type="text" />
                <FormInput label="Company name" required type="text" />
            </div>
            <div class="col2">
                <FormInput label="Your phone number" required type="text" />
                <FormInput label="Your Telegram" type="text" />
                <FormInput label="Number of agents(employees)"  required type="select" :options="agents"/>
            </div>
            <div class="col3">
                <FormInput label="Select the topic" required type="select" :options="selectTopic"/>
            </div>
            <div class="col4">
                <FormInput label="Question content" required type="textarea"/>
            </div>
            <div class="col5">
                <PrimaryButton width="80%" height="60px" border-radius="70px" text="Submit a question"
                    font-size="20px" />
            </div>
        </form>
</template>

<style scoped>
.question_form {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0 100px;
    margin-bottom: 30px;
}

.col3 {
    grid-column-start: span 2;
}

.col4 {
    grid-column-start: span 2;
}

.col5 {
    display: flex;
    justify-content: center;
    grid-column-start: 2;
}
</style>