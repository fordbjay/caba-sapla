<template>
    
    <video class="loop-video" playsinline="playsinline" data-wf-ignore autoplay loop muted src="/cabasapla-drone-1000kbps.mp4"></video>

    <div style="height: 100%; width: 100%; position: relative;">
        <div class="footer">
            <div style="display: flex; align-items: end;">
                <img style="width: 100px;" src="/cabasapla-logo-white.png" alt="cabasapla-logo-white.png">
                <h3>&copy; {{new Date().getFullYear()}}</h3>
            </div>
            <qrWaLink :desiredWidth="675"/>
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

  .loop-video {
      width: 100%;
      z-index: -1000;
      display: block;
  }

  .footer {
      position: absolute;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: white;
      font-family: 'beach-party';
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
      align-items: start;
      padding: 10px
    }
    
  }

</style>