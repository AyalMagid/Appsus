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
  v-if="showComponent"
  >
    <div :style="backgroundColor"  @click.stop class="add-note-extended-container"> 
      <div class="add-note-extended-title-container">
      <input class="title-input" type="text" v-model="title" placeholder="Type note title" />
      <label class="title-label">Enter title</label>
    </div>
    <component :urlContent="urlContent" @addnote="addNote" :note="note" :buttonText="buttonText" :is="noteTypeComputed"/>
  </div>
  </div>`,
  data() {
    return {
      title: "",
      showOverlay: true,
      backgroundColor: "#fff",
      showComponent: true,
    };
  },
  created() {
    if (this.note) {
      this.title = this.note.info.title;
      this.backgroundColor = this.note.style;
    }
    if (this.$route.params.title) {
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
      return this.note ? "far fa-save" : "fas fa-plus-square";
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
      let snackbarMessage = "Note added";
      let note = {};
      note.type = payload.type;
      note.style = { backgroundColor: this.backgroundColor };
      if (payload.url) {
        note.info = { title: this.title, url: payload.url };
      } else if (payload.todos) {
        note.info = { title: this.title, todos: payload.todos };
      } else {
        if (!this.title && !payload.content) {
          snackbarMessage = "A text note must have either a title or content";
          eventBus.$emit("displayMessage", {
            content: snackbarMessage,
            failure: true,
          });
          this.showComponent = false;
          this.$emit("close");
          return;
        }
        note.info = { title: this.title, content: payload.content };
      }
      if (payload.id) {
        note.id = payload.id;
        snackbarMessage = "Note updated";
      }
      notesService.addNote(note);
      this.$emit("addnote");
      eventBus.$emit("displayMessage", { content: snackbarMessage });
      if (this.$route.params.title) {
        this.$router.push("/note");
      }
      this.showComponent = false;
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
