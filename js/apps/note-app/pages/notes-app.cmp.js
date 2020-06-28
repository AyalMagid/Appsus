import "../comps/notes-grid.cmp.js";
import { notesService } from "../services/note-service.js";
import NotesGrid from "../comps/notes-grid.cmp.js";
import Header from "../comps/Shared components/header.cmp.js";
import AddNote from "../comps/add-note.cmp.js";
import UserMessage from "../UI elements/message-cmp.js";
export default {
  template: `
  <div>
    <Header :showIcon="true" :title="'Notes'" :iconType="'note'" />
    <AddNote/>
    <notes-grid :notes="notes" />
    <transition name="fade" mode="out-in">
      <user-message/>
    </transition>
  </div>`,
  data() {
    return {
      notes: [],
    };
  },
  computed: {
    notesToDisplay() {
      const pinnedNotes = this.notes.filter((note) => note.isPinned);
      const unPinnedNotes = this.notes.filter((note) => !note.isPinned);
      return {
        pinnedNotes,
        unPinnedNotes,
      };
    },
  },
  created() {
    notesService.getNotes().then((notes) => {
      this.notes = notes;
    });
  },
  components: {
    NotesGrid,
    Header,
    AddNote,
    UserMessage,
  },

  methods: {},
};
