<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <div class="button-chooser">
      Welches Web-Framework würden Sie für ein neues Projekt wählen?
      <ch-button-chooser-component
        v-bind:choices-string="choices"
        v-on:valueChanged="valueChanged"
      >
      </ch-button-chooser-component>
      <div class="answer">Gewählte Antwort: {{ answer }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      choices: "Angular, Vue.js, React",
      answer: "",
    };
  },
  methods: {
    valueChanged: function (event) {
      this.answer = event.detail;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.button-chooser {
  text-align: left;
}
.answer {
  margin-top: 5px;
}
</style>
