export default {
  props: ["note", "buttonText"],
  template: `<div class="flex align-center">
        <textarea  v-model="content"  placeholder="enter content" />
        <button @click="addNote">{{buttonText}}</button>
        </div>`,
  data() {
    return {
      content: "",
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
