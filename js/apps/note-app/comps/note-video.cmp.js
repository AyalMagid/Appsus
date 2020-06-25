export default {
  props: ["note"],
  template: `<div>
  <h1>videos</h1>
  <iframe :src="note.info.url"></iframe>
      </div>`,
  data() {
    return {};
  },
  created() {},
  computed: {},
  methods: {},
};
