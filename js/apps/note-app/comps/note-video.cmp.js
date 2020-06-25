import addNoteExtended from "./add-note-extended.cmp.js";
export default {
  props: ["note"],
  template: `<div class="note-container">
  <h1 @click="showEdit = !showEdit">videos</h1>
  <p>{{note.info.title}}</p>
  <div v-if="showEdit">
  <add-note-extended @close="showEdit = !showEdit"  :note="note" :noteType="'Add'+note.type"/>
  </div>
  <iframe :src="note.info.url"></iframe>
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
