const notes = [
  { type: "NoteText", isPinned: true, info: { content: "Fullstack Me Baby!" } },
  {
    type: "NoteImg",
    info: { url: "http://some-img/me", title: "Me playing Mi" },
    style: { backgroundColor: "#00d" },
  },
  {
    type: "NoteTodos",
    info: {
      label: "How was it:",
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

export const notesService = {
  getNotes,
};
