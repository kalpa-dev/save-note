<template>
  <section>
    <form @submit="saveNote">
      <div class="form-control">
        <label>Note Title</label>
        <input
          v-model="title"
          type="text"
          placeholder="Add title"
          name="title"
        />
      </div>
      <div class="form-control">
        <label>Note</label>
        <textarea
          v-model="text"
          name="note"
          placeholder="Type here..."
        ></textarea>
      </div>
      <input type="submit" value="Save Note" class="btn btn-block" />
    </form>
  </section>
</template>

<script>
export default {
  name: "AddNoteView",

  data() {
    return {
      title: "",
      text: "",
      day: "",
      starred: false,
    };
  },

  methods: {
    async saveNote(e) {
      e.preventDefault();

      if (!this.text || !this.title) {
        alert("Please add the note data");
        return;
      }

      const d = new Date();
      const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
      const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
      const t = () => {
        if (d.getHours() - 12 > 9) {
          return `${d.getHours() - 12}:${d.getMinutes()}`;
        } else {
          return `0${d.getHours() - 12}:${d.getMinutes()}`;
        }
      };
      const time = () => {
        if (d.getHours() < 12) {
          return `${t()}am`;
        } else {
          return `${t()}pm`;
        }
      };
      const dateNum = () => {
        if (d.getDate() < 10) {
          return `0${d.getDate()}`;
        } else {
          return `${d.getDate()}`;
        }
      };
      const date = `${days[d.getDay()]}, ${dateNum()} ${
        months[d.getMonth()]
      } - ${time()}`;

      const newNote = {
        title: this.title,
        text: this.text,
        starred: this.starred,
        day: date,
      };

      await fetch("api/notes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newNote),
      });

      this.title = "";
      this.text = "";
      this.day = "";
      this.$router.push({ name: "home" });
    },
  },
};
</script>

<style scoped>
section {
  max-width: 730px;
  margin: 10px auto;
  flex-direction: column;
}
.btn {
  margin: 10px 0;
}
form {
  width: 100%;
  padding: 0;
  margin: 0;
}
.form-control {
  margin: 20px 0;
}
.form-control input,
.form-control textarea {
  display: block;
  width: 100%;
  padding: 10px 15px;
  font-size: 1em;
  font-family: inherit;
  border: none;
  border-radius: 5px;
  background: #f1f1f1;
}
textarea {
  min-height: 240px;
}
</style>