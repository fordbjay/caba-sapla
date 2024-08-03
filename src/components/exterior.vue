<template>
    <div class="grid-container">
        <div class="grid-el" v-for="(image, index) in images" :key="index" @click="openPic(index)">
            <img :src="image" :alt="image">
        </div>
    </div>

    <!-- MODAL -->
    <modal :pic="images[imgClicked]" :openCondition="picOpen" @close="closePic"/>

</template>

<script>
import modal from './props/modal.vue'

export default {
    components: { modal },
    methods: {
        openPic(index) {
            this.imgClicked = index;
            this.picOpen = true;
        },
        closePic() {
            this.picOpen = false;
        }
    },
    data() {
        return {
            picOpen: false,
            imgClicked: null,
            images: [
                "/exterior/IMG_3796.jpg",
                "/exterior/IMG_4066.jpg",
                "/exterior/IMG_4627.jpg"
            ]
        }
    }
}

</script>

<style scoped>

.grid-container {
    display: flex;
}

.grid-el {
    overflow: hidden;
    cursor: pointer;
}

.grid-el img {
    width: 100%;
    display: block;
    transition: transform 0.3s ease;
}

.grid-el img:hover {
    transform: scale(1.2)
}

</style>