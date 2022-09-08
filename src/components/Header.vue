<template>
  <header>
    <div class="header-content">
      <h1>{{ title }}</h1>
      <router-link to="/about" v-show="isHome">
        <Button text="About" />
      </router-link>
      <router-link to="/" v-show="isNotHome">
        <Button text="Home" />
      </router-link>
    </div>
  </header>
</template>

<script>
import Button from "./Button.vue";
export default {
  name: "Header",

  props: {
    title: String,
  },

  components: { Button },

  emits: ["btn-clicked"],

  computed: {
    isHome() {
      if (this.$route.path === "/") {
        return true;
      } else {
        return false;
      }
    },
    isNotHome() {
      if (this.$route.path === "/") {
        return false;
      } else {
        return true;
      }
    },
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}
header {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
}
.header-content {
  max-width: 768px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  background: #fff;
  padding: 20px;
  border-bottom: 1px solid #00000037;
}
</style>