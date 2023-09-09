<template>
  <div class="root">
    <div class="img"></div>
    <div class="main">
      <div class="btns">
        <el-button
          @click="goBack"
          type="primary"
          :icon="Back"
          circle
          class="back"
          v-if="isBackBtnVisible"
        />
        <el-button @click="goForCocktailRandom" class="btn"
          >Get random cocktail
        </el-button>
      </div>

      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { useRouter, useRoute } from "vue-router";
import { Back } from "@element-plus/icons-vue";
import { ROUTES_PATHS } from "../constants/index";
import { computed } from "vue";
import "../assets/img/bg.jpg";

const router = useRouter();
const route = useRoute();

const routeName = computed(() => route.name);

function goForCocktailRandom() {
  router.push(ROUTES_PATHS.COCKTAIL_RANDOM);
  if (routeName.value === ROUTES_PATHS.COCKTAIL_RANDOM) {
    router.go();
  }
}

function goBack() {
  props.goBack ? props.goBack() : router.go(-1);
}

const props = defineProps({
  ImgBg: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  goBack: {
    type: Function,
  },
  isBackBtnVisible: {
    type: Boolean,
    default: true,
  },
});
</script>

<style scoped lang="sass">
@import '../assets/styles/main'

.root
  display: flex
  flex-direction: row
  height: 100vh
  background-color: $background
.img
  background-image: url(../assets/img/bg.jpg)
  width: 50%
  background-repeat: no-repeat
  background-size: cover
  background-position: 50% 50%
.main
  display: flex
  flex-direction: column
  width: 50%
  padding: 32px 40px


.btn
  position: absolute
  top: 32px
  right: 40px
  background-color: $accent
  color: $text
  border: none
  font-size: 16px
  font-family: 'Raleway', sans-serif
  font-weight: 400

  &:hover,
  &:active
    background-color: darken($accent,10% )
    color: darken($text, 10%)
.back
  background-color: inherit
  border-color: #fff
  &:hover
    border-color:$accent
    transition: border-color 0.3s
.btns
  display: flex
  justify-content: space-between
  align-items: center
</style>
