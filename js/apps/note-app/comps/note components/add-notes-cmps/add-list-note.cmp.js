import TodoList from "../todos/todo-list.cmp.js";

export default {
  props: ["note", "buttonText"],
  template: `
  <div class="">
    <ul class="clean-list todo-container">
      <li :key="index" v-for="(item,index) in items">
      <input class="todo" v-model="items[index].content" @keyup.delete='removeItem(index)' placeholder="Enter list item" @input="addItem(index)" />
      </li>
    </ul>
    <i @click="addNote" :class="buttonText"></i>
  </div>`,
  data() {
    return {
      title: "",
      items: [{ wasPressed: false, content: this.content, completed: false }],
    };
  },
  created() {
    console.log(this.note);
    if (this.note) {
      this.items = this.note.info.todos;
    }
  },
  computed: {},
  methods: {
    addItem(index) {
      if (!this.items[index].wasPressed || index === this.items.length - 1) {
        this.items[index].wasPressed = true;
        this.items.push({ wasPressed: false, content: "", completed: false });
      }
    },
    removeItem(index) {
      if (index === 0) return;
      if (index === this.items.length - 1) return this.items.pop();
      if (this.items[index].content.length < 1) {
        console.log(this.items[index].content);
        this.items.splice(index, 1);
      }
    },
    addNote() {
      const type = "ListNote";
      let note = { type, todos: this.items };
      if (!this.note) {
        this.items.pop();
      } else if (
        //this checks if the last item in the todos array doens't have content
        !this.note.info.todos[this.note.info.todos.length - 1].content
      ) {
        this.items.pop();
        note.id = this.note.id;
      }
      this.$emit("addnote", note);
    },
  },
  components: {
    TodoList,
  },
};
