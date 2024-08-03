<template>
    
  <div class="bg-container">
  
    <div class="inner-wrapper">
        <div class="logo-qr">
            <img id="logo" src="/cabasapla-logo-white.png" alt="logo">
            <a href="https://wa.me/qr/JPECI3TMBSQMJ1" target="_blank"> 
                <img class="qr-contact-btn" :src="imageSrc" :alt="imageSrc">
            </a>
        </div>
        <p class="tag-line">Your Next Home <br> in the Riviera Maya</p>
    </div>  
  
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
      return this.windowWidth <= 650 ? '/WhatsAppButtonGreenLarge.png' : '/wa-contact-qrcode.png';
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

    .bg-container {
        background-image: url(/exterior/exterior.jpg);
        height: 100vh;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }

    .inner-wrapper {
      margin: 0 auto;
      padding: 30px 0;
      width: 90%;
      max-width: 1024px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
      box-sizing: border-box;
      /* animation: fadeIn 1s ease-in-out; */
    }

    .logo-qr {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    #logo {
        width: 300px;
    }

    .qr-contact-btn {
        width: 150px;
        border-radius: 10px;
        padding: 10px;
        background-color: rgb(250, 247, 243);
    }

    .tag-line {
        color: white;
        font-size: 60px;
        font-family: 'beach-party';
        text-shadow: 1px 1px 2px rgba(0,0,0,0.75);
        letter-spacing: 2px;
        text-align: right;
    }

    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }

    @media screen and (max-width: 650px) {

      .logo-qr {
        flex-direction: column;
      }

      .qr-contact-btn {
        margin-top: 40px;
        padding: 0px;
        width: 200px;
        border-radius: 15px;
      }

      .tag-line {
        text-align: center;
        font-size: 40px;
      }

    }

    @media screen and (max-height: 400px) {

      #logo {
        width: 200px;
      }
      .tag-line {
        font-size: 30px;
      }

    }

</style>