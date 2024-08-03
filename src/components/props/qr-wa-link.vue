<template>

    <a href="https://wa.me/qr/JPECI3TMBSQMJ1" target="_blank"> 
       <img class="qr-contact-btn" :src="imageSrc" alt="wa-contact-qrcode.png">
    </a>

</template>

<script>

    export default {
        props: {
            desiredWidth: {
                type: Number,
                required: true,
            },
        },
        data() {
            return {
                windowWidth: window.innerWidth
            };
        },
        computed: {
            imageSrc() {
                return this.windowWidth <= this.desiredWidth ? '/contact/WhatsAppButtonGreenLarge.png' : '/contact/wa-contact-qrcode.png';
            }
        },
        mounted() {
            window.addEventListener('resize', this.handleResize);
        },
        beforeDestroy() {
            window.removeEventListener('resize', this.handleResize);
        },
        methods: {
            handleResize() {
                this.windowWidth = window.innerWidth;
            }
        }
    }

</script>

<style scoped>

    a img {
        width: 175px;
        border-radius: 10px;
        padding: 10px;
        background-color: rgb(250, 247, 243);
        box-sizing: border-box;
    }

    .qr-contact-btn {
        width: 175px;
        border-radius: 10px;
        padding: 10px;
        background-color: rgb(250, 247, 243);
    }

    @media screen and (max-width: 675px) {

        .qr-contact-btn {
            margin-bottom: 20px;
            padding: 0px;
            width: 200px;
            border-radius: 15px;
        }

        a img {
            width: 175px;
            border-radius: 15px;
            padding: 0;
            margin-top: 10px;
            background-color: none;
        }
    }

</style>