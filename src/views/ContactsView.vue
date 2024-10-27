<script setup>
import ContactQuestionBlock from '../blocks/contacts/ContactQuestionBlock.vue';
import ContactListBlock from '../blocks/contacts/ContactListBlock.vue';

</script>

<template>
    <div class="main_container">

        <h5 class="block-title">Contacts</h5>
        <div class="contacts-block">
            <div class="question_container">
                <ContactQuestionBlock />
            </div>
            <div class="contact-list_container">
                <ContactListBlock />
            </div>
        </div>
    </div>
</template>

<style scoped>
.contacts-block{
    display: flex;
    gap: 5%;
}

.question_container{
    flex: 3 1 ;
}

.contact-list_container{
    flex: 1 1 ;
}
</style>
