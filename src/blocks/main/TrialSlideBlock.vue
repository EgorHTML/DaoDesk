<script setup>
import PrimaryButton from '../../components/buttons/PrimaryButton.vue';
import TrialImageHero from './TrialImageHero.vue';
</script>

<template>
    <div style="background: rgb(254, 250, 242);">
        <div class="main_container" style="height: 100vh; display: flex; align-items: center;">
            <div class="trial">
                <div class="description">
                    <h2>
                        DaoDesk. Support with serenity.
                    </h2>

                    <p>
                        A user-friendly helpdesk system designed to streamline support and enhance customer
                        satisfaction. It offers a seamless experience, allowing to resolve users' issues quickly and
                        efficiently through a calm and intuitive interface.
                    </p>

                    <div class="trial__buttons">
                        <PrimaryButton text="Start your free trial" />
                        <PrimaryButton text="View demo" fromBorderColor="#000" fromBgColor="#fff"
                            fromFontColor="#000" />
                    </div>
                </div>
                <div class="description_img">
                    <TrialImageHero />
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.trial {
    display: flex;
    align-items: center;
}

.description {
    width: 60%;
}

.trial__buttons {
    gap: 15px;
    display: flex;
}

.description_img img {
    font-size: 16px;
    width: 57em;
    max-width: 100%;
}

.description h2 {
    color: rgb(22, 20, 12);
    margin: 0px 0px 24px;
    font-family: Feature, Times, serif;
    font-weight: 700;
    font-size: 40px;
    line-height: calc(1em + 8px);
    letter-spacing: 0.75px;
}

.description p {
    color: rgb(22, 20, 12);
    margin: 0px 0px 12px;
    font-family: "ABC Social", Arial, sans-serif;
    font-weight: 500;
    font-size: 20px;
    line-height: calc(1em + 8px);
    letter-spacing: 0px;
}
</style>