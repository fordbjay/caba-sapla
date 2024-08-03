<template>

    <div class="grid-container" >
        <div class="grid-el" v-for="image, index in images" @click="openPic(index)">
            <img :src="image" :alt="image">
        </div>
    </div>


    <!-- MODAL -->
    <div
        v-if="picOpen"
        :class="{ modal: true, open: this.picOpen }"
        @click="this.picOpen = false"
    >
        <img draggable="false" class="selected-image" :src="this.images[this.imgClicked]" :alt="this.images[this.imgClicked]">
    </div>

</template>

<script>

export default {
    methods: {
        openPic(index) {
            this.imgClicked = index
            this.picOpen = true
            console.log(this.imgClicked)
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

.modal.open {
        z-index: 999;
        position: fixed;
        top: 0;
        left: 0px;
        right: 0;
        bottom: 0;
        background-color: rgba(160, 160, 160, 0.5);
        display: flex;
        align-items: center;
        justify-content: space-around;
    }

    .selected-image {
        cursor: pointer;
        user-select: none;
        max-width: 100%;
        max-height: 80vh;
    }

</style>