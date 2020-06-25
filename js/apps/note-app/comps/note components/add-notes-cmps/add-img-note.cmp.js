export default {
  props: ["note"],
  template: `<div :style="note.style" class="flex align-center">
  <img height="50px" :src="imgUrl">
      <input v-model="imgUrl"  placeholder="enter img url" />
      <button @click="addNote">Add Note</button>
      </div>`,
  data() {
    return {
      imgUrl:
        "https://scontent.foko1-1.fna.fbcdn.net/v/t1.0-9/104490397_1497359800435874_3286166808258794385_o.jpg?_nc_cat=111&_nc_sid=730e14&_nc_ohc=tlrSXfdDK6AAX9Ybpgk&_nc_ht=scontent.foko1-1.fna&oh=b440cd359f497443b65aeaf9591046c3&oe=5F197893",
    };
  },
  created() {
    if (this.note) {
      this.imgUrl = this.note.info.url;
    }
  },
  computed: {},
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
