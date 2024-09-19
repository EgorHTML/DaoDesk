<script setup>
import FormInput from '../components/inputs/FormInput.vue';
import PrimaryButton from '../components/buttons/PrimaryButton.vue';
</script>

<template>
    <main>
        <div class="main_container trail_form">
            <h4>Try it for free!</h4>
            <h6>14-day trial period Get pricing</h6>
            <div class="trial_fields">
                <div class="div1">
                    <FormInput label="Your name" required type="text" />
                    <FormInput label="Your email" required type="text" />
                    <FormInput label="Company name" required type="text" />
                </div>
                <div class="div2">
                    <FormInput label="Your phone number" required type="text" />    
                    <FormInput label="Your Telegram" type="text" />
                    <FormInput label="Number of agents(employees)" required type="select" />
                </div>
                <div class="div3">
                    <FormInput label="Domain address" required type="text" />
                </div>
                <div class="div4">
                    <FormInput label="password" required type="password" />
                </div>
                <div class="div5">
                    <FormInput label="Promo code" type="text" />
                </div>
                <div class="div6">
                    <PrimaryButton width="100%" height="70px" border-radius="70px" text="Sign Up" font-size="22px"/>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped>
.trail_form h4,
.trail_form h6 {
    text-align: center;
    margin: 20px 0;
}

.trail_form{
    margin-bottom: 50px;
}

.trial_fields {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0 50px;
    margin: 50px 0;
}

.div3{
    grid-column-start: span 2;
}

.div6{
    grid-column-start: 2;
}
</style>