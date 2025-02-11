<script setup>
import { onMounted, ref } from 'vue';
import axiosClient from '@/axiosClient';

const ingredients = ref([])

onMounted(async () => {
  try {
    const response = await axiosClient.get(`/list.php?i=list`)
    const data = response.data
    ingredients.value = data.meals
    console.log(data)
  } catch (error) { console.log(error) }

})


</script>


<template>
  <div class="p-4 md:p-6 space-y-5">
    <h2 class="text-2xl font-bold">Ingredients</h2>
    <router-link :to="{ name: 'byIngredient', params: { ingredient: ingredient.strIngredient } }"
      v-for="ingredient of ingredients" :key="ingredient.idIngredient"
      class="block bg-white shadow rounded-md space-y-3 p-3 ">
      <h3 class="text-2xl font-bold">{{ ingredient.strIngredient }}</h3>
      <p>{{ ingredient.strDescription }}</p>
    </router-link>
  </div>
</template>
