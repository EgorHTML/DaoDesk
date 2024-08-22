<script setup>
defineProps({
    width: {
        default: '20',
        required: false,
        type: String
    },
    height: {
        default: '20',
        required: false,
        type: String
    }
})
</script>

<template>
    <svg :width="width" :height="height" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.5 1a5.5 5.5 0 1 0 0 11h3.05L13 15.842V11.4A5.5 5.5 0 0 0 10.5 1h-5Z" fill="currentColor">

        </path>
    </svg>
</template>