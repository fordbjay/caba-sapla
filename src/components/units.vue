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

    <div class="popup-main-container" ref="details" v-if="unitDetailsOpen">

        <div class="pic-container">
            <div class="featured-picture">
                <img :src="units[unitClicked].pics[imgClicked]" alt="Featured Picture">
            </div>
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
    
    
    
</template>
    
<script>
    
    
    export default {
        mounted() {
            window.addEventListener('resize', this.updateWindowWidth);
        },
        beforeDestroy() {
            window.removeEventListener('resize', this.updateWindowWidth);
        },

        methods: {
            updateWindowWidth() {
                this.isSmallScreen = window.innerWidth <= 675;
            },
            showUnit(index) {

                console.log(window.innerWidth)
                if (window.innerWidth <= 675) {
                    this.$nextTick(() => {
                        const detailsDiv = this.$refs.details;
                        if (detailsDiv) {
                            detailsDiv.scrollIntoView({behavior: 'smooth'});
                        }
                    })
                }

                if (this.unitClicked === index) {
                    this.unitDetailsOpen = !this.unitDetailsOpen
                    this.unitClicked = null

                } else {
                    this.unitDetailsOpen = true
                    this.unitClicked = index
                }
            }
        },
    
        data() {
            return {
                unitDetailsOpen: false,
                unitClicked: null,
                imgClicked: 1,
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

    .units-main-container {
        display: flex;
        justify-content: space-around;
        max-width: 900px;
        /* border: 1px solid; */
        align-items: center;
        margin: 0 auto;
        width: 100%;
    }

    .units-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 10px;
    }

    /* .main-text-wrapper {
        display: flex;
        justify-content: space-around;
        width: 100%;
        max-width: 900px;
    } */

    .inner-pic-text {
        cursor: pointer;
        position: relative;
        overflow: hidden;
        border-radius: 50%;
        width: 200px;
        height: 200px;
    }

    .inner-pic-text img {
        height: 100%;
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
        align-items: center;
        /* border: 1px solid; */
        margin: 0 auto 30px auto;
    }

    .selected-unit {
        /* opacity: 0.15; */
        animation: fadeOut .15s ease-out;
    }

    .details {
        margin: 10px 0;
        font-size: 18px;
        font-weight: 100;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }
    
    
    .pic-container {
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        max-width: 900px;
        width: 90%;
        /* border: 1px solid; */
        
    }
    
    .featured-picture {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #000000;
        height: 100%;
        margin-right: 10px;
        /* border: 1px solid blue; */
    }
    
    .featured-picture img {
        height: 100%;
        width: 450px;
        /* max-width: 100%;
        max-height: 100%; */
        object-fit: cover;
        /* border: 1px solid purple; */
    }
    
    .grid {
        flex: 2;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 10px;
        height: 100%;
        /* padding: 20px; */
        box-sizing: border-box;
        /* border: 1px solid; */
    }
    
    .grid img {
        cursor: pointer;
        width: 100%;
        height: 100px;
        object-fit: cover;
    }

    @keyframes fadeOut {
        from { opacity: 1; }
        to { opacity: 0.15; }
}


    @media screen and (max-width: 675px) {
    .units-main-container {
        flex-direction: column;
    }

    .pic-container {
        flex-direction: column;
    }

    .featured-picture {
        margin-right: 0px;
    }

    .grid {
        margin-top: 10px;
        padding-left: 0px;
    }

    @media screen and (max-width: 675px) {
        .main-text-wrapper {
            flex-direction: column;
            align-items: center;
        }
    }
}
    
</style>
    
    
    