<script>
export default {
  data() {
    return {
      var1: 1,
      var2: 2,
      num3: 3,
      pow: 3,
    };
  },
  name: "MathComp",
};
</script>
<template>
  <div class="math">
    {{ var1 }}<span class="red"> + </span> {{ var2 }} = {{ var1 + var2 }}
    <br />
    {{ var1 }}<span class="red"> - </span> {{ var2 }} = {{ var1 - var2 }}
    <br />
    {{ var1 }}<span class="red"> * </span> {{ var2 }} = {{ var1 * var2 }}
    <br />
    {{ var1 }}<span class="red"> : </span> {{ var2 }} = {{ var1 / var2 }}
    <br />
    {{ num3 }} в квадрате = {{ num3 ** var2 }}
    <br />
    {{ num3 }} в кубе = {{ Math.pow(num3, pow) }}
  </div>
</template>

<style>
.red {
  color: red;
}
.math {
  margin: 10px;
  text-align: center;
}
</style>
