import { notesService } from "../../services/note-service.js";

export default {
  props: ["note"],
  template: `
<div class="note-editing-container">
    <div class="note-editing-icons-container" v-if="isEdit">
      <i @click="removeNote" class="fas fa-trash"></i>
      <i @click="duplicateNote" class="fas fa-clone"></i>
      <i v-if="isImage" @click.self="showImageUrl=!showImageUrl" class="fas fa-image change-img-btn">
        <div class="new-image-url-container" v-if="showImageUrl">
        <label >Enter new Image url</label>
          <input  v-model="newImageUrl" placeholder="enter URL for new Image"/>
          <button class="new-img-btn" @click="changeBackgroundImage">Edit</button>
        </div>
      </i>
      <i @click="showColors = !showColors"  class="fas fa-palette color-picker">
        <div v-if="showColors" class="colors-container">
          <div class="color-container" :key="index" v-for="(color,index) in colors">
            <span v-if="note.style.backgroundColor!=color" class="color" @click="changeNoteColor(color.backgroundColor)" :style="color"></span>
        </div>
      </div>
      </i>
    </div>
 
    </div>
</div>`,
  // <i class="fas fa-thumbtack"></i>
  data() {
    return {
      isEdit: false,
      showColors: false,
      isImage: false,
      showImageUrl: false,
      newImageUrl:
        "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=480&w=640",
      colors: [
        { backgroundColor: "#002626" },
        { backgroundColor: "#D02A25" },
        { backgroundColor: "#D9DBF1" },
        { backgroundColor: "#A1C181" },
        { backgroundColor: "#FCCA46" },
        { backgroundColor: "#fff" },
      ],
    };
  },
  created() {
    if (this.note) {
      this.isEdit = true;
      if (this.note.type === "ImgNote") this.isImage = true;
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
    changeBackgroundImage() {
      this.showImageUrl = !this.showImageUrl;
      notesService.changeBackgroundImage(this.note.id, this.newImageUrl);
    },
  },
};
