<script setup>
import DaoDeskLogo from '../components/logo/DaoDeskLogo.vue';
import PrimaryButton from '../components/buttons/PrimaryButton.vue';
</script>

<template>
    <header class="main_header">
        <div class="logo">
            <DaoDeskLogo />
        </div>
        <nav>
            <ul class="main_header__navigation">
                <li>
                    <span>About us</span>
                </li>
                <li>
                    <span>Pricing</span>
                </li>
                <li>
                    <span>Demo</span>
                </li>
            </ul>
        </nav>
        <div>
            <ul class="main_header__buttons">
                <li>
                    <PrimaryButton text="free trial" />
                </li>
                <li>
                    <PrimaryButton text="Buy now" />
                </li>
            </ul>
        </div>
    </header>
</template>

<style>
.main_header__navigation,
.main_header__buttons,
.main_header {
    display: flex;
}

.main_header {
    align-items: center;
    font-size: 16px;
    justify-content: space-around;
    height: 100px;
    border-bottom: 1px solid rgba(202, 194, 178, 0.85);
    position: sticky;
}

.main_header nav {
    height: 100%;
}

.main_header__navigation {
    height: 100%;
    gap: 30px;
    margin-left: 50px;
    margin-right: 50px;
    align-items: center;
}

.main_header__navigation li {
    height: 100%;
    display: flex;
    align-items: center;
    position: relative;
}

.main_header__navigation li span::after {
    content: "";
    height: 3px;
    background: #000;
    bottom: 0px;
    position: absolute;
    left: 0px;
    width: 0;
    transition: all 0.25s ease;
}

.main_header__navigation li:hover span::after {
    width: 100%;
}

.logo,
.main_header__navigation,
.main_header__buttons button {
    cursor: pointer;
}

.main_header__buttons {
    gap: 15px;
}
</style>