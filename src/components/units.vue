<template>

    <div class="units-btns-container">
        <div v-for="(unit, index) in units" :class="{'selected-unit': unitClicked !==null && unitClicked !==index }">
            <div @click="showUnit(index)" class="inner-pic-text">
                <p class="text"><span style="font-size: 55px;">Unit</span> {{ unit.name }}</p>
                <img :src="unit.pics[0]" :alt="unit.pics[index]"
                >
            </div>
        </div>
    </div>

    <div class="popup-main-container" ref="unitDetails" v-if="unitDetailsOpen">

        <div class="pic-container">
            <img 
                class="featured-picture"
                :src="units[unitClicked].pics[imgClicked]"
                alt="Featured Picture"
                @click="expandPic()"
            >
            <div class="grid">
                <img
                    v-for="(pic, index) in units[unitClicked].pics"
                    :key="index" :src="pic"
                    :alt="'Picture ' + (index + 1)"
                    @click="this.imgClicked = index"
                    :class="{'selected-image': imgClicked === index}"
                >
                    
            </div>
        </div>
        <ul class="details">
            <li>{{units[unitClicked].price}} Pesos/Month plus Electricity (separate meter)</li>
            <li>Water, Wi-Fi included</li>
        </ul>

    </div>

    <modal
        v-if="unitClicked !== null && imgClicked !== null"
        :pic="this.units[this.unitClicked].pics[this.imgClicked]"
        :openCondition="modalOpen"
        @close="this.modalOpen = false"
    />

</template>
    
<script>
    import modal from './props/modal.vue'
    
    export default {
        
        components: { modal },
        
        methods: {
            expandPic() {
                if(window.innerWidth > 700 && window.innerHeight > 400) {
                    this.modalOpen = true;
                }
            },
            showUnit(index) {
                this.imgClicked = 0;

                if (this.unitClicked === index) {
                    this.unitDetailsOpen = !this.unitDetailsOpen
                    this.unitClicked = null

                } else {
                    this.unitDetailsOpen = true
                    this.unitClicked = index
                }

                this.$nextTick(() => {
                    if (window.innerWidth < 675) {
                    this.$refs.unitDetails.scrollIntoView({ behavior: 'smooth' });
                    }
                });
            }
        },
    
        data() {
            return {
                unitDetailsOpen: false,
                unitClicked: null,
                imgClicked: null,
                modalOpen: false,
                units: [
                    {
                        name: 'A',
                        price: '11,000',
                        pics: [
                        "/units/a/IMG_4380.jpg", // FRONT TO BACK LEFT
                        "/units/a/IMG_4348.jpg", // FRONT TO BACK STRAIGHT
                        "/units/a/IMG_4368.jpg", // FRONT TO BACK RIGHT
                        "/units/a/IMG_4394.jpg", // TELEVISION/COUCH
                        "/units/a/IMG_4120.jpg", // EXTERIOR
                        "/units/a/IMG_4410.jpg", // BATH/KITCHEN
                        "/units/a/IMG_4340.jpg", // BACK TO FRONT STRAIGHT
                        "/units/a/IMG_4475.jpg", // BACK TO FRONT RIGHT
                        "/units/a/IMG_4101.jpg", // BATHROOM
                        ],

                    },
                    {
                        name: 'B',
                        price: '13,000',
                        pics: [
                            "/units/b/IMG_4237.jpg", // BACK TO FRONT STRAIGHT
                            "/units/b/IMG_4311.jpg", // BACK TO FRONT RIGHT
                            "/units/b/IMG_4173.jpg", // BATH/KITCHEN
                            "/units/b/IMG_4296.jpg", // TELEVISION/COUCH
                            "/units/b/IMG_4129.jpg", // EXTERIOR
                            "/units/b/IMG_4289.jpg", // FRONT TO BACK LEFT
                            "/units/b/IMG_4258.jpg", // FRONT TO BACK STRAIGHT
                            "/units/b/IMG_4283.jpg", // FRONT TO BACK RIGHT
                            "/units/b/IMG_4089.jpg", // BATHROOM
                        ],

                    },
                    {
                        name: 'C',
                        price: '12,000',
                        pics: [
                            "/units/c/IMG_4323.jpg", // BACK TO FRONT RIGHT
                            "/units/c/IMG_4220.jpg", // FRONT TO BACK STRAIGHT
                            "/units/c/IMG_4230.jpg", // FRONT TO BACK RIGHT
                            "/units/c/IMG_4235.jpg", // TELEVISION/COUCH
                            "/units/c/IMG_4132.jpg", // EXTERIOR
                            "/units/c/IMG_4197.jpg", // BATH/KITCHEN
                            "/units/c/IMG_4216.jpg", // BACK TO FRONT STRAIGHT
                            "/units/c/IMG_4222.jpg", // FRONT TO BACK LEFT
                            "/units/c/IMG_4097.jpg", // BATHROOM
                        ],
                    },
                ]
            }
        },
    
    }
    
</script>
    
    
<style scoped>

    .units-btns-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        margin: 0 auto 20px auto;
        width: 90%;
        max-width: 1024px;
    }

    .inner-pic-text {
        box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.3),0 1px 3px 1px rgba(60,64,67,.15);
        user-select: none;
        cursor: pointer;
        position: relative;
        overflow: hidden;
        margin: 10px;
        border-radius: 50%;
        width: 200px;
        height: 200px;
        transition: transform 0.3s ease;
    }

    .inner-pic-text:hover {
        transform: scale(1.1);
    }

    .inner-pic-text img {
        height: 100%;
        width: 100%;
    }

    .text {
        text-shadow: 1px 1px 2px rgba(0,0,0,0.75);
        width: 100%;
        text-align: center;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 80px;
        color: white;
        font-weight: 100;
        font-family: 'beach-party'
    }
    
    .popup-main-container {
        display: flex;
        flex-direction: column;
        margin: 20px auto;
        width: 90%;
        max-width: 900px;
        animation: slideDown 0.25s ease-in-out;
    }

    .selected-unit {
        opacity: 0.15;
        animation: fadeOut .25s ease-out;
    }

    .details {
        margin: 10px 0;
        transform: translateX(20px);
        font-size: 20px;
        font-weight: 100;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }
    
    .pic-container {
        display: flex;
        align-items: center;
    }
    
    .featured-picture {
        cursor: pointer;
        width: 450px;
        margin-right: 10px;
    }
    
    .grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 10px;
        width: 100%;
        box-sizing: border-box;
    }
    
    .grid img {
        user-select: none;
        cursor: pointer;
        width: 100%;
        height: 100px;
        object-fit: cover;
    }

    .selected-image {
        opacity: 0.25;
        animation: fadeOut .25s ease-in-out;
    }

    @keyframes fadeOut {
        from { opacity: 1; }
        to { opacity: 0.25; }
    }

    @keyframes slideDown {
        from {
            max-height: 0;
            opacity: 0;
        }
        to {
            max-height: max-content;
            opacity: 1;
        }
    }

    @media screen and (max-width: 733px) {

        .pic-container {
            flex-direction: column;
        }

        .grid {
            margin-top: 10px;
        }

        .featured-picture {
            margin-right: 0px;
            width: 100%;
        }
    }

</style>
    
    
