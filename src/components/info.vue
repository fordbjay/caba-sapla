<template>

    <div class="main-container">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, obcaecati at? Consequatur obcaecati odit veritatis nobis ratione est, consequuntur dolores.</p>
        
        <ul style="line-height:180%">
            <li>Fully Furnished</li>
            <li>Fast Internet</li>
            <li>Smart TV</li>
            <li>Air Conditioner</li>
            <li>Ceiling Fan</li>
        </ul>

        <img src="/exterior-2.jpg" alt="exterior-2">
    </div>

</template>

<script>

</script>

<style scoped>

.main-container {
    background-color: rgb(246, 246, 246);
    border-radius: 10px;
    transform: translateY(-20px);
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.3),0 1px 3px 1px rgba(60,64,67,.15);
    height: 300px;
    width: 80%;
    max-width: 800px;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-weight: 200;
}

.main-container > * {
    padding: 20px;
}

p {
    text-align: justify;
    width: 150px;
}

img {
    height: 80%;
}


</style>