export default {
  props: ["note", "buttonText", "urlContent"],
  template: `
  <div class="add-text-note-container">
    <textarea  class="title-input" v-model="content"  placeholder="enter content" />
    <label class="title-label">Enter Contnet</label>
    <i @click="addNote" :class="buttonText"></i>
  </div>`,
  data() {
    return {
      content: "",
    };
  },
  created() {
    if (this.note) {
      this.content = this.note.info.content;
      return;
    }
    if (this.urlContent) {
      this.content = this.urlContent;
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
