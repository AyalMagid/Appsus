import homePage from './pages/home-page.cmp.js.js';
import bookApp from './pages/books-app.cmp.js.js';
import bookDetails from './pages/book-details.cmp.js.js';
import aboutUs from './pages/about-us.cmp.js.js';

const myRoutes = [
    {
        path: '/',
        component: homePage
    },
    {
        path: '/book',
        component: bookApp
    },
    {
        path: '/book/:bookId',
        component: bookDetails
    },
    {
        path: '/about',
        component: aboutUs
    }
];

export const myRouter = new VueRouter ({ routes: myRoutes })
