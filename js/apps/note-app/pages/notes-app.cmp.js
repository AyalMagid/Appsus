import "../comps/notes-grid.cmp.js";
import { notesService } from "../services/note-service.js";
import NotesGrid from "../comps/notes-grid.cmp.js";
export default {
  template: `<div>
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
  },
  computed: {},
  methods: {},
};
