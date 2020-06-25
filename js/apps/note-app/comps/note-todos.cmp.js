import TodoList from "./note components/todos/todo-list.cmp.js";

export default {
  props: ["note"],
  template: `<div class="note-container">
  <h1>todos</h1>
  <p>{{note.info.title}}<p/>
  <todo-list :todos="note.info.todos"/>
      </div>`,
  data() {
    return {};
  },
  created() {},
  computed: {},
  methods: {},
  components: {
    TodoList,
  },
};
