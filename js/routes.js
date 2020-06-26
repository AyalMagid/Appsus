// import homePage from './pages/home-page.cmp.js';
// import bookApp from './pages/books-app.cmp.js';
import emailApp from "./apps/email-app/pages/email-app.cmp.js";
import emailDetails from "./apps/email-app/pages/email-details.cmp.js";
import notesApp from "./apps/note-app/pages/notes-app.cmp.js";
import addNoteExtended from "./apps/note-app/comps/add-note-extended.cmp.js";
// import bookDetails from './pages/book-details.cmp.js';
// import aboutUs from './pages/about-us.cmp.js';

const myRoutes = [
  // MAIN

  // {
  //     path: '/',
  //     component: homePage
  // },
  // {
  //     path: '/about',
  //     component: aboutUs
  // }

  // EMAIL-APP
  {
    name:"email",
    path: "/email/list/:type?",
    component: emailApp,
  },
  {
    path: "/email/list/:type/:emailId",
    component: emailDetails,
  },

  // BOOK-APP
  // {
  //     path: '/book',
  //     component: bookApp
  // },
  // {
  //     path: '/book/:bookId',
  //     component: bookDetails
  // },

  // NOTE-APP
  {
    path: "/note",
    component: notesApp,
  },
  {
    path: "/note/:noteId?",
    component: addNoteExtended,
  },
];

export const myRouter = new VueRouter({ routes: myRoutes });
