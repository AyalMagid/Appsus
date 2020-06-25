export default {
  props: ["note"],
  template: `<div class="flex align-center">
        <input v-model="content"  placeholder="enter img url" />
        <button @click="addNote">Add Note</button>
        </div>`,
  data() {
    return {
      content: "lorem ipsum",
    };
  },
  created() {
    if (this.note) {
      this.content = this.note.info.content;
    }
  },
  computed: {},
  methods: {
    addNote() {
      const type = "TextNote";
      const note = { type, content: this.content };
      if (this.note) {
        note.id = this.note.id;
      }
      this.$emit("addnote", note);
    },
  },
};
