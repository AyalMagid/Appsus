import AddNoteExtended from "./add-note-extended.cmp.js";
import Icon from "../UI elements/icon.cmp.js";
import SnackbarIcon from "./Shared components/icon-snackbar.js";
export default {
  template: `
  <div>
    <div v-if="!showAddNote" class="add-note-container">
      <input @click="showAddNote = !showAddNote" type="text" placeholder="Type Something..."/>
      <div add-note-icons-container>   
        <i @mouseout="toggleSnackbar('text')" @mouseover="toggleSnackbar('text')" @click="setNoteType('AddTextNote')" class=" icon fas fa-font font">
          <snackbar-icon :showSnackbar="showSnackBars['text']" snackbarText="Add a text note"/>
        </i>
        <i @mouseout="toggleSnackbar('video')" @mouseover="toggleSnackbar('video')" @click="setNoteType('AddVideoNote')" class=" icon fab fa-youtube youtube">
          <snackbar-icon :showSnackbar="showSnackBars['video']" snackbarText="Add a youtube video"/>
        </i>
        <i @mouseout="toggleSnackbar('image')" @mouseover="toggleSnackbar('image')"  @click="setNoteType('AddImgNote')" class=" icon fas  fa-image image-icon">
          <snackbar-icon :showSnackbar="showSnackBars['image']" snackbarText="add an image note"/>
        </i>
        <i @mouseout="toggleSnackbar('list')" @mouseover="toggleSnackbar('list')" @click="setNoteType('AddListNote')" class=" icon fas fa-list list">
          <snackbar-icon :showSnackbar="showSnackBars['list']" snackbarText="add a list note"/>
        </i>
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
  methods: {
    setNoteType(noteType) {
      this.noteType = noteType;
      this.showAddNote = !this.showAddNote;
    },
    toggleSnackbar(type) {
      this.showSnackBars[type] = !this.showSnackBars[type];
    },
    addNote() {
      console.log("here");
      this.showAddNote = !this.showAddNote;
    },
  },

  components: {
    AddNoteExtended,
    Icon,
    SnackbarIcon,
  },
};
