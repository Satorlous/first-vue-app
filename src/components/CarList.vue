<template>
<div>
    <h2>Категория: <span class="filtername">{{filterName}}</span></h2>
    <div class="row">
        <div class="col-md-4" v-for="car in cars" :key="car.id">
            <router-link :to="'/cars/'+car.id">
                <div class="car-card">
                    <p><strong>Название:</strong> <span>{{car.model}}</span></p>
                    <p><strong>Год:</strong> <span>{{car.year}}</span></p>
                </div>
            </router-link>
        </div>
    </div>
</div>
</template>

<script>
  export default {
    name: "CarList",
    props: {
      filterName: {
        type: String,
        required: true
      },
      cars: {
        type: Array,
        required: true
      }
    }
  }
</script>

<style>
    .filtername {
        color: lightskyblue;
    }

    .car-card{
        cursor: pointer;
        border: 1px lightgray solid;
        border-radius: 5px;
        height: 100px;
        margin: 15px 0 15px 0;
        padding: 15px;
    }

    .car-card:hover{
        transition: ease-in;
        -webkit-box-shadow: 13px 11px 21px -5px rgba(0,0,0,0.23);
        -moz-box-shadow: 13px 11px 21px -5px rgba(0,0,0,0.23);
        box-shadow: 13px 11px 21px -5px rgba(0,0,0,0.23);
        transition-duration: 0.06s;
    }

    a, a:hover {
        color: inherit;
        text-decoration: none;
    }

</style>