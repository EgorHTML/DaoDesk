<script setup>
const props = defineProps({
    errors: {
        type: Array,
        required: false,
        default() { return [] }
    }
})
// "errors": [
//     {
//       "code": "e-404",
//       "title": "Not found",
//       "details": "Ticket with id {9} does not exist"
//     }
//   ]
</script>

<template>
    <div class="alert alert-danger" v-if="errors.length">
        <ul class="error-list">
            <li v-for="error in errors" :key="error.details" v-html="error.details">

            </li>
        </ul>
    </div>
</template>

<style scoped>
.alert-danger {
    color: #842029;
    background-color: #f8d7da;
    border-color: #f5c2c7;
    border-radius: .25rem;
}

.error-list {
    padding: 1rem;
    padding-left: 28px;
}
</style>