import NoteImg from "./note-img.cmp.js";
import NoteText from "./note-text.cmp.js";
import NoteVideo from "./note-video.cmp.js";
import NoteTodos from "./note-todos.cmp.js";

export default {
  props: ["notes"],
  template: `<div>
      <component :is="note.type" :note="note" :key="index" v-for="(note,index) in notes"/>
      </div>`,
  data() {
    return {};
  },
  created() {},
  computed: {},
  methods: {},
  components: {
    NoteImg,
    NoteText,
    NoteTodos,
    NoteVideo,
  },
};
