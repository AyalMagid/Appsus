export default {
  template: `<div class="flex align-center">
        <input v-model="content"  placeholder="enter img url" />
        <button @click="addNote">Add Note</button>
        </div>`,
  data() {
    return {
      content: "lorem ipsum",
    };
  },
  computed: {},
  methods: {
    addNote() {
      const type = "NoteText";
      const note = { type, content: this.content };
      this.$emit("addnote", note);
    },
  },
};
