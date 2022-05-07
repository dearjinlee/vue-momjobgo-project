<template>
  <v-container>
    <div id="app">
      <h3>Vue.js 계산기</h3>
      <input type="number" v-model="number1" /><br />
      <input type="number" v-model="number2" /><br />
      <input type="number" v-model="number3" /><label
        >&nbsp{{ this.calculate }}</label
      ><br />
      <button v-on:click="addition">[&nbsp+&nbsp</button>
      <button v-on:click="subtraction">&nbsp-&nbsp</button>
      <button v-on:click="multiplication">&nbsp*&nbsp</button>
      <button v-on:click="division">&nbsp/&nbsp]</button>
    </div>
  </v-container>
</template>

<script>
// TODO : import { mapActions } from "vuex";
export default {
  name: "HelloWorld",

  data: () => ({
    number1: 0,
    number2: 0,
    number3: 0,
    calculate: "계산",
  }),
  methods: {
    // TODO : ...mapActions(['actionAdd']),
    addition() {
      this.calculate = "덧셈";
      this.number3 = parseFloat(this.number1) + parseFloat(this.number2);
    },
    subtraction() {
      this.calculate = "뺄셈";
      this.number3 = parseFloat(this.number1) - parseFloat(this.number2);
    },
    multiplication() {
      this.calculate = "곱셈";
      this.number3 = parseFloat(this.number1) * parseFloat(this.number2);
    },
    division() {
      this.calculate = "나눗셈";
      this.number3 = parseFloat(this.number1) / parseFloat(this.number2);
    },
  },
};
</script>
