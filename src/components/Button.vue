<template>
  <button
    @click="$emit('btn-clicked')"
    :style="{ background: color }"
    class="btn"
  >
    <p v-show="text != 'add'">{{ text }}</p>
    <i class="fas fa-plus" v-show="text == 'add'"></i>
  </button>
</template>

<script>
export default {
  name: "Button",

  props: {
    text: String,
    color: String,
  },

  emits: ["btn-clicked"],
};
</script>