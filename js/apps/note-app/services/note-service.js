import { utilService } from "../../../services.js/util-service.js";

const notes = [
  {
    id: utilService.makeId(),
    type: "TextNote",
    isPinned: true,
    info: { content: "Fullstack Me Baby!" },
  },
  {
    id: utilService.makeId(),
    type: "ImgNote",
    info: {
      url:
        "https://i.pinimg.com/474x/f5/80/8e/f5808e68304fb8b44c8b6ed95d589e2c.jpg",
      title: "Me playing Mi",
    },
    style: { backgroundColor: "#D0CDD7" },
  },
  {
    id: utilService.makeId(),
    type: "VideoNote",
    info: {
      url: "https://www.youtube.com/embed/6lsJliBnUfM",
      title: "Me playing Mi",
    },
    style: { backgroundColor: "#00d" },
  },
  {
    id: utilService.makeId(),
    type: "ListNote",
    info: {
      title: "How was it:",
      todos: [
        { content: "Do that", doneAt: null },
        { content: "Do this", doneAt: 187111111 },
      ],
    },
    style: { backgroundColor: "#D9DBF1" },
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
};
