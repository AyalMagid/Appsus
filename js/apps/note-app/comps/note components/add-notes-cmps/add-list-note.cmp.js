import TodoList from "../todos/todo-list.cmp.js";

export default {
  props: ["notes", "buttonText"],
  template: `<div class="flex align-center">
        <ul>
        <li :key="index" v-for="(item,index) in items">
        <i class="fas fa-check-square"></i>
        <input v-model="items[index].content" @keyup.delete='removeItem(index)' placeholder="Enter list item" @input="addItem(index)" />
        </li>
        </ul>
        <button @click="addNote">{{buttonText}}</button>
        </div>`,
  data() {
    return {
      title: "",
      items: [{ wasPressed: false, content: this.content, completed: false }],
    };
  },
  created() {},
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
      this.items.pop();
      const note = { type, todos: this.items };
      this.$emit("addnote", note);
    },
  },
  components: {
    TodoList,
  },
};
