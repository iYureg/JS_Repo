<script>
export default {
  data() {
    return {
      visible: true,
    };
  },
  methods: {
    changeCondition: function () {
      if (this.visible) this.visible = false;
      else this.visible = true;
    },
    showButtonText: function () {
      if (this.visible) return "скрыть";
      else return " читать дальше...";
    },
  },
  name: "Visible",
};
</script>

<template>
  <div class="visible">
    <h3>--- Show/Hide text ---</h3>
    <p>
      Lorem, ipsum<span v-if="visible">
        dolor sit amet consectetur adipisicing elit. Expedita nam inventore eius
        sed, dolore saepe, porro veniam odio totam adipisci voluptate ut tenetur
        quam minima, ea aliquam ipsa eos. Perferendis!</span
      ><a class="showHide" href="" @click.prevent="changeCondition">{{
        showButtonText()
      }}</a>
    </p>
  </div>
</template>
<style>
.visible {
  text-align: center;
}
.showHide {
  font-size: 10px;
}
</style>
