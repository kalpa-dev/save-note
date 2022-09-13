<template>
  <section
    @dblclick="$emit('toggle-starred', note.id)"
    :class="[note.starred ? 'starred' : '']"
  >
    <h3>
      {{ note.title }}
      <div>
        <router-link :to="'/edit/' + note.id">
          <i class="fa-solid fa-pencil"></i>
        </router-link>
        <i @click="$emit('delete-note', note.id)" class="fa-solid fa-times"></i>
      </div>
    </h3>
    <p>{{ note.text }}</p>
    <div class="note-footer">
      <span><i class="fa-solid fa-calendar-days"></i> {{ note.day }}</span>
      <i class="fa-solid fa-star"></i>
    </div>
  </section>
</template>

<script>
export default {
  name: "Note",

  props: {
    note: Object,
  },

  emits: ["delete-note", "toggle-starred"],
};
</script>

<style scoped>
section {
  word-wrap: break-word;
  word-break: normal;
  padding: 20px;
  background: #f1f1f1;
  border-radius: 10px;
  margin: 10px;
}
a {
  text-decoration: none;
}
h3 {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 0;
}
h3 div {
  width: 100px;
  display: flex;
  justify-content: end;
  align-items: center;
}
h3 i {
  padding: 5px 10px;
  font-size: 1em;
  margin-left: 10px;
  border-radius: 5px;
  cursor: pointer;
}
h3 i:active {
  transform: scale(0.8);
}
h3 .fa-times {
  background: #ff5c5c;
}
h3 a .fa-pencil {
  background: #a1a1ff;
}
h3 .fa-times:hover {
  background: #ff4040;
}
h3 a .fa-pencil:hover {
  background: #7070ff;
}
p {
  margin: 15px auto;
  width: 90%;
  white-space: pre-line;
}
.note-footer {
  font-size: 0.9em;
  color: #777;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.note-footer span i {
  padding: 0 5px;
}
section .fa-star {
  display: none;
}
section.starred .fa-star {
  display: block;
}
</style>