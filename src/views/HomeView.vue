<template>
  <AppLayout
    ImgBg="/src/assets/img/bg-1.jpg"
    :goBack="removeCocktails"
    :isBackBtnVisible="ingredient"
  >
    <div class="wrapper">
      <div class="info" v-if="!ingredient">
        <h1 class="title">Choose your drink</h1>
        <div class="line"></div>
        <el-select
          v-model="ingredient"
          @change="getCocktails()"
          class="select"
          filterable
          allow-create
          placeholder="Choose main ingredient"
          size="large"
        >
          <el-option
            v-for="item in ingredients"
            :key="item.strIngredient1"
            :label="item.strIngredient1"
            :value="item.strIngredient1"
          />
        </el-select>
        <div class="text t">
          Try our delicious cocktail recipes for every occasion. Find delicious
          cocktail recipes by ingredient through our cocktail generator.
        </div>
        <img class="img" src="../assets//img//cocktails.png" alt="cocktails" />
      </div>
      <div class="info" v-else>
        <h1 class="title">COCKTAILS WITH {{ ingredient }}</h1>
        <div class="line"></div>
        <div class="cocktails">
          <ThumbCocktail
            v-for="cocktail in cocktails"
            :key="cocktail.idDrink"
            :cocktail="cocktail"
          />
        </div>
      </div>
    </div>
  </AppLayout>
</template>

<script setup>
import AppLayout from "../components/AppLayout.vue";
import { useRootStore } from "../stores/root";

import { storeToRefs } from "pinia";
import ThumbCocktail from "../components/ThumbCocktail.vue";

const rootStore = useRootStore();
const { ingredients, ingredient, cocktails } = storeToRefs(rootStore);

rootStore.getIngredients();

function getCocktails() {
  rootStore.getCocktails(ingredient);
}
function removeCocktails() {
  rootStore.setIngredient(null);
}
</script>

<style lang="sass" scoped>
@import '../assets/styles/main.sass'

.select
  margin-top: 50px
  box-sizing: border-box
.text
  margin-top: 50px
  max-width: 516px
.img
  margin-top: 60px
.cocktails
  display: flex
  justify-content: space-between
  row-gap: 60px
  align-items: center
  flex-wrap: wrap
  max-height: 400px
  overflow-y: auto
  margin-top: 60px
</style>
