<template>

    <div class="units-main-container">
        <div v-for="(unit, index) in units" :class="{'units-wrapper': true, 'selected-unit': unitClicked !==null && unitClicked !==index }">
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
                >
                    
            </div>
        </div>
        <ul class="details">
            <li>{{units[unitClicked].price}} Pesos/Month plus Electricity (separate meter)</li>
            <li>Water, Wi-Fi included</li>
        </ul>

    </div>

    <!-- MODAL  @click="closePic()"-->
    <div
        v-if="unitDetailsOpen"
        :class="{ modal: true, open: modalOpen }"
        @click="closePic()"
    >
            <!-- <div style="position: absolute; font-size: 75px; color: white; top: 20px; right: 40px">&#x2715;</div> -->
            <img draggable="false" class="selected-image" :src="this.units[this.unitClicked].pics[this.imgClicked]" alt="selected-image">
    </div>
        
    
    
</template>
    
<script>
    
    
    export default {

        methods: {
            expandPic() {
                if(window.innerWidth > 700) {
                    this.modalOpen = true;
                }
            },
            closePic() {
                this.modalOpen = false
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
                        "/units-pics/a/IMG_4380.jpg",
                        "/units-pics/a/IMG_4368.jpg",
                        "/units-pics/a/IMG_4120.jpg",
                        "/units-pics/a/IMG_4340.jpg",
                        "/units-pics/a/IMG_4348.jpg",
                        "/units-pics/a/IMG_4394.jpg",
                        "/units-pics/a/IMG_4410.jpg",
                        "/units-pics/a/IMG_4475.jpg",
                        "/units-pics/a/IMG_4101.jpg"
                        //  "/units-pics/a/IMG_4416.jpg",
                        // "/units-pics/a/IMG_4112.jpg",
                        ],

                    },
                    {
                        name: 'B',
                        price: '13,000',
                        pics: [
                            "/units-pics/b/IMG_4237.jpg",
                            "/units-pics/b/IMG_4258.jpg",
                            "/units-pics/b/IMG_4173.jpg",
                            "/units-pics/b/IMG_4129.jpg",
                            // "/units-pics/b/IMG_4094.jpg",
                            "/units-pics/b/IMG_4283.jpg",
                            "/units-pics/b/IMG_4289.jpg",
                            "/units-pics/b/IMG_4296.jpg",
                            //   "/units-pics/b/IMG_4296.jpg",
                            "/units-pics/b/IMG_4311.jpg",
                            "/units-pics/b/IMG_4089.jpg",
                        ],

                    },
                    {
                        name: 'C',
                        price: '12,000',
                        pics: [
                            "/units-pics/c/IMG_4323.jpg",
                            "/units-pics/c/IMG_4230.jpg",
                            "/units-pics/c/IMG_4220.jpg",
                            "/units-pics/c/IMG_4197.jpg",
                            "/units-pics/c/IMG_4132.jpg",
                            // "/units-pics/c/IMG_4077.jpg",
                            // "/units-pics/c/IMG_4204.jpg",
                            "/units-pics/c/IMG_4216.jpg",
                            "/units-pics/c/IMG_4222.jpg",
                            "/units-pics/c/IMG_4235.jpg",
                            "/units-pics/c/IMG_4097.jpg",
                        ],
                    },
                ]
            }
        },
    
    }
    
</script>
    
    
<style scoped>

    .modal {
            display: none;
        }

    .modal.open {
        z-index: 999;
        position: fixed;
        /* border: 1px solid; */
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

    .units-main-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        max-width: 900px;
        /* border: 1px solid; */
        align-items: center;
        margin: 0 auto 20px auto;
        width: 100%;
    }

    .units-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 10px;
    }

    .inner-pic-text {
        user-select: none;
        cursor: pointer;
        position: relative;
        overflow: hidden;
        border-radius: 50%;
        width: 200px;
        height: 200px;
    }

    .inner-pic-text img {
        user-select: none; 
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
        width: max-content;
        /* align-items: center; */
        /* border: 1px solid; */
        margin: 0 auto 10px auto;
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
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #000000;
        height: 100%;
        margin-right: 10px;
    }
    
    .grid {
        flex: 2;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 10px;
        height: 100%;
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

    @keyframes fadeOut {
        from { opacity: 1; }
        to { opacity: 0.15; }
    }

    @keyframes slideDown {
        from {
            max-height: 0;
            opacity: 0;
        }
        to {
            max-height: max-content; /* Adjust based on content size */
            opacity: 1;
        }
    }


    @media screen and (max-width: 750px) {

        .pic-container {
            flex-direction: column;
        }

        .popup-main-container {
            /* display: flex; */
            /* border: 1px solid; */
            flex-direction: column;
            align-items: center;
        }

        .grid {
            /* border: 1px solid; */
            /* height: 100px; */
            margin-top: 10px;
            padding-left: 0px;
            width: 100%;
            grid-template-columns: repeat(3, 1fr); /* Adjusted to 2 columns for better fit */
            grid-template-rows: auto;
            gap: 10px;
        }

        .details {
            transform: translateX(10px);
        }

        .featured-picture {
            margin-right: 0px;
            width: 100%;
        }
    }
    
</style>
    
    
