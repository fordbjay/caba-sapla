<template>

    <div
        v-if="modalOpen"
        :class="{ modal: true, open: modalOpen }"
        @click="closePic"
    >
        <img
            class="selected-image"
            draggable="false"
            :src="pic" :alt="pic"
        >
    </div>

</template>

<script>

export default {

    props: {
        openCondition: {
            type: Boolean,
            required: true,
        },
        pic: {
            required: true,
        },
    },
    data() {
        return {
            modalOpen: this.openCondition,
        };
    },
    watch: {
        openCondition(newVal) {
            this.modalOpen = newVal;
        },
    },
    methods: {
        closePic() {
            this.modalOpen = false;
            this.$emit('close');
        },
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
    top: 0;
    left: 0;
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

</style>