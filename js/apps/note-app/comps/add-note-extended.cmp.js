import AddImgNote from "./note components/add-notes-cmps/add-img-note.cmp.js";
import AddListNote from "./note components/add-notes-cmps/add-list-note.cmp.js";
import AddVideoNote from "./note components/add-notes-cmps/add-video-note.cmp.js";
import AddTextNote from "./note components/add-notes-cmps/add-text-note.cmp.js";
import NoteEditing from "./note components/note-editing.cmp.js";
import { notesService } from "../services/note-service.js";
import { eventBus } from "../services/event-bus-service.js";
export default {
  props: ["noteType", "note"],
  template: `
  <div
  @click="close"
  class="flex align-center"
  :class="overlayClass"
  >
    <div :style="backgroundColor"  @click.stop class="add-note-extended-container"> 
      <div class="title-container">
      <input class="title-input" type="text" v-model="title" placeholder="what would you like to do?" />
      <label class="title-label">Enter title</label>
      </div>
    <component :urlContent="urlContent" @addnote="addNote" :note="note" :buttonText="buttonText" :is="noteTypeComputed"/>
    <note-editing v-if="note" @colorchoosen="setColor"  :note="note" />
  </div>
  </div>`,
  data() {
    return {
      title: "",
      showOverlay: true,
      backgroundColor: "yellow",
    };
  },
  created() {
    if (this.note) {
      this.title = this.note.info.title;
      this.backgroundColor = this.note.style;
    }
    if (this.$route.params) {
      this.title = this.$route.params.title;
    }
  },
  computed: {
    noteTypeComputed() {
      if (this.noteType) {
        return this.noteType;
      } else if (this.$route.params) {
        return "AddTextNote";
      } else {
        return "Add" + this.note.type;
      }
    },
    urlContent() {
      if (this.$route.params) return this.$route.params.content;
      else return null;
    },
    buttonText() {
      return this.note ? "far fa-save" : "fas fa-plus";
    },
    overlayClass() {
      return {
        overlay: this.showOverlay,
      };
    },
    backgroundColorClass() {
      if (this.note) {
        return this.note.style.backgroundColor;
      }
    },
    objClass() {
      return {};
    },
  },
  methods: {
    setColor(backgroundcolor) {
      this.backgroundColor = backgroundcolor;
    },
    addNote(payload) {
      let note = {};
      note.type = payload.type;
      note.style = { backgroundColor: this.backgroundColor };
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
      // eventBus.$emit("displayMessage", "Note Added");
      if (this.$route.params.title) {
        this.$router.push("/note");
      }
    },
    close() {
      this.showOverlay = false;
      this.$emit("close");
    },
  },
  components: {
    AddImgNote,
    AddListNote,
    AddTextNote,
    AddVideoNote,
    NoteEditing,
  },
};
