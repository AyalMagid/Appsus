import AddNoteExtended from "./add-note-extended.cmp.js";
import Icon from "../UI elements/icon.cmp.js";
import SnackbarIcon from "./Shared components/icon-snackbar.js";
export default {
  template: `
  <div>
    <div :class="visability" class="add-note-container">
      <input @click="showAddNote = !showAddNote" type="text" placeholder="Type Something..."/>
      <div add-note-icons-container>   
        <i @click="setNoteType('AddTextNote')" class=" icon fas fa-font font"></i>
        <i @click="setNoteType('AddVideoNote')" class=" icon fab fa-youtube youtube"></i>
        <i @click="setNoteType('AddImgNote')" class=" icon fas  fa-image image-icon"> </i>
        <i @click="setNoteType('AddListNote')" class=" icon fas fa-list list"></i>
      </div>
    </div>
    <div v-if="showAddNote">
      <add-note-extended  @close="showAddNote=!showAddNote" @addnote="addNote" :noteType="noteType" />
    </div>
  </div>`,
  data() {
    return {
      showAddNote: false,
      noteType: "AddTextNote",
      showSnackBars: {
        video: false,
        text: false,
        image: false,
        list: false,
      },
    };
  },
  computed: {
    visability() {
      return this.showAddNote ? "invisable" : "visable";
    },
  },
  methods: {
    setNoteType(noteType) {
      this.noteType = noteType;
      this.showAddNote = !this.showAddNote;
    },
    toggleSnackbar(type) {
      this.showSnackBars[type] = !this.showSnackBars[type];
    },
    addNote() {
      this.showAddNote = !this.showAddNote;
    },
  },
  components: {
    AddNoteExtended,
    Icon,
    SnackbarIcon,
  },
};
