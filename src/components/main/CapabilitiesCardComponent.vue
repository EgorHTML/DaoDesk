<script setup>
import { onMounted, ref, shallowRef } from 'vue';
const props = defineProps({
    title: String,
    description: String,
    icon: String
})

const svg = shallowRef()

const getSvgIcon = async (name) => {
    const module = await import(`../icons/${name}.vue`)
    return module.default
}

onMounted(async () => {
    svg.value = await getSvgIcon(props.icon)
})

</script>

<template>
    <div class="service_card">
        <div class="icon">
            <component :is="svg" width="30" height="30"></component>
        </div>
        <div class="card_body">
            <h6>{{ title }}</h6>
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
    cursor: default;
    display: flex;
    gap: 10px;
    padding: 15px;
    transition: background 0.1s ease;
    margin-bottom: 20px;
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