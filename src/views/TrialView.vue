<script setup>
import FormInput from '../components/inputs/FormInput.vue';
import PrimaryButton from '../components/buttons/PrimaryButton.vue';
import { ref, watchEffect } from 'vue';

const model = ref('')
const copy = ref('')

const agents = ['1-5', '5-10', '10-15', '15-25', '25-50', '50-100', '100-250', '250+']

watchEffect(() => {
    model.value = copy.value
})
</script>

<template>
    <div class="main_container trail_form">
        <h4>Try it for free!</h4>
        <h6>14-day trial period. <RouterLink to="/#price"><span>Get pricing</span></RouterLink>
        </h6>
        <div class="trial_fields">
            <form @submit.prevent>
                <div class="col1">
                    <FormInput label="Your name" required type="text" />
                    <FormInput label="Your email" required type="text" />
                    <FormInput v-model="copy" label="Company name" required type="text" />
                </div>
                <div class="col2">
                    <FormInput label="Your phone number" required type="text" />
                    <FormInput label="Your Telegram" type="text" />
                    <FormInput label="Number of agents(employees)" required type="select" :options="agents" />
                </div>
                <div class="col3">
                    <FormInput v-model="model" afterTemplate=".daodesk.ai" label="Domain address" required
                        type="text" />
                </div>
                <div class="col4">
                    <FormInput label="Password" required type="password" />
                </div>
                <div class="col5">
                    <FormInput label="Promo code" type="text" />
                </div>
                <div class="col6">
                    <PrimaryButton type="submit" width="80%" height="60px" border-radius="70px" text="Sign Up" font-size="20px" />
                </div>
            </form>
        </div>
    </div>
</template>

<style scoped>
.trail_form h4,
.trail_form h6 {
    text-align: center;
    margin: 20px 0;
}

.trail_form h6 span {
    text-decoration: underline;
    cursor: pointer;
}

.trail_form h4 {
    font-weight: 400;
}

.trail_form form {
    margin-bottom: 50px;
}

.trial_fields form {
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