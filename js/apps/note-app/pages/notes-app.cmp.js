import "../comps/notes-grid.cmp.js";
import { notesService } from "../services/note-service.js";
export default {
  template: `<div>

    </div>`,
  data() {
    return {
      notes: [],
    };
  },
  created() {
    notesService.then((notes) => {
      this.notes = notes;
    });
  },
  computed: {},
  methods: {},
};
