import addNoteExtended from "./add-note-extended.cmp.js";
import NoteEditing from "./note components/note-editing.cmp.js";

export default {
  props: ["note"],
  template: `<div 
  class="note-container"
  :style="note.style"
  >
  <h1 @click="showEdit = !showEdit">videos</h1>
  <p>{{note.info.title}}</p>
  <div v-if="showEdit">
  <add-note-extended @close="showEdit = !showEdit"  :note="note" :noteType="'Add'+note.type"/>
  </div>
  <div v-show="!videoIsLoading"> 
  <iframe @load.self='handleLoading' :src="note.info.url"></iframe>
  </div>
  <div v-if="videoIsLoading" class="loading-spinner">
      <i class="fas fa-spinner"></i>
    </div>
  <note-editing :note="note" />
      </div>`,
  data() {
    return {
      showEdit: false,
      videoIsLoading: true,
    };
  },
  created() {},
  computed: {},
  methods: {
    handleLoading() {
      this.videoIsLoading = !this.videoIsLoading;
    },
  },
  components: {
    addNoteExtended,
    NoteEditing,
  },
};
