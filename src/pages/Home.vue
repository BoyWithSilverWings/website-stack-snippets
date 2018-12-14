<template>
  <div class="app">
    <div class="option-bar grid-item">
    </div>
    <div class="html-code grid-item">
      <code-window></code-window>
    </div>
    <div class="css-code grid-item"></div>
    <div class="js-code grid-item"></div>
    <div class="result grid-item"></div>
  </div>
</template>

<script>
import CodeWindow from "../components/CodeWindow.vue";

export default {
  name: 'home',
  components: {
    'code-window': CodeWindow,
  }
}
</script>

<style scoped>
  .app {
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 5rem 1fr 1fr;
    height: 100vh;
  }

  .grid-item {
    border: 1px solid #cccccc;
  }

  .option-bar {
    grid-row: 1 / span 2;
  }
</style>
