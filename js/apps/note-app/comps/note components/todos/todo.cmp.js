import { notesService } from "../../../services/note-service.js";

export default {
  props: ["todo", "index", "noteId"],
  template: `<li>
  <i @click="todo.completed = !todo.completed" :class="completedTodo"  class="fas fa-check-square"></i>
  <span :class="completedTask" >{{todo.content}}</span>
  </li>`,
  data() {
    return {};
  },
  created() {},
  computed: {
    completedTodo() {
      return this.todo.completed ? "completed" : "";
    },
    completedTask() {
      return this.todo.completed ? "text-through" : "";
    },
  },
  methods: {},
  components: {},
};
