<script setup>
import TrialForm from '../blocks/Trial/TrialForm.vue';
import ErrorList from '../components/alerts/ErrorList.vue';
</script>

<template>
    <div class="main_container trail_form">
        <h4>Try it for free!</h4>
        <h6>14-day trial period. <RouterLink to="/#price"><span>Get pricing</span></RouterLink>
        </h6>
        <ErrorList/>
          <TrialForm/>
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


</style>