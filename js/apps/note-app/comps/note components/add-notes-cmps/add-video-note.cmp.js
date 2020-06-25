export default {
  props: ["note"],
  template: `<div class="flex align-center">
      <input v-model="videoUrl"  placeholder="enter video url" />
      <button @click="addNote">Add Note</button>
      </div>`,
  data() {
    return {
      videoUrl: "https://www.youtube.com/watch?v=1oZCXOahdFo",
    };
  },
  created() {},
  computed: {},
  methods: {
    addNote() {
      const videoUrl = this.videoUrl.replace("watch?v=", "embed/");
      const type = "VideoNote";
      const note = { type, url: videoUrl };
      console.log(this.note);
      if (this.note) {
        note.id = this.note.id;
      }
      console.log(note);
      this.$emit("addnote", note);
    },
  },
};
