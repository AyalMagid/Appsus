import addNoteExtended from "./add-note-extended.cmp.js";
export default {
  props: ["note"],
  template: `<div class="note-container">
  <h1 @click="showEdit = !showEdit">text</h1>
  <div v-if="showEdit">
  <add-note-extended @close="showEdit = !showEdit" :note="note" :noteType="'Add'+note.type"/>
  </div>
    <h1>{{note.info.title}}</h1>
    <p>{{note.info.content}}</p>
  </div>`,
  data() {
    return {
      showEdit: false,
    };
  },
  created() {},
  computed: {},
  methods: {},
  components: {
    addNoteExtended,
  },
};
