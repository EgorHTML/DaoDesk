<script setup>
defineProps({
    text: String
})
</script>

<template>
    <button class="primary_button">
        <div class="text_container">
            <span>
                {{ text }}
            </span>
        </div>
    </button>
</template>

<style>
@keyframes ButtonTextSwitch {
    0% {
        transform: translateY(0);
    }

    30% {
        transform: translateY(-20px);
        opacity: 0;
    }

    31% {
        opacity: 1;
        transform: translateY(25px);
    }

    100% {
        transform: translateY(0);
    }
}

.text_container {
    padding: 0 10px;
    overflow: hidden;
}

.primary_button {
    cursor: pointer;
    color: #fff;
    outline: 0;
    border: 1px solid rgb(154, 68, 151);
    border-radius: 25px;
    min-width: 100px;
    height: 40px;
    background-color: rgb(154, 68, 151);

    transition: background-color 500ms cubic-bezier(0.85, 0, 0.15, 1), border 500ms cubic-bezier(0.85, 0, 0.15, 1), transform 500ms cubic-bezier(0.85, 0, 0.15, 1), height 500ms cubic-bezier(0.85, 0, 0.15, 1), opacity 500ms cubic-bezier(0.85, 0, 0.15, 1), width 500ms cubic-bezier(0.85, 0, 0.15, 1), outline 70ms cubic-bezier(0, 0, 0.5, 1);
}

.primary_button:hover {
    background-color: black;
    border-color: black;
}

.primary_button span {
    display: block;
    transition: color 500ms cubic-bezier(0.85, 0, 0.15, 1), transform 500ms cubic-bezier(0.85, 0, 0.15, 1);
}

.primary_button:hover span {
    animation: ButtonTextSwitch ease 0.4s forwards;
}
</style>