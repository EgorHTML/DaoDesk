<script setup>
import Link from '../components/buttons/Link.vue';

const footer = {
    'Product': [
        {
            label: 'Pricing',
            url: '/#price'
        },
        {
            label: 'Technical support',
            url: 'https://support.daodesk.ai'
        },
        {
            label: 'Knowledge base',
            url: 'https://support.daodesk.ai/en/knowledge_base/'
        }
    ],
    'Features': [
        {
            label: 'Real-time messaging',
            url: '/realTimeMessaging'
        },
        {
            label: 'AI and automation',
            url: 'ai'
        },
        {
            label: 'Ticketing',
            url: 'tiketing'
        }
    ],
    'Company': [
        {
            label: 'About us',
            url: '/about'
        }
    ]
}

const routes = {
    'Real-time messaging': '/Real-time-messaging'
}
</script>

<template>
    <footer>
        <div class="footer_container">
            <div class="footer_column" v-for="(list, title) in footer" :key="title">
                <div class="footer_title"> {{ title }} </div>
                <div class="footer_list">
                    <ul>
                        <li v-for="item in list" :key="item.url">
                            <Link :to="item.url">{{ item.label }}</Link>
                        </li>
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

.footer_list li a {
    color: rgb(246, 240, 230);
}

.footer_list li:hover {
    text-decoration: underline;
}
</style>