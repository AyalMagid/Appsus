import { notesService } from "../../services/note-service.js";
import { utilService } from "../../../../services.js/util-service.js";

export default {
  props: ["note"],
  template: `
<div class="flex">
    <div v-if="isEdit">
      <i @click="removeNote" class="fas fa-trash"></i>
      <i @click="duplicateNote" class="fas fa-copy"></i>
      <i class="fas fa-thumbtack"></i>
    </div>
    <div>    
    <i @click="showColors = !showColors" class="fas fa-palette"></i>
    <div v-if="showColors" :key="index" v-for="(color,index) in colors">
        <div  @click="changeNoteColor(color.backgroundColor)" style="width:25px;height:25px;border-radius:100%; border:1px solid #fff;" :style="color"></div>
    </div>
    </div>
</div>`,
  data() {
    return {
      isEdit: false,
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
  created() {
    if (this.note) {
      this.isEdit = true;
    }
  },
  computed: {},
  methods: {
    removeNote() {
      notesService.removeNote(this.note.id);
    },
    changeNoteColor(color) {
      if (this.isEdit) {
        notesService.changeColor(this.note.id, color);
      } else {
        this.$emit("colorchoosen", color);
      }
      this.showColors = !this.showColors;
    },
    duplicateNote() {
      notesService.duplicateNote(this.note);
    },
  },
};
