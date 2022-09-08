<template>
  <Notes
    @toggle-starred="toggleStarred"
    @delete-note="deleteNote"
    :notes="this.notes"
  />
</template>

<script>
import Notes from "@/components/Notes.vue";
// @ is an alias to /src
export default {
  name: "HomeView",

  data() {
    return {
      notes: [],
    };
  },

  methods: {
    async deleteNote(id) {
      if (confirm("Are you sure you want to delete?")) {
        const res = await fetch(`api/notes/${id}`, {
          method: "DELETE",
        });

        res.status === 200
          ? (this.notes = this.notes.filter((note) => note.id !== id))
          : alert("Error deleting note!");
      }
    },

    async toggleStarred(id) {
      const clickedNote = await this.fetchNote(id);
      const updatedNote = { ...clickedNote, starred: !clickedNote.starred };

      const res = await fetch(`api/notes/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedNote),
      });
      const data = await res.json();

      this.notes = this.notes.map((note) =>
        note.id === id ? { ...note, starred: data.starred } : note
      );
    },

    async fetchNotes() {
      const res = await fetch("api/notes");
      const data = await res.json();
      return data;
    },

    async fetchNote(id) {
      const res = await fetch(`api/notes/${id}`);
      const data = res.json();
      return data;
    },
  },

  async created() {
    this.notes = await this.fetchNotes();
  },

  components: { Notes },
};
</script>
