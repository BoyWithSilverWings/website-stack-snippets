<template>
  <div class="app">
    <div class="option-bar grid-item">
      <toolbar v-on:save="saveTemplate"></toolbar>
    </div>
    <div class="html-code grid-item">
      <code-window
        code-mode="text/html"
        v-model="html"></code-window>
    </div>
    <div class="css-code grid-item">
      <code-window
        code-mode="text/css"
        v-model="css"></code-window>
    </div>
    <div class="js-code grid-item">
      <code-window
        code-mode="javascript"
        v-model="javascript"></code-window>
    </div>
    <div class="result grid-item">
      <iframe :srcdoc="completeCode" height="100%" width="100%" frameborder="0"></iframe>
    </div>
  </div>
</template>

<script>
import * as Babel from "@babel/standalone";
import CodeWindow from "../components/CodeWindow.vue";
import ToolBar from '../components/ToolBar.vue';

export default {
  name: 'home',
  data: function() {
    return {
      html: "",
      css: "",
      javascript: "",
    }
  },
  components: {
    'code-window': CodeWindow,
    'toolbar': ToolBar,
  },
  computed: {
    completeCode: function() {
      return `
        <html>
          <style>${this.css}</style>
          <body>
            ${this.html}
            <pre>${Babel.transform(this.javascript, {presets: ['es2015']}).code}</pre>
            <script>
              ${this.javascript}
            <\/script>
          </body>
        </html>
      `;
    }
  },
  methods: {
    saveTemplate: function() {
      const templateFormat = `<!-- begin snippet: js hide: false console: true babel: false -->

      <!-- language: lang-js -->

          ${this.javascript}

      <!-- language: lang-css -->

          ${this.css}

      <!-- language: lang-html -->

          ${this.html}

      <!-- end snippet -->`;
    }
  }
}
</script>

<style scoped>
  .app {
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 6rem 1fr 1fr;
    height: 100vh;
  }

  .grid-item {
    border: 1px solid #cccccc;
  }

  .option-bar {
    grid-row: 1 / span 2;
  }
</style>
