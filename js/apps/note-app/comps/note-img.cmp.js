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
  <div v-if="showEdit">
    <add-note-extended @close="showEdit = !showEdit" :note="note" :noteType="'Add'+note.type"/>
  </div>
    <h1 @click="showEdit = !showEdit">image</h1>
    <img :src="note.info.url"/>
    <p>{{note.info.title}}</p>
    <note-editing  :note="note" />
  </div>`,
  data() {
    return {
      showEdit: false,
      showEditingPanel: false,
    };
  },
  created() {
    return {};
  },
  computed: {},
  methods: {},
  components: {
    addNoteExtended,
    NoteEditing,
  },
};
