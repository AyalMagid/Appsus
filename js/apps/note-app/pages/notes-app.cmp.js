import "../comps/notes-grid.cmp.js";
import { notesService } from "../services/note-service.js";
import NotesGrid from "../comps/notes-grid.cmp.js";
import Header from "../comps/Shared components/header.cmp.js";
import AddNote from "../comps/add-note.cmp.js";
export default {
  template: `<div>
    <Header/>
    <AddNote/>
    <notes-grid :notes="notes" />
    </div>`,
  data() {
    return {
      notes: [],
    };
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
  },
  computed: {},
  methods: {},
};
