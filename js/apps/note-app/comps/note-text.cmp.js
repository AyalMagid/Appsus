import addNoteExtended from "./add-note-extended.cmp.js";
import NoteEditing from "./note components/note-editing.cmp.js";

export default {
  props: ["note"],
  template: `<div
   class="note-container"
   :style="note.style"
   @mouseover="showEditingPanel=true"
   @mouseleave="showEditingPanel=false"
   >
  <h1 @click="showEdit = !showEdit">text</h1>
  <div v-if="showEdit">
  <add-note-extended @close="showEdit = !showEdit" :note="note" :noteType="'Add'+note.type"/>
  </div>
    <h1>{{note.info.title}}</h1>
    <p>{{note.info.content}}</p>
    <note-editing :note="note" />
  </div>`,
  data() {
    return {
      showEdit: false,
      showEditingPanel: false,
    };
  },
  created() {},
  computed: {},
  methods: {},
  components: {
    addNoteExtended,
    NoteEditing,
  },
};
