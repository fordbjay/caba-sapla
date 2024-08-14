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

    a {
        line-height: 0;
    }

    .qr-contact-btn {
        width: 150px;
        border-radius: 10px;
        padding: 10px;
        background-color: rgb(250, 247, 243);
    }

    @media screen and (max-width: 675px) {

        .qr-contact-btn {
            padding: 0px;
            width: 200px;
            border-radius: 15px;
            transition: transform 0.3s ease;
        }

        .qr-contact-btn:hover {
            transform: scale(1.05);
        }

        a img {
            width: 175px;
            border-radius: 15px;
            padding: 0;
            background-color: none;
        }
    }

</style>