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
  methods: {
    // addItem(index) {
    //   if (!this.items[index].wasPressed || index === this.items.length - 1) {
    //     this.items[index].wasPressed = true;
    //     this.items.push({ wasPressed: false });
    //   }
    // },
    // removeItem(index) {
    //   if (index === 0) return;
    //   if (index === this.items.length - 1) return this.items.pop();
    //   if (this.items[index].content.length < 1) {
    //     console.log(this.items[index].content);
    //     this.items.splice(index, 1);
    //   }
    // },
    // addNote() {
    //   const type = "ListNote";
    //   this.items.pop();
    //   const note = { type, todos: this.items };
    //   this.$emit("addnote", note);
    // },
  },
  components: {
    Todo,
  },
};
