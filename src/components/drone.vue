<template>
    
    <div style="height: 100%; width: 100%; position: relative;">
        <div class="footer">
            <img style="width: 150px;" src="/public/cabasapla-logo-white.png" alt="">
            <h2>2024</h2>
        </div>
        <video class="loop-video" playsinline="playsinline" data-wf-ignore autoplay loop muted src="/cabasapla-drone-1000kbps.mp4"></video>
    </div>

</template>

<script>

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
    color: white;
    font-family: 'beach-party';
    letter-spacing: 1px;
    font-weight: 100;
    justify-content: space-between;
    align-items: end;
    bottom: 0;
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
}

</style>

