import TodoList from "./note components/todos/todo-list.cmp.js";

export default {
  props: ["note"],
  template: `<div :style="note.style" class="note-container">
  <h1>todos</h1>
  <p>{{note.info.title}}<p/>
  <todo-list :todos="note.info.todos"/>
      </div>`,
  data() {
    return {
      style: {
        backgroundColor: this.note.style,
      },
    };
  },
  created() {},
  computed: {},
  methods: {},
  components: {
    TodoList,
  },
};
