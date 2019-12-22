<template>
    <div class="car" v-if="this.data[0]">
        <div class="row">
            <div class="col-md-4">
                <p><strong>Модель:</strong> {{ this.data[0].model }}</p>
                <p><strong>Год:</strong> {{ this.data[0].year }}</p>
                <p><strong>Цена:</strong> {{ this.data[0].price }} руб.</p>
            </div>
            <div class="col-md-8">
                <img :src="`${publicPath}images/`+this.data[0].image" alt="">
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "Car",
    props: {
      data: {
        type: Array,
        required: true
      },
    },
    data() {
      return {
        publicPath: process.env.BASE_URL
      }
    },

  }
</script>

<style>
    .car{
        border: 1px lightgray solid;
        border-radius: 5px;
        margin: 15px 0 15px 0;
        padding: 15px;
    }

    .car img {
        width: inherit;
    }
</style>