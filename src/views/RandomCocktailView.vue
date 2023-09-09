<template>
  <AppLayout :ImgBg="cocktail.strDrinkThumb">
    <div class="wrapper">
      <div class="info">
        <h1 class="title">{{ cocktail.strDrink }}</h1>
        <div class="line"></div>
        <div class="slider">
          <swiper :slides-per-view="3" :space-between="110" class="swiper">
            <swiper-slide v-for="(ingredient, key) in ingredients" :key="key"
              ><img
                class="swiper__img"
                :src="`${INGREDIENT_IMG}${ingredient}-Small.png`"
              />
              <div class="name">{{ ingredient }}</div></swiper-slide
            >
          </swiper>
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
import { computed, ref } from "vue";
import { RANDOM_COCKTAIL, INGREDIENT_IMG } from "../constants";
import axios from "axios";

import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";

const cocktail = ref(null);

async function getRandomCocktail() {
  const data = await axios.get(RANDOM_COCKTAIL);
  cocktail.value = data?.data?.drinks[0];
  console.log(cocktail);
}

const ingredients = computed(() => {
  const ingredients = [];
  for (let i = 1; i <= 15; i++) {
    if (!cocktail.value[`strIngredient${i}`]) break;
    const ingredient = cocktail.value[`strIngredient${i}`];
    ingredients.push(ingredient);
  }
  return ingredients;
});

getRandomCocktail();
</script>

<style lang="sass" scoped>
.instructions
  max-width: 516px
  margin-top: 80px

.slider
  padding: 50px 0
.swiper
  width: 586px
.name
  padding-top: 22px
  line-height: 22px
  letter-spacing: 0.1em
  text-align: center
</style>
