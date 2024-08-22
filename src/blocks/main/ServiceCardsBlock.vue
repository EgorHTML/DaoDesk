<script setup>
import CapabilitiesCardComponent from '../../components/main/CapabilitiesCardComponent.vue'
import MessageIcon from '../../components/icons/MessageIcon.vue';

const cards = [
    {
        title: 'Messaging',
        description: 'Personalize conversations across channels.',
        icon: MessageIcon
    }
]
</script>

<template>
    <div class="service_cards">

        <CapabilitiesCardComponent :icon="MessageIcon" title="Messaging"
            description="Personalize conversations across channels." />
    </div>
</template>