<template>
    <div class="star_icon">
        <div class="star_icon line"></div>
        <div class="star_icon line"></div>
        <div class="star_icon line"></div>
    </div>
</template>

<style>
.star_icon {
    width: 11px;
    height: 11px;
    position: relative;
    font-size: 10px;
    color: #b8b8b8;
}

.star_icon.line {
    position: absolute;
    width: 3px;
    background-color: #b8b8b8;
    border-radius: 1px;
}

.star_icon.line:nth-child(1) {
    width: 2.5px;
}

.star_icon.line:nth-child(2) {
    transform: rotate(-60deg);
}

.star_icon.line:nth-child(3) {
    transform: rotate(-120deg);
}
</style>