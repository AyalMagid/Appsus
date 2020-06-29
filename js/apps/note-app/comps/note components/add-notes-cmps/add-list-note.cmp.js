import TodoList from "../todos/todo-list.cmp.js";
import { eventBus } from "../../../services/event-bus-service.js";

export default {
  props: ["note", "buttonText"],
  template: `
  <div class="">
    <ul class="clean-list todo-container">
      <li :key="index" v-for="(item,index) in items">
      <input class="general-input" v-model="items[index].content" @keyup.delete='removeItem(index)' placeholder="Enter list item" @input="addItem(index)" />
      </li>
    </ul>
    <i @click="addNote" class="add-note-btn" :class="buttonText"></i>
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
  computed: {
    itemsLength() {
      return this.items.length - 1;
    },
    lastItemStatus() {
      return !!this.items[this.itemsLength].content != "";
    },
  },
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
      const itemsLength = this.items.length;
      let note = { type, todos: this.items };
      if (!this.note) {
        this.items.pop();
      } else {
        note.id = this.note.id;
        if (!this.items[itemsLength - 1].content) this.items.pop();
      }

      this.$emit("addnote", note);
    },
  },
  components: {
    TodoList,
  },
};
