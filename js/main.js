import {myRouter} from './routes.js'
// import appHeader from './cmps/app-header.cmp.js';
// import booksApp from './pages/books-app.cmp.js';

new Vue({
    el: '#app',
    router: myRouter,
    template: `
        <div>
            <app-header/>
            <main class="main-container">
                 <router-view />
            </main>
            <footer>
                @ 2020
            </footer>
        </div>
    `,
       components: {

    }
});
