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
  <img @click.self="showEdit = !showEdit" class="image-note-img" :src="note.info.url"/>
  <div class="image-note-container">
    <h3 class="note-title">{{note.info.title}}</h3>
    <transition name="fade" mode="out-in">
      <note-editing v-if="showEditingPanel"  :note="note" />
    </transition>
    </div>
    </div>`,
  data() {
    return {
      showEdit: false,
      showEditingPanel: true,
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
