<script>
export default {
  data() {
    return {
      var1: 1,
      var2: 2,
    };
  },
  name: "MathComp",
};
</script>
<template>
  <div class="content">
    {{ var1 }}<span class="red"> + </span> {{ var2 }} = {{ var1 + var2 }}
    <br />
    {{ var1 }}<span class="red"> - </span> {{ var2 }} = {{ var1 - var2 }}
    <br />
    {{ var1 }}<span class="red"> * </span> {{ var2 }} = {{ var1 * var2 }}
    <br />
    {{ var1 }}<span class="red"> : </span> {{ var2 }} = {{ var1 / var2 }}
  </div>
</template>

<style>
.red {
  color: red;
}
.content {
  text-align: center;
}
</style>
