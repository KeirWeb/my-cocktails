import axios from "axios";
import { defineStore } from "pinia";
import { INGREDIENTS_URL, COCKTAILS_BY_INGREDIENT } from "../constants";

export const useRootStore = defineStore("root", {
  state: () => ({
    ingredients: [],
    ingredient: null,
    cocktails: [],
    cocktail: null,
  }),
  actions: {
    async getIngredients() {
      const data = await axios.get(INGREDIENTS_URL);
      this.ingredients = data?.data?.drinks;
    },
    async getCocktails(ingredient) {
      const data = await axios.get(
        `${COCKTAILS_BY_INGREDIENT}${ingredient.value}`
      );
      this.cocktails = data?.data?.drinks;
    },
    setIngredient(val) {
      this.ingredient = val;
    },
    async getCocktail(id) {
      const data = await axios.get(`${COCKTAILS_BY_ID_URL}${id}`);
      this.cocktail = data?.data?.drinks;
    },
  },
});
