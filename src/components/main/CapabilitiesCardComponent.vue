<script setup>
defineProps({
    title: String,
    description: String,
    icon: Object
})
</script>

<template>
    <div class="service_card">
        <div class="icon">
            <icon width="25" height="25" />
        </div>
        <div class="card_body">
            <h2>{{ title }}</h2>
            <div class="description_card">
                <p>
                    {{ description }}
                </p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.service_card {
    display: flex;
    gap: 10px;
    padding: 15px;
    transition: background 0.1s ease;
    width: 48%;
}

.service_card:hover {
    background: rgb(235, 227, 214);
}

.card_body {
    display: flex;
    flex-direction: column;
}

.description_card {
    margin-top: 4px;
}
</style>