<script setup>
import PrimaryButton from '../../components/buttons/PrimaryButton.vue';
import TrialImageHero from './TrialImageHero.vue';
</script>

<template>
    <div class="main_container">
        <div class="trial">
            <div class="description">
                <h2>
                    AI-first service. Catered to humans.
                </h2>

                <p>Customers and employees are more than interactions, they're human. Give them faster, more
                    personalized
                    experiences using AI trained in the art of customer service.</p>

                <div class="trial__buttons">
                    <PrimaryButton text="Start your free trial" />
                    <PrimaryButton text="View demo" />
                </div>
            </div>
            <div class="description_img">
                <TrialImageHero />
            </div>
        </div>
    </div>
</template>

<style scoped>
.trial {
    display: flex;
}

.description {
    width: 50%;
}

.trial__buttons {
    gap: 15px;
    display: flex;
}

.description_img img {
    width: 800px;
}

h2 {
    color: rgb(22, 20, 12);
    margin: 0px 0px 24px;
    font-family: Feature, Times, serif;
    font-weight: 700;
    font-size: 40px;
    line-height: calc(1em + 8px);
    letter-spacing: 0.75px;
    font-size: 68px;
}

p {
    color: rgb(22, 20, 12);
    margin: 0px 0px 12px;
    font-family: "ABC Social", Arial, sans-serif;
    font-weight: 500;
    font-size: 18px;
    line-height: calc(1em + 8px);
    letter-spacing: 0px;
}
</style>