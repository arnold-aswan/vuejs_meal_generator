<script setup>
import YoutubeBtn from './YoutubeBtn.vue';

const { meal } = defineProps({
  meal: Object
})

</script>


<template>
  <article class="bg-white shadow rounded-xl">
    <img :src="meal.strMealThumb" :alt="meal.strMeal" class="h-48 w-full object-cover rounded-t-xl ">
    <div class="p-3">
      <h3 class="font-semibold">{{ meal.strMeal }}</h3>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque, rem vel maxime placeat, obcaecati itaque
        ratione distinctio minima laborum aperiam voluptates sequi. Nisi illo amet maxime inventore dolorem minus
        numquam!</p>
      <div class="py-2 w-full flex items-center justify-between">
        <YoutubeBtn :href="meal.strYoutube" />
        <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }"
          class="px-3 py-2 bg-gray-300 rounded-md font-medium">view</router-link>
      </div>
    </div>
  </article>
</template>
