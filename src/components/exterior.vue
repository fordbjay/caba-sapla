<template>
    
    <div class="grid-container">
        <div 
            class="grid-el" 
            v-for="(image, index) in images" 
            :key="index" 
            @click="expandPic(index)"
        >
            <img :src="image" :alt="image">
        </div>
    </div>

    <!-- MODAL -->
    <modal
        :pic="images[imgClicked]"
        :openCondition="modalOpen"
        @close="this.modalOpen = false;"
    />

</template>

<script>
    import modal from './props/modal.vue'

    export default {
        components: { modal },
        methods: {
            expandPic(index) {
                this.imgClicked = index;
                this.modalOpen = true;
            },
        },
        data() {
            return {
                modalOpen: false,
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