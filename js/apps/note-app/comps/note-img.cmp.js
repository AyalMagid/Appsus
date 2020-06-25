import addNoteExtended from "./add-note-extended.cmp.js";
import NoteEditing from "./note components/note-editing.cmp.js";
export default {
  props: ["note"],
  template: `<div 
   class="note-container" 
  :style="note.style"
   @mouseover="show=true"
   @mouseleave="show=false"
   >
  <div v-if="showEdit">
    <add-note-extended @close="showEdit = !showEdit" :note="note" :noteType="'Add'+note.type"/>
  </div>
    <h1 @click="showEdit = !showEdit">image</h1>
    <img :src="note.info.url"/>
    <note-editing  v-if="show" :note="note" />
    <p>{{note.info.title}}</p>
  </div>`,
  data() {
    return {
      showEdit: false,
      show: false,
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
