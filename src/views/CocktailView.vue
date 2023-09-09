<template>
  <AppLayout :ImgBg="cocktail.strDrinkThumb">
    <div class="wrapper">
      <div class="info">
        <h1 class="title">{{ cocktail.strDrink }}</h1>
        <div class="line"></div>
        <div class="list">
          <div
            v-for="ingredient in ingredients"
            :key="ingredient.name"
            class="list-item"
          >
            {{ ingredient.name }} | {{ ingredient.measure }}
          </div>
        </div>
        <div class="instructions t">
          {{ cocktail.strInstructions }}
        </div>
      </div>
    </div>
  </AppLayout>
</template>

<script setup>
import AppLayout from "../components/AppLayout.vue";
import { useRoute, useRouter } from "vue-router";
import { computed, ref } from "vue";
import { COCKTAIL_BY_ID } from "../constants/api";
import axios from "axios";

const cocktail = ref(null);

const route = useRoute();
const router = useRouter();
const cocktailId = computed(() => route.path.split("/").pop());

async function getCocktail() {
  const data = await axios.get(`${COCKTAIL_BY_ID}${cocktailId.value}`);
  cocktail.value = data?.data?.drinks[0];
}

const ingredients = computed(() => {
  const ingredients = [];
  for (let i = 1; i <= 15; i++) {
    if (!cocktail.value[`strIngredient${i}`]) break;

    const ingredient = {};
    ingredient.name = cocktail.value[`strIngredient${i}`];
    ingredient.measure = cocktail.value[`strMeasure${i}`];

    ingredients.push(ingredient);
  }
  return ingredients;
});
getCocktail();
</script>

<style lang="sass" scoped>
.list
  width: 560px
  padding: 50px 0 80px
  text-align: left
  &-item
    position: relative
    margin-bottom: 20px
    padding-left: 30px

    &:last-child
      margin-bottom: 0
    &::before
      content:''
      position: absolute
      top: 50%
      left: 0
      transform: translateY(-50%)
      width: 17px
      height: 17px
      background: url('/src/assets/img/heart.svg') no-repeat 50% 50%
.instructions
  max-width: 516px
  margin-top: 80px
</style>
