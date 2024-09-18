<script setup>
import { useRouter } from 'vue-router';

const router = useRouter()

const props = defineProps({
    text: {
        type: String,
        required: true
    },
    fromBorderColor: {
        default: '#1A3438',
        type: String,
        required: false
    },
    toBorderColor: {
        default: '#000',
        type: String,
        required: false
    },
    fromBgColor: {
        default: '#1A3438',
        type: String,
        required: false
    },
    toBgColor: {
        default: '#000',
        type: String,
        required: false
    },
    fromFontColor: {
        default: '#fff',
        type: String,
        required: false
    },
    toFontColor: {
        default: '#fff',
        type: String,
        required: false
    },
    redirect: {
        default: '/',
        type: String,
        required: false
    },
    width: {
        default: '100px',
        type: String,
        required: false
    },
    height: {
        default: '50px',
        type: String,
        required: false
    },
    borderRadius: {
        default: '15px',
        type: String,
        required: false
    }
})

const style = {
    '--from-border-color': props.fromBorderColor,
    '--to-border-color': props.toBorderColor,
    '--from-bg-color': props.fromBgColor,
    '--to-bg-color': props.toBgColor,
    '--from-font-color': props.fromFontColor,
    '--to-font-color': props.toFontColor,
    '--button-width-min': props.width,
    '--button-height': props.height,
    '--button-border-radius': props.borderRadius
}

function redirect() {
    router.push(props.redirect)
}
</script>

<template>
    <button class="primary_button" :style="style" @click="redirect">
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
    padding: 0 20px;
    overflow: hidden;
}

.primary_button {
    font-weight: bold;
    cursor: pointer;
    color: var(--from-font-color);
    outline: 0;
    border: 1px solid var(--from-border-color);
    border-radius: var(--button-border-radius);
    min-width: var(--button-width-min);
    height: var(--button-height);
    background-color: var(--from-bg-color);

    transition: background-color 500ms cubic-bezier(0.85, 0, 0.15, 1), border 500ms cubic-bezier(0.85, 0, 0.15, 1), transform 500ms cubic-bezier(0.85, 0, 0.15, 1), height 500ms cubic-bezier(0.85, 0, 0.15, 1), opacity 500ms cubic-bezier(0.85, 0, 0.15, 1), width 500ms cubic-bezier(0.85, 0, 0.15, 1), outline 70ms cubic-bezier(0, 0, 0.5, 1);
}

.primary_button:hover {
    color: var(--to-font-color);
    background-color: var(--to-bg-color);
    border-color: var(--to-border-color);
}

.primary_button span {
    display: block;
    transition: color 500ms cubic-bezier(0.85, 0, 0.15, 1), transform 500ms cubic-bezier(0.85, 0, 0.15, 1);
}

.primary_button:hover span {
    animation: ButtonTextSwitch ease 0.4s forwards;
}
</style>