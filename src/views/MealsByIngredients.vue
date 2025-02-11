<script setup>
import { computed, onMounted } from 'vue';
import MealCard from '@/components/MealCard.vue';
import { useRoute } from 'vue-router';
import { useMealStore } from '@/store';

const route = useRoute()
const store = useMealStore()
const meals = computed(() => store.mealsByIngredients.data)

onMounted(async () => {
  await store.getMealsByIngredient(route.params.ingredient);
})

</script>


<template>
  <div class="p-4 md:p-6">

    <h2 class="text-2xl text-black">{{ route.params.ingredient }} Meals</h2>

    <!-- Loading state -->
    <div v-if="store.mealsByIngredients.loading" class="flex justify-center text-black">Loading...</div>

    <!-- Error handling -->
    <div v-if="store.mealsByIngredients.error" class="flex justify-center text-black">
      <h1>Error: {{ store.mealsByIngredients.error.message }}</h1>
    </div>

    <div v-if="meals.length" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-4 md:p-8">
      <MealCard v-for="meal in meals" :meal="meal" :key="meal.idMeal" />
    </div>

    <div v-else class="flex justify-center text-black">
      <h1>There are no meals</h1>
    </div>
  </div>

</template>
