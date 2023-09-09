import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CocktailView from "../views/CocktailView.vue";
import RandomCocktailView from "../views/RandomCocktailView.vue";
import { ROUTES_PATHS } from "../constants/index";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: ROUTES_PATHS.HOME,
      name: ROUTES_PATHS.HOME,
      component: HomeView,
    },
    {
      path: ROUTES_PATHS.COCKTAIL_RANDOM,
      name: ROUTES_PATHS.COCKTAIL_RANDOM,
      component: RandomCocktailView,
    },
    {
      path: ROUTES_PATHS.COCKTAIL,
      name: ROUTES_PATHS.COCKTAIL,
      component: CocktailView,
    },
  ],
});

export default router;
