export default {
  props: ["note"],
  template: `<div class="note-container">
    <h1>text</h1>
    <p>{{note.info.content}}</p>
  </div>`,
  data() {
    return {};
  },
  created() {},
  computed: {},
  methods: {},
};
