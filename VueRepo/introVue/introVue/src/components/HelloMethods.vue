<script>
export default {
  data() {},
  methods: {
    now: () => new Date(),
    showDate: () => {
      let date = new Date();
      alert(date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate());
    },
    showTime: () => {
      let time = new Date();
      let hour = "";
      let min = "";
      let sec = "";

      time.getHours() < 10
        ? (hour = "0" + time.getHours())
        : (hour = time.getHours());
      time.getMinutes() < 10
        ? (min = "0" + time.getMinutes())
        : (min = time.getMinutes());
      time.getSeconds() < 10
        ? (sec = "0" + time.getSeconds())
        : (sec = time.getSeconds());
      alert(hour + ":" + min + ":" + sec);
    },
  },
  name: "HelloMethods",
};
</script>
<template>
  <div class="date">
    <button v-on:click="showDate">showDate</button>
    <br />
    <button @click="showTime">showTime</button>
    <br />
    Дата: {{ now().getFullYear() }}-{{
      now().getMonth() < 10
        ? "0" + (now().getMonth() + 1)
        : now().getMonth() + 1
    }}
    -{{ now().getDate() < 10 ? "0" + now().getDate() : now().getDate() }}
    <br />
    Время:
    {{ now().getHours() < 10 ? "0" + now().getHours() : now().getHours() }}
    :
    {{
      now().getMinutes() < 10 ? "0" + now().getMinutes() : now().getMinutes()
    }}
    :
    {{
      now().getSeconds() < 10 ? "0" + now().getSeconds() : now().getSeconds()
    }}
  </div>
</template>
