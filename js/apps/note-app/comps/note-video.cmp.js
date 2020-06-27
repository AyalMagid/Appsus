import addNoteExtended from "./add-note-extended.cmp.js";
import NoteEditing from "./note components/note-editing.cmp.js";

export default {
  props: ["note"],
  template: `
  <div 
  class="note-container"
  :style="note.style"
  @mouseover="showEditingPanel=true"
  @mouseleave="showEditingPanel=false"
  >
    <div class="note-video-container" v-show="!videoIsLoading"> 
      <iframe class="note-video" @load.self='handleLoading' :src="note.info.url"></iframe>
    </div>
    <div @click="showEdit = !showEdit" class="image-note-container">  
      <h3 class="note-title">{{note.info.title}}</h3>
      <div v-if="showEdit" @click.stop>
        <add-note-extended @close="showEdit = false"  :note="note" :noteType="'Add'+note.type"/>
      </div>
      <div v-if="videoIsLoading" class="loading-spinner">
       <i class="fas fa-spinner"></i>
      </div>
      <div v-if="showEditingPanel" @click.stop>
        <note-editing  :note="note" />
      </div>
  </div>
</div>`,
  data() {
    return {
      showEdit: false,
      videoIsLoading: true,
      showEditingPanel: false,
    };
  },
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
