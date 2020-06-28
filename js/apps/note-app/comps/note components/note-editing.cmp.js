import { notesService } from "../../services/note-service.js";

export default {
  props: ["note"],
  template: `
<div class="note-editing-container">
    <div class="note-editing-icons-container" v-if="isEdit">
      <i @click="removeNote" class="fas fa-trash"></i>
      <i @click="duplicateNote" class="fas fa-clone"></i>
      <i class="fas fa-thumbtack"></i>
      <i v-if="isImage" @click.self="showImageUrl=!showImageUrl" class="fas fa-image change-img-btn">
        <div class="new-image-url-container" v-if="showImageUrl">
          <input  v-model="newImageUrl" placeholder="enter URL for new Image"></input>
          <button @click="changeBackgroundImage">add</button>
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
  data() {
    return {
      isEdit: false,
      showColors: false,
      isImage: false,
      showImageUrl: false,
      newImageUrl:
        "https://scontent.foko1-1.fna.fbcdn.net/v/t1.0-9/104490397_1497359800435874_3286166808258794385_o.jpg?_nc_cat=111&_nc_sid=730e14&_nc_ohc=tlrSXfdDK6AAX9Ybpgk&_nc_ht=scontent.foko1-1.fna&oh=b440cd359f497443b65aeaf9591046c3&oe=5F197893",
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
