<script setup>
import CapabilitiesCardComponent from '../../components/main/CapabilitiesCardComponent.vue'

const leftCards = [
    {
        title: 'Messaging',
        description: 'Personalize conversations across channels.',
        icon: 'MessageIcon'
    },
    {
        title: 'Help center',
        description: 'Let customers serve themselves.',
        icon: 'HelpCenterIcon'
    },
    {
        title: 'Ticketing',
        description: 'Track, organize, and solve all your tickets.',
        icon: 'TicketingIcon'
    },
    {
        title: 'Voice',
        description: 'Speak directly to customers.',
        icon: 'VoiceIcon'
    },
    {
        title: 'Routing and intelligence',
        description: 'Send tickets to the best agent for the job.',
        icon: 'RoutingIcon'
    },
    {
        title: 'SLA',
        description: 'Optimize agent staffing and performance.',
        icon: 'WorkforceIcon'
    },
    {
        title: 'Platform',
        description: 'Use plugins to modify DaoDesk to meet your needs.',
        icon: 'PlatformIcon'
    },
]

const rightCards = [
    {
        title: 'Automation and bot constructor',
        description: 'Solve customer issues faster with automation.',
        icon: 'AIIcon'
    },
    {
        title: 'AI copilot',
        description: 'Automate interactions with AI-copilot.',
        icon: 'AgentIcon'
    },
    {
        title: 'Agent workspace',
        description: 'See your customer data in one place.',
        icon: 'WorkspaceIcon'
    },
    {
        title: 'Data privacy and protection',
        description: 'Keep customers safe.',
        icon: 'DataIcon'
    },
    {
        title: 'Analytics and reporting',
        description: 'Turn data into useful insights.',
        icon: 'AnalyticsIcon'
    },
    {
        title: 'Quality assurance',
        description: 'Improve the quality of all interactions.',
        icon: 'QualityIcon'
    },
    {
        title: 'Integrations',
        description: 'Bring your daily systems into DaoDesk.',
        icon: 'IntegrationIcon'
    }
]

</script>

<template>
    <div class="service_cards">
        <div class="service_cards__left">
            <CapabilitiesCardComponent v-for="card of leftCards" :icon="card.icon" :title="card.title"
                :description="card.description" :key="card.title" />
        </div>
        <div class="service_cards__right">
            <CapabilitiesCardComponent v-for="card of rightCards" :icon="card.icon" :title="card.title"
                :description="card.description" :key="card.title" />
        </div>

    </div>
</template>

<style>
.service_cards {
    display: flex;
}

.service_cards__left {
    flex: 1 1;
}

.service_cards__right {
    flex: 1 1;
}
</style>