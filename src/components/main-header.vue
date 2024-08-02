<template>
    
    <div class="main-container">
    
      <div class="inner-wrapper">
          <div class="logo-qr">
              <img id="logo" src="/cabasapla-logo-white.png" alt="logo">
              <a href="https://wa.me/qr/JPECI3TMBSQMJ1" target="_blank"> 
                  <img class="qr-code" :src="imageSrc" alt="">
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
    }

    .inner-wrapper {
      margin: 0 auto;
      padding: 30px 0;
      width: 90%;
      max-width: 900px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
      box-sizing: border-box;
      
    }

    .logo-qr {
        display: flex;
        justify-content: space-between;
        align-items: center;
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

    .tag-line {
        color: white;
        font-size: 60px;
        font-family: 'beach-party';
        text-shadow: 1px 1px 2px rgba(0,0,0,0.75);
        letter-spacing: 2px;
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