<script setup>
import Link from '../../components/buttons/Link.vue';
</script>

<template>
    <div class="contact-list">
        <div class="contacts">
            <span>Support and technical issues</span>
            <ul>
                <li>
                    <a href="mailto:support@daodesk.ai" target="_blank"> <span class="icon-span"><i
                                class="hdes-mail"></i></span>
                        support@daodesk.ai</a>
                </li>
                <li>
                    <a href="https://t.me/daodesk_bot" target="_blank">
                        <span class="icon-span"><i class="hdes-telegram"></i></span>
                        Telegram
                    </a>
                </li>
            </ul>
        </div>

        <div class="contacts">
            <span>Registration details</span>
            <ul>
                <li>EddySoftGlobal OU</li>
                <li>Harju maakond, Tallinn, Lasnamäe linnaosa, Pae tn 25-47, 11414 Estonia</li>
                <li>Reg.nr.: 14082438</li>
                <li>VAT: EE102769414</li>
                <li>IBAN: BE27 9671 6562 8573</li>
                <li>SWIFT/BIC: TRWIBEB1XXX</li>
                <li>Bank name: TransferWise Europe SA</li>
                <li>Bank address: Avenue Louise 54, Room S52, Brussels, 1050, Belgium</li>
                <li>
                    <Link to="/public-offer" class="offerta">Public offer</Link>
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
a{
    color: black
}

.hdes-telegram:before {
    content: "\e916";
}

.hdes-mail:before {
    content: "\e90f";
}

.contact-list ul li .icon-span {
    display: inline-block;
    background: #fff;
    height: 35px;
    width: 35px;
    -webkit-border-radius: 30px;
    -moz-border-radius: 30px;
    border-radius: 30px;
    -webkit-box-shadow: 0 0 30px 0 rgb(0 0 0 / 10%);
    -moz-box-shadow: 0 0 30px 0 rgba(0, 0, 0, .1);
    box-shadow: 0 0 30px 0 rgb(0 0 0 / 10%);
    line-height: 35px;
    text-align: center;
    margin-right: 5px;
}

.contact-list i {
    font-size: 20px;
    color: #141414;
    font-weight: 400;
    position: relative;
    top: 4px;
}

.contact-list {
    width: 100%;
    text-align: left;
    padding: 30px 40px 0px 20px;
    background: #f5fafb;
    height: 100%;
}

.contact-list ul {
    padding: 0;
    margin: 10px 0 25px;
    width: 100%;
}

.contact-list ul li {
    list-style: none;
    padding: 5px 0 5px 30px;
    line-height: 30px;
    width: 100%;
}
</style>