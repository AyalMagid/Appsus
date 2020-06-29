import addNoteExtended from "./add-note-extended.cmp.js";
import NoteEditing from "./note components/note-editing.cmp.js";

export default {
  props: ["note"],
  template: `<div
   class="note-container text-notes-container"
   :style="note.style"
   @mouseover="showEditingPanel=true"
   @mouseleave="showEditingPanel=false"
   @click="showEdit = !showEdit"
   >
  <div v-if="showEdit" @click.stop>
   <add-note-extended @close="showEdit = !showEdit" :note="note" :noteType="'Add'+note.type"/>
  </div>
  <h3 class="note-title">{{note.info.title}}</h3>
  <p>{{note.info.content}}</p>
  <div @click.stop>
    <transition name="fade" mode="out-in">
     <note-editing v-if="showEditingPanel"  :note="note" />
    </transition> 
  </div>
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
