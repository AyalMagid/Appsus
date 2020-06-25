import { utilService } from "../../../services.js/util-service.js";

const notes = [
  {
    id: utilService.makeId(),
    type: "TextNote",
    isPinned: true,
    info: { title: "sss", content: "Fullstack Me Baby!" },
    style: { backgroundColor: "#8661C1", color: "#fff" },
  },
  {
    id: utilService.makeId(),
    type: "ImgNote",
    info: {
      url:
        "https://scontent.foko1-1.fna.fbcdn.net/v/t1.0-9/p960x960/91513578_1431166250388563_3069995301231132672_o.jpg?_nc_cat=100&_nc_sid=19026a&_nc_ohc=g3FzMxsOBCMAX9X5g9E&_nc_ht=scontent.foko1-1.fna&_nc_tp=6&oh=fc9ca5a5b92894d651e96914fc83a66c&oe=5F193B5E",
      title: "Me playing Mi",
    },
    style: { backgroundColor: "#4B5267" },
    isPinned: false,
  },
  {
    id: utilService.makeId(),
    type: "VideoNote",
    info: {
      url: "https://www.youtube.com/embed/6lsJliBnUfM",
      title: "Me playing Mi",
    },
    style: { backgroundColor: "#FFA630" },
    isPinned: false,
  },
  {
    id: utilService.makeId(),
    type: "ListNote",
    info: {
      title: "How was it:",
      todos: [
        { wasPressed: false, content: "hey", completed: false },
        { wasPressed: false, content: "hey there", completed: false },
      ],
    },
    style: { backgroundColor: "#D9DBF1" },
    isPinned: false,
  },
];
const getNotes = () => {
  console.log(notes);
  return Promise.resolve(notes);
};
const getNoteById = (noteId) => {
  return notes.find((note) => note.id === noteId);
};
const getNoteIndex = (noteId) => {
  return notes.findIndex((note) => note.id === noteId);
};
const changeColor = (noteId, color) => {
  const noteIndex = getNoteIndex(noteId);
  notes[noteIndex].style.backgroundColor = color;
};
const removeNote = (noteId) => {
  const noteIndex = getNoteIndex(noteId);
  notes.splice(noteIndex, 1);
};

const duplicateNote = (note) => {
  let duplicateNote = JSON.parse(JSON.stringify(note));
  duplicateNote.id = utilService.makeId();
  notes.unshift(duplicateNote);
};

const addNote = (note) => {
  const doesExist = note.id;
  console.log(doesExist);
  if (doesExist) {
    const noteIndex = getNoteIndex(note.id);
    notes.splice(noteIndex, 1, note);
    return;
  }
  note.id = utilService.makeId();
  return notes.unshift(note);
};

export const notesService = {
  getNotes,
  getNoteById,
  getNoteIndex,
  addNote,
  removeNote,
  changeColor,
  duplicateNote,
};
