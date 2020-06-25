export default {
  template: `<div class="flex align-center">
        <ul>
        <li :key="index" v-for="(item,index) in items">
        <input v-model="items[index].content" @keyup.delete='removeItem(index)' placeholder="Enter list item" @click="addItem(index)" />
        </li>
        </ul>
        <button @click="addNote">Add Note</button>

        </div>`,
  data() {
    return {
      title: "",
      items: [{ wasPressed: false, content: this.content }],
    };
  },
  created() {},
  computed: {},
  methods: {
    addItem(index) {
      if (!this.items[index].wasPressed) {
        this.items[index].wasPressed = true;
        this.items.push({ wasPressed: false });
      }
    },
    removeItem(index) {
      if (this.items[index].content.length < 1 || !this.items[index].content) {
        this.items.splice(1, index);
      }
    },
    addNote() {
      const type = "NoteList";
      this.items.pop();
      const note = { type, todos: this.items };
      this.$emit("addnote", note);
    },
  },
};
