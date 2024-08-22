<script setup>
import { ref } from 'vue';

defineProps({
    from: String,
    to: String
})

const switched = ref(false)
</script>

<template>
    <div class="switch_block">
        <span>{{ from }}</span>
        <div class="switch" :class="switched ? 'switch-on' : ''" @click="switched = !switched">

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
    background-color: rgb(154, 68, 151);
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
    left: 31px;
    top: 2px;
}
</style>