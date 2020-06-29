export default {
  props: ["note", "buttonText"],
  template: `
  <div class="add-video-note-container">
    <div class="add-video-content-container">
      <iframe :src="iFrameUrl"></iframe>
    </div>
    <div style="position:relative">
    <input class="title-input"  v-model="videoUrl"  placeholder="enter video url" />
    <label class="title-label">Enter Video URL</label>
    </div>
      <i @click="addNote" class="add-note-btn" :class="buttonText"></i>
  </div>`,
  data() {
    return {
      videoUrl: "https://www.youtube.com/watch?v=syG7ljxqzNg",
    };
  },
  created() {},
  computed: {
    iFrameUrl() {
      if (this.note) {
        return this.note.info.url;
      } else {
        return this.videoUrl.replace("watch?v=", "embed/");
      }
    },
  },
  methods: {
    addNote() {
      const videoUrl = this.videoUrl.replace("watch?v=", "embed/");
      const type = "VideoNote";
      const note = { type, url: videoUrl };
      console.log(this.note);
      if (this.note) {
        note.id = this.note.id;
      }
      this.$emit("addnote", note);
    },
  },
};
