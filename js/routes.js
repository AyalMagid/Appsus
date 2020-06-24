// import homePage from './pages/home-page.cmp.js';
// import bookApp from './pages/books-app.cmp.js';
import emailApp from './apps/email-app/pages/email-app.cmp.js';
// import bookDetails from './pages/book-details.cmp.js';
// import aboutUs from './pages/about-us.cmp.js';

const myRoutes = [
    {
        path: '/email',
        component: emailApp
    },
    // {
    //     path: '/',
    //     component: homePage
    // },
    // {
    //     path: '/book',
    //     component: bookApp
    // },
    // {
    //     path: '/book/:bookId',
    //     component: bookDetails
    // },
    // {
    //     path: '/about',
    //     component: aboutUs
    // }
];

export const myRouter = new VueRouter ({ routes: myRoutes })
