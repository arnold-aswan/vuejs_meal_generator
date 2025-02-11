<script setup>
import axiosClient from '@/axiosClient';
import YoutubeBtn from '@/components/YoutubeBtn.vue';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()
const meal = ref({})

onMounted(async () => {
  try {
    const res = await axiosClient.get(`/lookup.php?i=${route.params.id}`)
    meal.value = res.data.meals[0]
  } catch (error) {
    console.error(error)
  }

})
</script>


<template>
  <div class="max-w-[800px] mx-auto p-4 ">
    <h1 class="text-4xl font-bold mb-5 text-black">Meal Details</h1>
    <h1 class="text-3xl font-bold mb-5 text-black">{{ meal.strMeal }}</h1>
    <img :src="meal.strMealThumb" :alt="meal.strMeal" class="w-full rounded-lg">

    <div class="grid grid-cols-1 sm:grid-cols-3">
      <div>
        <strong class="text-bold">Category: </strong>{{ meal.strCategory }}
      </div>
      <div>
        <strong class="text-bold">Area: </strong>{{ meal.strArea }}
      </div>
      <div>
        <strong class="text-bold">Tags: </strong>{{ meal.strTags }}
      </div>
    </div>

    <div class="my-3">
      <h2 class="text-2xl font-semibold mb-2">Instructions</h2>
      <p>
        {{ meal.strInstructions }}
      </p>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2">
      <div>
        <h2 class="text-2xl font-semibold mb-3">Ingredients</h2>
        <ul>
          <template v-for="(item, index) of new Array(20)">
            <li v-if="meal[`strIngredient${index + 1}`] && meal[`strIngredient${index + 1}`].trim() !== ''"
              :key="index">
              {{ index + 1 }}. {{ meal[`strIngredient${index + 1}`] }}
            </li>
          </template>
        </ul>
      </div>

      <div>
        <h2 class="text-2xl font-semibold mb-3">Measurements</h2>
        <ul>
          <template v-for="(item, index) of new Array(20)">
            <li v-if="meal[`strMeasure${index + 1}`] && meal[`strMeasure${index + 1}`].trim() !== ''" :key="index">
              {{ index + 1 }}. {{ meal[`strMeasure${index + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
    </div>

    <div class="my-3 w-full flex items-center justify-between">
      <YoutubeBtn :href="meal.strYoutube" />
      <a :href="meal.strSource" target="_blank" class="px-3 py-2 rounded-md bg-gray-600 text-white font-medium">View
        Original Source</a>
    </div>
  </div>
</template>
