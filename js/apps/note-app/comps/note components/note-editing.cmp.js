import { notesService } from "../../services/note-service.js";

export default {
  props: ["note"],
  template: `<div class="flex">
    <i @click="removeNote" class="fas fa-trash"></i>
    <i @click="showColors = !showColors" class="fas fa-palette"></i>
        <div v-if="showColors" :key="index" v-for="(color,index) in colors">
        <div  @click="changeNoteColor(color.backgroundColor)" style="width:25px;height:25px;border-radius:100%; border:1px solid #fff;" :style="color"></div>
        </div>
        </div>`,
  data() {
    return {
      showColors: false,
      colors: [
        { backgroundColor: "#002626" },
        { backgroundColor: "#D02A25" },
        { backgroundColor: "#D9DBF1" },
        { backgroundColor: "#A1C181" },
        { backgroundColor: "#FCCA46" },
      ],
    };
  },
  created() {},
  computed: {},
  methods: {
    removeNote() {
      notesService.removeNote(this.note.id);
    },
    changeNoteColor(color) {
      console.log(this.backgroundColor);
      notesService.changeColor(this.note.id, color);
      this.showColors = !this.showColors;
    },
  },
};
