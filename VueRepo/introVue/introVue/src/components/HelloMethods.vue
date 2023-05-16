<script>
export default {
  data() {
    return {
      date: new Date(),
      name: "иван",
      surn: "иванов",
    };
  },
  methods: {
    showMessage: function (msg) {
      alert(msg);
    },
    showUser: function () {
      let user = this.cape(this.surn) + " " + this.cape(this.name);
      alert(user);
    },
    cape: function (str) {
      return str[0].toUpperCase() + str.slice(1);
    },
    getThisDate: function () {
      alert(this.date);
    },
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
    <button @click="getThisDate">this.date</button>
    <br />
    <button @click="showUser">show user</button>
    <br />
    <button @click="showMessage('message')">showMessage</button>
    <br />
  </div>
</template>
