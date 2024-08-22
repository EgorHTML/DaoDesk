<script setup>
const footer = {
    'Products': ['Pricing', 'Integrations', 'Sign in'],
    'Features': ['Messaging and live chat', 'AI and automation', 'Ticketing', 'Knowledge base'],
    'Company': ['About us']
}
</script>

<template>
    <footer>
        <div class="footer_container">
            <div class="footer_column" v-for="(list, title) in footer" :key="title">
                <div class="footer_title"> {{ title }} </div>
                <div class="footer_list">
                    <ul>
                        <li v-for="item in list" :key="item">{{ item }}</li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>

<style>
footer {
    background: rgb(22, 20, 12);
    color: rgb(246, 240, 230);

}

.footer_title {
    font-size: 20px;
    margin-bottom: 10px;
    font-weight: bold;
}

.footer_container {
    display: flex;
    justify-content: center;
    padding: 30px;
    gap: 10%;
}

.footer_list li {
    margin: 16px 0;
    cursor: pointer;
}

.footer_list li:hover {
    text-decoration: underline;
}
</style>