<template>
  <Header title="Note Taking App" />

  <router-view></router-view>

  <Footer @btn-clicked="btnClick" />
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",

  methods: {
    btnClick() {
      console.log("btnClick");
    },
  },

  components: { Header, Footer },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap");

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body {
  padding: 90px 0;
  font-family: "Poppins", sans-serif;
  background: #ffffff;
}
.btn-block {
  display: block;
  width: 100%;
}
.btn {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  font-family: inherit;
  font-size: 1em;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
}
.btn i {
  font-size: 2.2em;
}
.btn:focus {
  outline: none;
}
.btn:active {
  transform: scale(0.98);
}
</style>