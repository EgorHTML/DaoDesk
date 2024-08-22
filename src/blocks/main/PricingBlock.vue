<script setup>
import PrimaryButton from '../../components/buttons/PrimaryButton.vue'
import SwitchInput from '../../components/inputs/SwitchInput.vue';
</script>

<template>
    <div class="pricing_platform">
        <h2>Cost of the platform</h2>
        <p>We believe that quality products should be available to every business</p>
        <div class="card_price">
            <h2>Online version</h2>
            <SwitchInput from="Annual fee" to="Monthly fee" />
            <div class="price_selection">
                <span class="card_cost"> €20 </span>
                <div class="cost_description">
                    <p>Per agent per month</p>
                    <p>(billed annually)</p>
                </div>
            </div>
            <PrimaryButton text="Free trial" />
            <div class="pricing_platform__description">
                <ul>
                    <li>Connecting email and telephony</li>
                    <li>Connecting email and telephony (Facebook, Instagram, VK)
                    </li>
                    <li>Connecting messengers (Whatsapp, Viber, Telegram, Messenger)</li>
                    <li>Unlimited number of requests</li>
                    <li>History of all contacts with the client
                    </li>
                    <li>Automations and rules
                    </li>
                    <li>Reply templates</li>
                    <li>Reports and analytics</li>
                    <li>Knowledge base for agents and customers</li>
                    <li>Over 100 integrations + API</li>
                    <li>Help from our experts</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style>
.pricing_platform {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.pricing_platform__description li {
    position: relative;
}

.pricing_platform__description li::before {
    content: "";
    position: absolute;
    width: 11px;
    height: 5px;
    border-left: 2px solid rgb(154, 68, 151);
    border-bottom: 2px solid rgb(154, 68, 151);
    transform: rotate(-45deg);
    left: -17px;
    top: 5px;
}
</style>