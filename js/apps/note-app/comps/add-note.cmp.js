import AddNoteExtended from "./add-note-extended.cmp.js";
import Icon from "../UI elements/icon.cmp.js";
export default {
  template: `<div >
    <div v-if="!showAddNote" class="flex align-center">
      <input @click="showAddNote = !showAddNote" type="text" placeholder="what would you like to do?" >
      <i @click="setNoteType('AddTextNote')" class="fas fa-font"></i>
      <i @click="setNoteType('AddVideoNote')" class="fab fa-youtube"></i>
      <i @click="setNoteType('AddImgNote')" class="fas  fa-image"></i>
      <i @click="setNoteType('AddListNote')" class="fas fa-list"></i>
    </div>
    <div  v-if="showAddNote">
    <add-note-extended @addnote="addNote" :noteType="noteType" />
    </div>
  </div>`,
  data() {
    //      <Icon iconName="font" :isPressed="true" />

    return {
      showAddNote: false,
      noteType: "AddTextNote",
    };
  },
  methods: {
    setNoteType(noteType) {
      this.noteType = noteType;
    },
    addNote() {
      this.showAddNote = !this.showAddNote;
    },
  },
  components: {
    AddNoteExtended,
    Icon,
  },
};
