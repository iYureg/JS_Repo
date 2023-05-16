<script>
export default {
  data() {
    return {
      text: " text ",
    };
  },
  methods: {
    change1: function () {
      this.text = " туда ";
    },
    change2: function () {
      this.text = " суда ";
    },
  },
  name: "Reactivity",
};
</script>
<template>
  <p>
    <button @click="change1">туда</button>
    <span class="text"> {{ text }} </span>
    <button @click="change2">суда</button>
  </p>
</template>

<style>
.text {
  font: bold 19px "Comic Sans";
}
</style>
