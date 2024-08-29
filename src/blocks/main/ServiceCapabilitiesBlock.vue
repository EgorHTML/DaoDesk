<script setup>
import ServiceCardsBlock from './ServiceCardsBlock.vue';
import photo from '../../assets/images/capabilitiesImage.png'
</script>

<template>
    <div class="service_features">
        <div class="service_features__title">
            <h6>Features</h6>
        </div>
        <div class="service_capabilities">
            <div class="capabilities_img">
                <img :src="photo" alt="" style="max-width: 100%;">
            </div>
            <div class="description_service">
                <h5 class="description_service__title">Explore service capabilities</h5>
                <ServiceCardsBlock />
            </div>
        </div>
    </div>
</template>

<style>
.service_features {
    width: 90%;
    margin: 50px auto;
}

.description_service__title {
    margin-bottom: 20px;
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
    flex: 1 1 80%;
}
</style>