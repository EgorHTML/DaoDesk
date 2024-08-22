<script setup>
defineProps({
    title: String,
    description: String
})
</script>

<template>
    <div class="service_card">
        <h2>{{ title }}</h2>
        <div class="description_card">
            <p>
                {{ description }}
            </p>
        </div>
    </div>
</template>