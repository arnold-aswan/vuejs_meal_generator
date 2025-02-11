import axiosClient from "@/axiosClient";
import { defineStore } from "pinia";

export const useMealStore = defineStore("meals", {
  state: () => ({
    meals: [],
    searchedMeals: {
      loading: false,
      data: [],
      error: null
    },
    mealsByLetter: {
      loading: false,
      data: [],
      error: null
    },
    mealsByIngredients: {
      loading: false,
      data: [],
      error: null
    },
  }),
  getters: {
    returnMeals: (state) => state.meals,
    returnSearchedMeals: (state) => state.searchedMeals
  },

  actions: {
    async searchMeals(keyword) {
      try {
        this.searchedMeals.loading = true
        const response = await axiosClient.get(`/search.php?s=${keyword}`)
        this.searchedMeals.data = response.data.meals
        this.searchedMeals.loading = false

      } catch (error) {
        this.searchedMeals.loading = false
        this.searchedMeals.error = error
        throw new Error(error)
      }
    },
    async getMealsByLetter(letter) {
      try {
        this.mealsByLetter.loading = true
        const response = await axiosClient.get(`/search.php?f=${letter}`)
        this.mealsByLetter.data = response.data.meals

        this.mealsByLetter.loading = false
      } catch (error) {
        this.mealsByLetter.loading = false
        this.mealsByLetter.error = error
        throw new Error(error)
      }
    },
    async getMealsByIngredient(ingredient) {
      try {
        this.mealsByLetter.loading = true
        const response = await axiosClient.get(`/filter.php?i=${ingredient}`)
        this.mealsByIngredients.data = response.data.meals
        console.log(response.data.meals)
        this.mealsByIngredients.loading = false
      } catch (error) {
        this.mealsByIngredients.loading = false
        this.mealsByIngredients.error = error
        throw new Error(error)
      }
    },
  },
})
