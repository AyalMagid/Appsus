export default {
  props: ["note", "buttonText"],
  template: `
  <div class="add-img-note-container ">
    <div>
      <img  class="add-image-note-image" :src="imgUrl">
    </div>
    <div class="image-note-add-container">
    <input class="title-input"  v-model="imgUrl"  placeholder="enter img url" />
      <label class="title-label">Enter Image URL</label>
      <i @click="addNote" :class="buttonText"></i>
      </div>
    </div>
  </div>`,
  data() {
    return {
      imageLoaded: false,
      imgUrl:
        "https://scontent.foko1-1.fna.fbcdn.net/v/t1.0-9/69732911_1237501543088369_7210119499972870144_o.jpg?_nc_cat=111&_nc_sid=19026a&_nc_ohc=J5XxJxcMSj8AX9RyL_h&_nc_ht=scontent.foko1-1.fna&oh=673f93861024a5dfb3e2a120ae36c0ce&oe=5F1D230C",
    };
  },
  created() {
    if (this.note) {
      this.imgUrl = this.note.info.url;
      this.imageLoaded = true;
    }
  },
  computed: {
    imageLoadedComputed() {
      return this.imageLoaded;
    },
  },
  methods: {
    addNote() {
      const type = "ImgNote";
      const note = { type, url: this.imgUrl };
      if (this.note) {
        note.id = this.note.id;
      }
      this.$emit("addnote", note);
    },
  },
};
