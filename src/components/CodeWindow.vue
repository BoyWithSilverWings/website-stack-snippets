<template>
  <textarea ref="codeinstance"></textarea>
</template>

<script>
import CodeMirror from "codemirror";
import emmet from '@emmetio/codemirror-plugin';
import 'codemirror/addon/hint/show-hint.css';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/dracula.css';
import 'codemirror/mode/xml/xml.js';
import 'codemirror/mode/css/css.js';
import 'codemirror/mode/javascript/javascript.js';
import 'codemirror/addon/hint/show-hint.js';
import 'codemirror/addon/hint/html-hint.js';
import 'codemirror/addon/hint/css-hint.js';
import 'codemirror/addon/hint/javascript-hint.js';

export default {
  props: {
    value: String,
    codeMode: String,
  },
  data: function() {
    return {
    };
  },
  mounted: function() {
    emmet(CodeMirror);
    const textarea = this.$refs.codeinstance;
    const instance = CodeMirror.fromTextArea(textarea, {
      value: this.value,
      tabSize: 2,
      theme: 'dracula',
      mode: this.codeMode,
      lineWrapping: true,
      extraKeys: {
        "Ctrl-Space": "autocomplete",
        'Tab': 'emmetExpandAbbreviation',
		    'Enter': 'emmetInsertLineBreak',
      },
      lineNumbers: true,
      line: true,
    });
    instance.on("change", this.onCodeChange);
  },
  methods: {
    onCodeChange: function(instance, changes) {
      const value = instance.getValue();
      this.$emit("input", value);
    },
  }
}
</script>

<style>
  .CodeMirror {
    height: 100%;
    max-width: 100%;
  }
</style>


