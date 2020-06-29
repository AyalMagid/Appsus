import TodoList from "./note components/todos/todo-list.cmp.js";
import addNoteExtended from "./add-note-extended.cmp.js";
import NoteEditing from "./note components/note-editing.cmp.js";

export default {
  props: ["note"],
  template: `
<div
:style="note.style"
class="note-container text-notes-container"
@click="showEdit = !showEdit"
@mouseover="showEditingPanel=true"
@mouseleave="showEditingPanel=false"
   >
    <div @click.stop v-if="showEdit">
      <add-note-extended @close="showEdit = !showEdit" :note="note" :noteType="'Add'+note.type"/>
    </div>
    <h3 class="note-title">{{note.info.title}}</h3>
    <div @click.stop>
      <todo-list :noteId="note.id" :todos="note.info.todos"/>
    </div>
    <div @click.stop>
    <transition name="fade" mode="out-in">
      <note-editing :note="note"  v-if="showEditingPanel" />
    </transition>
    </div>
</div>`,
  data() {
    return {
      style: {
        backgroundColor: this.note.style,
      },
      showEdit: false,
      showEditingPanel: false,
    };
  },
  created() {},
  computed: {},
  methods: {},
  components: {
    TodoList,
    NoteEditing,
    addNoteExtended,
  },
};
