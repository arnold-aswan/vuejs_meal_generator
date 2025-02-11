<script setup>
import { onMounted, ref } from "vue";
import { useMealStore } from "@/store"
import axiosClient from "@/axiosClient";

const store = useMealStore()
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const ingredients = ref([])

onMounted(async () => {
  const response = await axiosClient.get("/list.php?i=list")
  const data = response.data

  ingredients.value = data
  console.log(data)
})

</script>

<template>
  <div class="flex flex-col p-8 items-center justify-center">
    <input type="text" class="w-96 rounded-full border-2 border-gray-200" placeholder="Search for meals">

    <div class="flex justify-center gap-5 mt-5">
      <router-link v-for="letter of letters.split('')" :key="letter" :to="{ name: 'byLetter', params: { letter } }">{{
        letter
        }}</router-link>
    </div>
  </div>

</template>
