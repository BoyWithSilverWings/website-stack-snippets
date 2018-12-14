<template>
  <div>
  <codemirror :value="value" :options="cmOptions" @input="onCodeChange"></codemirror>
  </div>
</template>

<script>
import { codemirror } from 'vue-codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/dracula.css';
import 'codemirror/mode/xml/xml.js';
import 'codemirror/mode/css/css.js';
import 'codemirror/mode/javascript/javascript.js';

export default {
  props: {
    value: String,
    codeMode: String,
  },
  data: function() {
    return {
      cmOptions: {
        tabSize: 2,
        theme: 'dracula',
        mode: this.codeMode,
        lineNumbers: true,
        line: true,
      },
    };
  },
  components: {
    codemirror,
  },
  methods: {
    onCodeChange: function(value) {
      this.$emit("input", value);
    },
  }
}
</script>

