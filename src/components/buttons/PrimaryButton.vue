<script setup>
defineProps({
    text: String
})
</script>

<template>
    <button class="primary_button">
        <div style="overflow: hidden;">
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
        transform: translateY(-10px);
    }

    31% {
        transform: translateY(15px);
    }

    100% {
        transform: translateY(0);
    }
}

.primary_button {
    color: #fff;
    outline: 0;
    border: 1px solid rgb(154, 68, 151);
    border-radius: 25px;
    width: 100px;
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
    animation: ButtonTextSwitch ease 0.6s forwards;
}
</style>