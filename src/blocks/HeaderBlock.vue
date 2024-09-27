<script setup>
import DaoDeskLogo from '../components/logo/DaoDeskLogo.vue';
import PrimaryButton from '../components/buttons/PrimaryButton.vue';
</script>

<template>
    <div class="header_container">
        <header class="main_header">
            <div class="logo">
                <RouterLink to="/">
                    <DaoDeskLogo />
                </RouterLink>
            </div>
            <nav>
                <ul class="main_header__navigation">
                    <li>
                        <RouterLink to="/about"><span>About us</span></RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/#price"><span>Pricing</span></RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/trial"><span>Demo</span></RouterLink>
                    </li>
                </ul>
            </nav>
            <div>
                <ul class="main_header__buttons">
                    <li>
                        <PrimaryButton text="Free trial" redirect="/trial" />
                    </li>
                    <li>
                        <PrimaryButton text="Buy now" fromBorderColor="#000" fromBgColor="#fff" fromFontColor="#000" />
                    </li>
                </ul>
            </div>
        </header>
    </div>
</template>

<style>
.main_header__navigation,
.main_header__buttons,
.main_header {
    display: flex;
}

.header_container {
    padding-bottom: 90px;
}

.main_header {
    width: 100%;
    align-items: center;
    font-size: 20px;
    justify-content: space-around;
    height: 80px;
    border-bottom: 1px solid rgba(202, 194, 178, 0.85);
    position: fixed;
    background: rgb(254, 250, 242);
    z-index: 1000;
}

.main_header nav {
    height: 100%;
}

.main_header nav ul {
    gap: 100px;
}

.main_header__navigation {
    height: 100%;
    gap: 30px;
    margin-left: 50px;
    margin-right: 50px;
    align-items: center;
}

.main_header__navigation li,
.main_header__navigation a {
    height: 100%;
    display: flex;
    align-items: center;
    position: relative;
}

.main_header__navigation li span::after {
    content: "";
    height: 3px;
    background: var(--main-bg-elements-color);
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