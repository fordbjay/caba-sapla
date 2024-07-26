<template>
    
    <div class="main-container">
    
        <div class="header-wrapper">
            <img id="logo" src="/cabasapla-logo-white.png" alt="logo">
            <a class="action-btn" href="https://google.com" target="_blank">Submit Your Application</a>
        </div>
    
        <p class="tag-line-container">Your Next Home <br> in the Riviera Maya</p>  
        
    </div>
        
</template>
    
    <script>

    </script>
    
    <style scoped>
    
    .main-container {
        background-image: url(/exterior.jpg);
        height: 100vh;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    
    .header-wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 50px;
    }
    
    #logo {
        width: 300px;
    }
    
    .action-btn {
        cursor: pointer;
        text-decoration: none;
        padding: 20px 40px;
        border-radius: 50px;
        border: none;
        background-color: green;
        color: white;
        font-family: 'beach-party';
        font-size: 20px;
        font-weight: 100;
        letter-spacing: 1px;
    }
    
    .tag-line-container {
        color: white;
        font-size: 60px;
        font-family: 'beach-party';
        text-shadow: 1px 1px 2px rgba(0,0,0,0.75);
        padding: 50px;
        letter-spacing: 2px;
        font-weight: 100;
        text-align: right;
    }

    @media screen and (max-width: 575px) {
        .header-wrapper {
            flex-direction: column;
            justify-content: space-between;
            height: 70%;
        }

        .tag-line-container {
            font-size: 40px;
            text-align: center;
        }
    }
    
    </style>