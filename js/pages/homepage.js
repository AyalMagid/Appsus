import Header from "../apps/note-app/comps/Shared components/header.cmp.js";
export default {
  template: `
  <div class="main-container">
  <Header :title="'Appsus'" />
  <div class="hero-container">
    <h1 class="hero-title">Your productivity solution</h1>
    <h3>You wanted it , you got it</h3>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio, id, fuga dolorum repudiandae eos commodi libero perferendis quia quo aperiam iste deserunt pariatur placeat debitis.</p>
    <div class="btn-container">
        <button class="cta-buttons">book
        <i class="fas fa-book-open"></i>
        </button>
        <button class="cta-buttons">mail
        <i class="far fa-envelope"></i>
        </button>
        <button class="cta-buttons">notes
        <i class="far fa-sticky-note"></i>
        </button>
    </div>
  </div>
    <section class="application-features-container">
    <div class="book-app-intro-container">
      </div>
      
      <div class="mail-app-intro-container">
      </div>
      
      <div class="note-app-intro-container">
      </div>
    </section>
</div>`,
  components: {
    Header,
  },
};
