import { notesService } from "../../../services/note-service.js";

export default {
  props: ["todo", "index", "noteId"],
  template: `<li>
  <i @click="todo.completed = !todo.completed" :class="completedTodo" ></i>
    <span :class="completedTask" >{{todo.content}}</span>
  </li>`,
  data() {
    return {};
  },
  created() {},
  computed: {
    completedTodo() {
      return this.todo.completed ? "fas fa-check" : "far fa-square";
    },
    completedTask() {
      return this.todo.completed ? "text-through" : "";
    },
  },
  methods: {},
  components: {},
};
