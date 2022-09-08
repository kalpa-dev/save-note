<template>
  <footer>
    <div class="footer-content">
      <p :class="[isHome ? '' : 'add-padding']">
        Copyright <i class="fa-regular fa-copyright"></i> 2022 | Made with
        <i class="fa-regular fa-heart"></i> by
        <a href="https://github.com/kalpa-dev">Kalpa kavindu</a>
      </p>
      <router-link to="/add" v-show="isHome">
        <Button @btn-clicked="$emit('btn-clicked')" text="add" color="green" />
      </router-link>
    </div>
  </footer>
</template>

<script>
import Button from "./Button.vue";
export default {
  name: "Footer",

  emits: ["btn-clicked"],

  components: { Button },

  computed: {
    isHome() {
      if (this.$route.path === "/") {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}
.btn {
  position: relative;
  bottom: 40px;
  padding: 20px;
  right: 10px;
  border-radius: 50%;
}
footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  min-height: 80px;
}
.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 768px;
  padding: 0 20px;
  margin: auto;
  border-top: 1px solid #00000037;
  background: #fff;
}
.footer-content p {
  width: 75%;
}
.footer-content p.add-padding {
  width: 100%;
  text-align: center;
  padding: 20px 0;
}
</style>