<template>

<div class="main-container">
    
    <img class="feature-img" :src="unitA[imgClicked].url" alt="">
    
    <div class="main-img-container">
        <div
            v-for="(pic, index) in unitA"
            :key="pic"
            class="img-wrapper"
            @click="this.imgClicked = index"
            >
            <img
                class="image"
                draggable="false"
                :src="pic.url"
                alt="pic"
            />
        </div>
    </div>

</div>



</template>

<script>

export default {

  components: {

  },

  data() {
      return {
        imgClicked: 1,
        unitA: [
          { url: "/units-pics/a/IMG_4120.jpg", },
          { url: "/units-pics/a/IMG_4340.jpg", },
          { url: "/units-pics/a/IMG_4348.jpg", },
          { url: "/units-pics/a/IMG_4368.jpg", },
          { url: "/units-pics/a/IMG_4380.jpg", },
          { url: "/units-pics/a/IMG_4394.jpg", },
          { url: "/units-pics/a/IMG_4410.jpg", },
          { url: "/units-pics/a/IMG_4475.jpg", },
        //   { url: "/units-pics/a/IMG_4416.jpg", },
          { url: "/units-pics/a/IMG_4112.jpg", },
        ],
      }
  },

  methods: {
  },

  computed: {

  }

}

</script>

<style scoped>

.main-container {
    display: flex;
    align-items: center;
    margin: 0 auto;
    /* border: 1px solid; */
    width: max-content;
}

.feature-img {
    height: 311px;
    width: auto;
    padding-right: 10px;
}

.main-img-container {
    cursor: pointer;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    /* border: 1px solid; */
    width: 410px;
}

.image {
    height: 100px;
}



</style>