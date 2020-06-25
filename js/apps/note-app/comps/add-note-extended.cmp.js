import AddImgNote from "./note components/add-notes-cmps/add-img-note.cmp.js";
import AddListNote from "./note components/add-notes-cmps/add-list-note.cmp.js";
import AddVideoNote from "./note components/add-notes-cmps/add-video-note.cmp.js";
import AddTextNote from "./note components/add-notes-cmps/add-text-note.cmp.js";
import { notesService } from "../services/note-service.js";
export default {
  props: ["noteType", "note"],
  template: `<div  @click.self="close"  class="flex align-center" :class="overlayClass">
  <div class="overlay-content"> 
  <input type="text" v-model="title" placeholdwer="what would you like to do?" />
  <component @addnote="addNote" :note="note" :is="noteTypeComputed"/>
  </div>
  </div>`,
  data() {
    return {
      title: "",
      showOverlay: true,
    };
  },
  created() {},

  computed: {
    noteTypeComputed() {
      if (this.noteType) {
        console.log(this.noteId);
        return this.noteType;
      } else {
        return "Add" + this.note.type;
      }
    },
    overlayClass() {
      return this.showOverlay ? "overlay" : "";
    },
  },
  methods: {
    addNote(payload) {
      let note = {};
      note.type = payload.type;
      if (payload.url) {
        note.info = { title: this.title, url: payload.url };
      } else if (payload.todos) {
        note.info = { title: this.title, todos: payload.todos };
      } else {
        note.info = { title: this.title, content: payload.content };
      }
      if (payload.id) {
        note.id = payload.id;
      }
      notesService.addNote(note);
      this.$emit("addnote");
    },
    close() {
      this.showOverlay = !this.showOverlay;
      this.$emit("close");
    },
  },
  components: {
    AddImgNote,
    AddListNote,
    AddTextNote,
    AddVideoNote,
  },
};
