<template>
    
  <div class="bg-container">
  
    <div class="inner-wrapper">
        <div class="logo-qr">
            <img id="logo" src="/logo-white-600x-8.png" alt="logo">
            <qrWaLink :desiredWidth="675"/>
        </div>
        <p class="tag-line">Your Next Home <br> in the Riviera Maya</p>
    </div>  
  
  </div>
        
</template>
    
<script>
  import qrWaLink from './props/qr-wa-link.vue'

  export default {
    components: { qrWaLink },
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

    @media screen and (max-width: 675px) {

      .logo-qr {
        flex-direction: column;
        height: 100%;
      }

      .tag-line {
        text-align: center;
        font-size: 40px;
        margin-top: 20px;
      }
      #logo {
        width: 250px;
      }

    }

    @media screen and (max-height: 400px) {

      #logo {
        width: 100px;
      }
      .tag-line {
        font-size: 30px;
      }

    }

</style>