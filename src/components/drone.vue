<template>
    
    <video class="loop-video" playsinline="playsinline" data-wf-ignore autoplay loop muted src="/cabasapla-drone-1000kbps.mp4"></video>

    <div style="height: 100%; width: 100%; position: relative;">
        <div class="footer">
            <div style="display: flex; align-items: end;">
                <img style="width: 150px;" src="/cabasapla-logo-white.png" alt="">
                <h3 style="transform: translateY(-15px)">&copy; {{new Date().getFullYear()}}</h3>
            </div>
            <a href="https://wa.me/qr/JPECI3TMBSQMJ1" target="_blank"> 
                <img :src="imageSrc" alt="wa-contact-qrcode.png">
            </a>
        </div>
        <!-- <video class="loop-video" playsinline="playsinline" data-wf-ignore autoplay loop muted src="/cabasapla-drone-1000kbps.mp4"></video> -->
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

.loop-video {
    width: 100%;
    /* height: 100vh; */
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

a img {
    width: 200px;
    border-radius: 10px;
    padding: 10px;
    background-color: rgb(250, 247, 243);
}

@media screen and (max-width: 675px) {
    a img {
    width: 200px;
    border-radius: 15px;
    padding: 0px;
    background-color: none;
}

    .footer {
        flex-direction: column;
        align-items: end;
        padding: 10px
    };

}

</style>

