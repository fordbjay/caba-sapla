<template>

    <div class="main-container">
        <p>
            <span style="font-family: 'beach-party'; font-size: 30px;">Enjoy the best</span>
            of Playa del Carmen, Mexico in our new, bright
            and well appointed studios in the heart of downtown.
            <br>
            <br>
            Easily walk to all the main beaches, famous 
            Quinta Avenida, local restaurants, major supermarkets
            and every amenity needed.
            <br>
            <br>
            These studios are perfect for digital nomads, expats,
            travellers and anyone who wants to feel instantly at
            home while experiencing all that Mexico has to offer.
            <br>
            <br>
            Relaxation and comfort await you each day at Caba Sapla!
        </p>
    
        <ul style="line-height:180%; font-size: 20px;">
            <li>Fully Furnished</li>
            <li>Fast Internet</li>
            <li>Smart TV</li>
            <li>Air Conditioner</li>
            <li>Ceiling Fan</li>
        </ul>
        <img style="border-radius: 20px;" src="/exterior/exterior-2.jpg" alt="exterior-2.jpg">
   
    </div>

</template>

<script>

</script>

<style scoped>

    .main-container {
        background-color: rgb(250, 247, 243);
        border-radius: 10px;
        box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.3),0 1px 3px 1px rgba(60,64,67,.15);
        margin: 20px auto;
        padding: 20px 0;
        width: 90%;
        max-width: 1024px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        font-weight: 100;
    }

    p {
        text-align: justify;
        width: 250px;
        /* line-height: 130%; */
    }

    img {
        width: 200px;
    }

    @media screen and (max-width: 775px) {
        .main-container {
            flex-direction: column;
            width: 85%;
        }

        ul {
        margin: 30px;
    }

        p {
            width: 70%;
        }

        img {
        display: none;
        }
    }

</style>