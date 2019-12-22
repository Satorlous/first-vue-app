<template>
    <div>
        <CarList
            :cars="getFilteredCars"
            :filterName="getFilterName"
        />
        <router-view />
    </div>
</template>

<script>
  import cars from "../assets/device.json"
  import CarList from "../components/CarList";

  export default {
    name: "Home",
    components: {
      CarList,
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
      getFilteredCars(){
        if(this.$route.params.type === "light")
          return this.cars.filter(c => c.type === "L");
        if(this.$route.params.type === "cargo")
          return this.cars.filter(c => c.type === "G");
        if(this.$route.params.type === "moto")
          return this.cars.filter(c => c.type === "M");
        return this.cars
      },

      getFilterName()
      {
        if(this.$route.params.type === "light")
          return "Легковые";
        if(this.$route.params.type === "cargo")
          return "Грузовые";
        if(this.$route.params.type === "moto")
          return "Мотоциклы";
        return "Все";
      },
    },
  }
</script>