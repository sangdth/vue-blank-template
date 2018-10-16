<template>
  <div class="home">
    <h2>Vue Blank Template</h2>
    <ul class="feature-list">
      <li class="item">Vue 2.5.17</li>
      <li class="item">Axios, Element UI, VeeValidate, Vue i18n, Router, Vuex</li>
      <li class="item">ESLint, PWA</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  components: {},
};
</script>

<style lang="scss" scoped>
.feature-list {
  .item {
    list-style-type: none;
  }
}
</style>
