<template>
  <div :key="note.id" v-for="note in notes">
    <Note
      @toggle-starred="$emit('toggle-starred', note.id)"
      @delete-note="$emit('delete-note', note.id)"
      :note="note"
    />
  </div>
</template>

<script>
import Note from "./Note.vue";
export default {
  name: "Notes",

  props: {
    notes: Array,
  },

  components: { Note },

  emits: ["delete-note", "toggle-starred"],
};
</script>

<style scoped>
div {
  max-width: 730px;
  margin: 0 auto;
}
</style>