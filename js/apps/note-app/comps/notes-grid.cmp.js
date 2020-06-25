import ImgNote from "./note-img.cmp.js";
import TextNote from "./note-text.cmp.js";
import VideoNote from "./note-video.cmp.js";
import ListNote from "./note-todos.cmp.js";

export default {
  props: ["notes"],
  template: `<div class="notes-container ">
      <component :is="note.type" :note="note" :key="index" v-for="(note,index) in notes"/>
      </div>`,
  data() {
    return {};
  },
  created() {},
  computed: {},
  methods: {},
  components: {
    ImgNote,
    TextNote,
    VideoNote,
    ListNote,
  },
};
