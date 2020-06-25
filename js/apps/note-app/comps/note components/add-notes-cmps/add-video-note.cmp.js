export default {
  template: `<div class="flex align-center">
      <input v-model="videoUrl"  placeholder="enter video url" />
      <button @click="addNote">Add Note</button>
      </div>`,
  data() {
    return {
      videoUrl: "https://www.youtube.com/watch?v=1oZCXOahdFo",
    };
  },
  computed: {},
  methods: {
    addNote() {
      const videoUrl = this.videoUrl.replace("watch?v=", "embed/");
      const type = "NoteVideo";
      const note = { type, url: videoUrl };
      this.$emit("addnote", note);
    },
  },
};
