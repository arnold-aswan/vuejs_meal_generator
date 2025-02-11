<script setup>
import { computed, onMounted, ref } from 'vue';
import { useMealStore } from "@/store"
import { useRoute } from 'vue-router';
import MealCard from '@/components/MealCard.vue';

const keyWord = ref("")
const route = useRoute()
const store = useMealStore()
const meals = computed(() => store.searchedMeals.data)

const searchMeals = () => {
  store.searchMeals(keyWord.value)
}

onMounted(() => {
  keyWord.value = route.params.name
  if (keyWord.value) {
    searchMeals()
  }
})

</script>

<template>
  <div class="p-4 pb-0 md:px-6 flex items-center justify-center">
    <input type="text" v-model="keyWord" @change="searchMeals" class="w-96 rounded-full border-2 border-gray-200"
      placeholder="Search for meals">
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-4 md:p-8">
    <MealCard v-for="meal of meals" :meal="meal" :key="meal.idMeal" />
  </div>
  <div v-if="!meals.length" class="flex justify-center text-black">
    <h1>There are no meals</h1>
  </div>
</template>