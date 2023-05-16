<script>
export default {
  data() {
    return {
      name: "ivan",
      surn: "ivanov",
    };
  },
  computed: {
    full: function () {
      return this.name + " " + this.surn;
    },
  },

  name: "Computed",
};
</script>
<template>
  <p><i> --- Computed --- </i></p>
  <p>{{ name }}</p>
  <p>{{ surn }}</p>
  <p>{{ full }}</p>
</template>

<style></style>
