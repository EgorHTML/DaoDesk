<script setup>
import { computed, ref } from 'vue';
import PrimaryButton from '../../components/buttons/PrimaryButton.vue'
import SwitchInput from '../../components/inputs/SwitchInput.vue';

const stateSwitch = ref(false)

function switchPrice(value) {
    stateSwitch.value = value
}

const priceDescription = computed(() => {
    if (stateSwitch.value)
        return { price: 25, text: 'billed monthly' }
    return { price: 20, text: 'billed annually' }
})
</script>

<template>
    <div class="pricing_platform">
        <div class="pricing_platform__title">
            <h2>Cost of the platform</h2>
            <p>We believe that quality products should be available to every business</p>
        </div>
        <div class="card_price">
            <h2>Online version</h2>
            <SwitchInput class="swtch_button" from="Annual fee" to="Monthly fee" :state="stateSwitch"
                @switch="switchPrice" />
            <div class="price_selection">
                <span class="card_cost"> €{{ priceDescription.price }} </span>
                <div class="cost_description">
                    <p>Per agent per month</p>
                    <p>({{ priceDescription.text }})</p>
                </div>
            </div>
            <PrimaryButton style="align-self: center; font-size: 18px; padding: 10px;" text="Free trial" />
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
.cost_description p {
    margin-bottom: 5px;
}

.card_cost {
    font-size: 60px;
    font-family: GothamProBold;
    line-height: 60px;
    float: right;
    text-align: right;
}

.swtch_button {
    font-weight: 700;
    margin-bottom: 20px;
    align-self: center;
}

.price_selection {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
}

.card_price {
    display: flex;
    flex-direction: column;
}

.card_price h2 {
    text-align: center;
    font-size: 30px;
    margin-bottom: 20px;
}

.pricing_platform {
    margin: 100px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.pricing_platform__title {
    text-align: center;
    margin-bottom: 50px;
    font-weight: 700;
}

.pricing_platform__title h2 {
    font-size: 40px;
}

.pricing_platform__title p {
    font-size: 20px;
}

.pricing_platform__description {
    margin-top: 30px;
}

.pricing_platform__description li {
    position: relative;
    margin-bottom: 15px;
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
    top: 3px;
}
</style>