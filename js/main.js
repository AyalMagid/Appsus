import { myRouter } from "./routes.js";
// import appHeader from './cmps/app-header.cmp.js';
// import noteApp from './apps/note-app/pages/note-app.cmp.js';
// import bookApp from './apps/book-app/pages/book-app.cmp.js';
import emailApp from "./apps/email-app/pages/email-app.cmp.js";
import Footer from "./apps/shared/footer-cmp.js";

new Vue({
  el: "#app",
  router: myRouter,
  template: `
        <div>
            <!-- <app-header/> -->
            <main class="main-container">
                 <router-view />
                 <Footer/>
            </main>
    
        </div>
    `,
  components: {
    emailApp,
    Footer,
    // bookApp,
    // noteApp
  },
});
