export default {
  props: ["note"],
  template: `<div class="note-container">
        <h1>image</h1>
        <img :src="note.info.url"/>
      </div>`,
  data() {
    return {};
  },
  created() {
    return {};
  },
  computed: {},
  methods: {},
};
