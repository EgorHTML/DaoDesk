<script setup>
import ServiceCardsBlock from './ServiceCardsBlock.vue';
import photo from '../../assets/images/features-desktop.avif'
</script>

<template>
    <div class="service_features">
        <div class="service_features__title">
            <h2>Features</h2>
        </div>
        <div class="service_capabilities">
            <div class="capabilities_img">
                <img :src="photo" alt="">
            </div>
            <div class="description_service">
                <h2 class="description_service__title">Explore service capabilities</h2>
                <ServiceCardsBlock />
            </div>
        </div>
    </div>
</template>

<style>
.service_features {
    width: 90%;
    margin: 0 auto;
}

.description_service__title {
    font-size: 60px;
    width: 100%;
}

.service_features__title {
    border-bottom: 1px solid rgb(203, 195, 180);
}

.service_capabilities {
    width: 100%;
    margin-top: 40px;
    display: flex;
    gap: 10%;
}

.description_service {
    flex: 1 1;
}
</style>