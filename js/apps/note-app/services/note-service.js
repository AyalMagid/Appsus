const notes = [
  { type: "NoteText", isPinned: true, info: { content: "Fullstack Me Baby!" } },
  {
    type: "NoteImg",
    info: {
      url:
        "https://i.pinimg.com/474x/f5/80/8e/f5808e68304fb8b44c8b6ed95d589e2c.jpg",
      title: "Me playing Mi",
    },
    style: { backgroundColor: "#00d" },
  },
  {
    type: "NoteVideo",
    info: {
      url: "https://www.youtube.com/embed/6lsJliBnUfM",
      title: "Me playing Mi",
    },
    style: { backgroundColor: "#00d" },
  },
  {
    type: "NoteTodos",
    info: {
      title: "How was it:",
      todos: [
        { content: "Do that", doneAt: null },
        { content: "Do this", doneAt: 187111111 },
      ],
    },
  },
];
const getNotes = () => {
  return Promise.resolve(notes);
};
const getNoteById = (noteId) => {
  return notes.find((note) => note.id === noteId);
};
const getNoteIndex = (noteId) => {
  return notes.findINdex((note) => note.id === noteId);
};

const addNote = (note) => {
  return notes.push(note);
};

export const notesService = {
  getNotes,
  getNoteById,
  getNoteIndex,
  addNote,
};
