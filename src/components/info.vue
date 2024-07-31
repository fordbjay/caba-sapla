<template>

    <div class="main-container">
        <p>
            <span style="font-family: 'beach-party'; font-size: 35px;">Enjoy the best</span> of Playa del Carmen, Mexico in our new, bright
            and well appointed studios in the heart of town.
            <br><br>These studios are perfect for digital nomads, travellers
            and anyone who wants to feel instantly at home while experiencing all
            that Mexico has to offer.

            <br><br>Relaxation and comfort await you each day at Caba
            Sapla!
        </p>
        
        <ul style="line-height:180%; font-size: 18px;">
            <li>Fully Furnished</li>
            <li>Fast Internet</li>
            <li>Smart TV</li>
            <li>Air Conditioner</li>
            <li>Ceiling Fan</li>
        </ul>
        <!-- <a href="https://wa.me/qr/JPECI3TMBSQMJ1" target="_blank">
            <img src="/wa-contact-qrcode.png" alt="exterior-2">
        </a> -->
        <img style="border-radius: 50px;" src="/exterior-2.jpg" alt="exterior-2.jpg">

    </div>

</template>

<script>

</script>

<style scoped>

.main-container {
    background-color: rgb(250, 247, 243);
    border-radius: 10px;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.3),0 1px 3px 1px rgba(60,64,67,.15);
    width: 80%;
    height: max-content;
    /* min-width: 650px; */
    max-width: 900px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-weight: 200;
    margin: 20px auto;
    padding: 10px 0;
}

.main-container > * {
    padding: 20px;
}

p {
    text-align: justify;
    width: 200px;
    line-height: 130%;
}

img {
    width: 250px;
    height: 100%;
}

@media screen and (max-width: 850px) {
    .main-container {
        flex-direction: column;
        margin: 20px auto;
        align-items: center;
    }

    .main-container > * {
    padding: 10px;
}

    p {
        width: 70%;
    }

    a {
        width: 50%;
    }
}


</style>