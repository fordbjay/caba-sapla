<template>

    <div 
    style=" display: flex; justify-content: space-between; align-items: center; margin: 12px auto; width: 80%; max-width: 900px;">
        <div v-for="(unit, index) in units" style="display: flex; flex-direction: column; align-items: center;">
            <h1 style="font-weight: 100; font-family: 'beach-party'">{{ unit.name }}</h1>
            <div @click="showUnit(index)" style="overflow: hidden; border-radius: 50%; width: 200px; height: 200px;">
                <img 
                    style=" height: 100%;"
                    :src="unit.pics[1]" 
                    alt=""
                >
            </div>
            <!-- <ul class="details" style="width: 200px;">
                <li>{{units[unitClicked].price}} Pesos/Month plus Electricity (separate meter)</li>
                <li>Water, Wi-Fi included</li>
            </ul> -->
        </div>

    </div>



    <div class="popup-main-container" v-if="unitDetailsOpen">

        <div style="display: flex; justify-content: space-around; width: 100%; max-width: 900px;">
            <p style="font-family: 'beach-party'; font-size: 50px; ">{{units[unitClicked].name}}</p>
            <ul class="details">
                <li>{{units[unitClicked].price}} Pesos/Month plus Electricity (separate meter)</li>
                <li>Water, Wi-Fi included</li>
            </ul>
        </div>

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

    </div>
    
</template>
    
    <script>
    
    
    export default {

        methods: {
            showUnit(index) {
                this.unitDetailsOpen = !this.unitDetailsOpen
                this.unitClicked = index
            }
        },
    
        data() {
            return {
                unitDetailsOpen: false,
                unitClicked: 0,
                imgClicked: 1,
                units: [
                    {
                        name: 'Unit A',
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
                        //   "/units-pics/a/IMG_4416.jpg",
                        "/units-pics/a/IMG_4112.jpg",
                        ],

                    },
                    {
                        name: 'Unit B',
                        price: '12,000',
                        pics: [
                            "/units-pics/b/IMG_4258.jpg",
                            "/units-pics/b/IMG_4237.jpg",
                            "/units-pics/b/IMG_4173.jpg",
                            "/units-pics/b/IMG_4129.jpg",
                            "/units-pics/b/IMG_4094.jpg",
                            "/units-pics/b/IMG_4283.jpg",
                            "/units-pics/b/IMG_4289.jpg",
                            "/units-pics/b/IMG_4296.jpg",
                            //   "/units-pics/b/IMG_4296.jpg",
                            "/units-pics/b/IMG_4311.jpg",
                        ],

                    },
                    {
                        name: 'Unit C',
                        price: '13,000',
                        pics: [
                            "/units-pics/c/IMG_4077.jpg",
                            "/units-pics/c/IMG_4197.jpg",
                            "/units-pics/c/IMG_4132.jpg",
                            "/units-pics/c/IMG_4204.jpg",
                            "/units-pics/c/IMG_4216.jpg",
                            "/units-pics/c/IMG_4220.jpg",
                            "/units-pics/c/IMG_4222.jpg",
                            "/units-pics/c/IMG_4230.jpg",
                            //   "/units-pics/b/IMG_4235.jpg",
                            "/units-pics/b/IMG_4323.jpg",
                        ],
                    },
                ]
            }
        },
    
    }
    
    
    </script>
    
    
    <style scoped>
    
    .popup-main-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        /* border: 1px solid; */
        margin: 0 auto 30px auto;
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
    
    </style>
    
    
    