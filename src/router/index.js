import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";

import MealsByName from "@/views/MealsByName.vue";
import MealsByIngredients from "@/views/MealsByIngredients.vue";
import MealsByLetter from "@/views/MealsByLetter.vue";
import DefaultLayout from "@/components/DefaultLayout.vue";
import MealDetails from "@/views/MealDetails.vue";
import Ingredients from "@/views/Ingredients.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: DefaultLayout,
      children: [
        {
          path: "/",
          name: "home",
          component: HomeView
        },

        {
          path: "/by-name/:name?",
          name: "byName",
          component: MealsByName
        },
        {
          path: "/ingredients",
          name: "ingredients",
          component: Ingredients
        },
        {
          path: "/by-ingredient/:ingredient",
          name: "byIngredient",
          component: MealsByIngredients
        },
        {
          path: "/by-Letter/:letter?",
          name: "byLetter",
          component: MealsByLetter
        },
        {
          path: "/meal/:id?",
          name: "mealDetails",
          component: MealDetails
        }
      ]
    },
  ]
})

export default router