<script setup>
import { ref } from 'vue';

const props = defineProps({
    from: String,
    to: String,
    state: {
        default: false,
        required: false,
        type: Boolean
    }
})

const emit = defineEmits(['switch'])

const switched = ref(props.state)

function switchInput() {
    switched.value = !switched.value
    emit('switch', switched.value)
}
</script>

<template>
    <div class="switch_block">
        <span>{{ from }}</span>
        <div class="switch" :class="switched ? 'switch-on' : ''" @click="switchInput">

        </div>
        <span>{{ to }}</span>
    </div>
</template>

<style>
.switch_block {
    display: flex;
    align-items: center;
    gap: 10px;
}

.switch {
    width: 60px;
    height: 30px;
    border-radius: 30px;
    background-color: var(--main-bg-elements-color);
    position: relative;
    cursor: pointer;

}

.switch::before {
    content: "";
    position: absolute;
    width: 26px;
    height: 26px;
    border-radius: 50%;
    background: #fff;
    transition: all 200ms ease;
    left: 3px;
    top: 2px;
}

.switch-on::before {
    content: "";
    position: absolute;
    width: 26px;
    height: 26px;
    border-radius: 50%;
    background: #fff;
    transition: all 200ms ease;
    left: 32px;
    top: 2px;
}
</style>