<template>
    
    <div class="main-container">
    
        <div class="header-wrapper">
            <img id="logo" src="/cabasapla-logo-white.png" alt="logo">
            <!-- <img src="/wa-contact-qrcode.png" alt="exterior-2"> -->
            <a href="https://wa.me/qr/JPECI3TMBSQMJ1" target="_blank"> 
                <img class="qr-code" :src="imageSrc" alt="">
            </a>
            <!-- <a class="action-btn" href="https://wa.me/qr/JPECI3TMBSQMJ1" target="_blank">Contact Us Today!</a> -->
        </div>
    
        <p class="tag-line-container">Your Next Home <br> in the Riviera Maya</p>  
        
    </div>
        
</template>
    
<script>
export default {
  data() {
    return {
      windowWidth: window.innerWidth
    };
  },
  computed: {
    imageSrc() {
      return this.windowWidth <= 675 ? '/WhatsAppButtonGreenLarge.png' : '/wa-contact-qrcode.png';
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
};
</script>

<style scoped>

    .main-container {
        background-image: url(/exterior.jpg);
        height: 100vh;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .header-wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 50px;
    }

    #logo {
        width: 300px;
    }

    .action-btn {
        cursor: pointer;
        text-decoration: none;
        padding: 20px 40px;
        border-radius: 50px;
        border: none;
        /* border: 5px solid green; */
        background-color: green;
        color: white;
        font-family: 'beach-party';
        font-size: 20px;
        font-weight: 100;
        letter-spacing: 1px;
    }

    .tag-line-container {
        color: white;
        font-size: 60px;
        font-family: 'beach-party';
        text-shadow: 1px 1px 2px rgba(0,0,0,0.75);
        padding: 50px;
        letter-spacing: 2px;
        font-weight: 100;
        text-align: right;
    }

    .qr-code {
        width: 150px;
        border-radius: 10px;
        padding: 10px;
        background-color: rgb(250, 247, 243);
    }

    @media screen and (max-width: 675px) {
        .header-wrapper {
            flex-direction: column;
            justify-content: space-between;
            height: 70%;
        }

        .tag-line-container {
            font-size: 40px;
            text-align: center;
        }

        .qr-code {
            width: 250px;
            border-radius: 15px;
            background-color: none;
            padding: 0;
        }
    }

</style>