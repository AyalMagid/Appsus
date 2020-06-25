import AddImgNote from "./note components/add-notes-cmps/add-img-note.cmp.js";
import AddListNote from "./note components/add-notes-cmps/add-list-note.cmp.js";
import AddVideoNote from "./note components/add-notes-cmps/add-video-note.cmp.js";
import AddTextNote from "./note components/add-notes-cmps/add-text-note.cmp.js";
import { notesService } from "../services/note-service.js";
export default {
  props: ["noteType"],
  template: `<div class="flex align-center">
  <input type="text" v-model="title" placeholder="what would you like to do?" />
  <component @addnote="addNote" :is="noteType"/>
  </div>`,
  data() {
    return {
      title: "",
    };
  },
  created() {},
  methods: {
    addNote(payload) {
      let note;
      if (payload.url) {
        note = {
          type: payload.type,
          info: { title: this.title, url: payload.url },
        };
      } else if (payload.todos) {
        note = {
          type: payload.type,
          info: { title: this.title, todos: payload.todos },
        };
      } else {
        note = {
          type: payload.type,
          info: { title: this.title, content: payload.content },
        };
      }
      console.log(payload);
      console.log(note);
      notesService.addNote(note);
      this.$emit("addnote");
    },
  },
  components: {
    AddImgNote,
    AddListNote,
    AddTextNote,
    AddVideoNote,
  },
};
