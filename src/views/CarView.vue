<template>
    <div>
        <Car :data="getCar"/>
    </div>
</template>

<script>
  import cars from "../assets/device.json";
  import Car from "../components/Car";

  export default {
    name: "CarView",
    components: {
      Car,
    },

    data() {
      return {
        cars: [],
      }
    },

    mounted() {
      this.cars = cars;
    },

    computed: {
      getCar() {
        return this.cars.filter(c => c.id === this.$route.params.id);
      }
    }
  }
</script>

<style>

</style>