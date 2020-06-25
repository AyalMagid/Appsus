export default {
  template: `<div class="flex align-center">
      <input v-model="imgUrl"  placeholder="enter img url" />
      <button @click="addNote">Add Note</button>
      </div>`,
  data() {
    return {
      imgUrl:
        "https://scontent.foko1-1.fna.fbcdn.net/v/t1.0-9/104490397_1497359800435874_3286166808258794385_o.jpg?_nc_cat=111&_nc_sid=730e14&_nc_ohc=tlrSXfdDK6AAX9Ybpgk&_nc_ht=scontent.foko1-1.fna&oh=b440cd359f497443b65aeaf9591046c3&oe=5F197893",
    };
  },
  computed: {},
  methods: {
    addNote() {
      const type = "NoteImg";
      const note = { type, url: this.imgUrl };
      this.$emit("addnote", note);
    },
  },
};
