<template>
  <codemirror v-model="code" :options="cmOptions"></codemirror>
</template>

<script>
import { codemirror } from 'vue-codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/base16-dark.css';
import 'codemirror/mode/javascript/javascript.js'

export default {
  data: function() {
    return {
      code: "const a = 10;",
      cmOptions: {
        tabSize: 2,
        mode: 'text/javascript',
        theme: 'base16-dark',
        lineNumbers: true,
        line: true,
      },
    };
  },
  components: {
    codemirror,
  }
}
</script>

