import Todo from "./todo.cmp.js";

export default {
  props: ["todos", "noteId"],
  template: `<div>
      <ul class="clean-list">
        <todo :noteId="noteId" :key="index" :todo="todo" v-for="(todo,index) in todos"/>
      </ul>
    </div>`,
  data() {
    return {};
  },
  created() {},
  computed: {},
  methods: {},
  components: {
    Todo,
  },
};
