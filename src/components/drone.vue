<template>

  <video class="loop-video" playsinline="playsinline" data-wf-ignore autoplay loop muted src="/cabasapla-drone-1000kbps.mp4"></video>
  
  <div style="position: relative;">
    
    <div class="footer">

      <div class="logo-year">
        <img src="/cabasapla-logo-white.png" alt="cabasapla-logo-white.png">
        <h3>&copy; {{new Date().getFullYear()}}</h3>
      </div>
      
      <a 
        :href="pressKitLink"
        target="_blank"
      >
        <p class="press-kit">Manager Press Kit</p>
      </a>
      
      <qrWaLink :desiredWidth="675"/>
    
    </div>

  </div>
    
</template>

<script>
  import qrWaLink from './props/qr-wa-link.vue'

  export default {
    components: { qrWaLink },

    data() {
      return {
          pressKitLink: 'https://drive.google.com/drive/folders/1fEd-Vu0mB_9R6LIhLfbOQ2335G5Hugu4?usp=drive_link'
      }
    }
    
  };

</script>

<style scoped>

  .loop-video {
      width: 100%;
      z-index: -1000;
      display: block;
  }

  .logo-year {
    display: flex;
    align-items: end;
    font-family: 'beach-party';
  }

  .logo-year img {
    width: 100px;
  }

  .press-kit {
    background-color: white;
    font-weight: 400;
    border: 1px solid white;
    border-radius: 10px;
    padding: 7px 10px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    transition: transform 0.3s ease;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: black;font-size: 12px;
  }

  .press-kit:hover {
    transform: scale(1.05);
  }


  .footer {
      position: absolute;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: white;
      letter-spacing: 1px;
      font-weight: 100;
      align-items: end;
      bottom: 0;
      width: 100%;
      padding: 20px;
      box-sizing: border-box;
  }

  @media screen and (max-width: 675px) {

    .footer {
      flex-direction: column;
      align-items: end;
      padding: 10px
    }

    .press-kit {
      margin: 10px 0;
    }

    .logo-year {
      flex-direction: column;
    }

    h3 {
      font-size: 12px;
    }
    
  }

  @media screen and (max-width: 350px) {
    .logo-year img {
      width: 75px;
    }
  }

</style>