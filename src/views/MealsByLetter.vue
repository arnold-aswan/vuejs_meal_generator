<script setup>
import MealCard from '@/components/MealCard.vue';
import { useMealStore } from '@/store';
import { computed, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const store = useMealStore()
const meals = computed(() => store.mealsByLetter.data)

onMounted(async () => {
  if (!route.params.letter) {
    route.params.letter = "A"
  }
  await store.getMealsByLetter(route.params.letter)
})

watch(() => route.params.letter, (newLetter) => {
  store.getMealsByLetter(newLetter)
})

</script>


<template>
  <div>
    <div class="flex justify-center gap-5 mt-5">
      <router-link v-for="letter in letters.split('')" :key="letter" :to="{ name: 'byLetter', params: { letter } }">{{
        letter
        }}</router-link>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-4 md:p-8">
      <MealCard v-for="meal of meals" :meal="meal" :key="meal.idMeal" />
    </div>
    <div v-if="!meals.length" class="flex justify-center text-black">
      <h1>There are no meals</h1>
    </div>
  </div>
</template>
