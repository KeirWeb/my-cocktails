<template>
  <div class="cocktail">
    <RouterLink :to="`/cocktail/${cocktail.idDrink}`">
      <div
        :style="`background-image: url(${cocktail.strDrinkThumb})`"
        class="pic"
      ></div>
      <div class="name">{{ cocktail.strDrink }}</div>
    </RouterLink>
  </div>
</template>

<script setup>
const props = defineProps({
  cocktail: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped lang="sass">
.cocktail
  width: 33%
  cursor: pointer

.pic
  width: 120px
  height: 120px
  margin: 0 auto
  background-repeat: no-repeat
  background-position: 50% 50%
  background-size: 100%
.name
  overflow: hidden
  margin-top: 15px
  letter-spacing: 0.1em
  text-align: center
</style>
