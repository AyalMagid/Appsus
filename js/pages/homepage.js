import Header from "../apps/note-app/comps/Shared components/header.cmp.js";
export default {
  template: `
  <div class="main-homepage-container">
    <Header :title="'Appsus'" />
  <div class="hero-container">
     <div class="hero-content">
      <h1 class="hero-title">Your productivity solution</h1>
      <h3>You wanted it , you got it</h3>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio, id, fuga dolorum repudiandae eos commodi libero</p>
     </div>
     <div class="hero-img-container">
       <img src="img/spa.svg"></img>
     </div>
  </div>
    <section class="application-features-container">
    <div class="note-app-intro-container">
    <div class="app-introduction">
      <h3>A new way to take notes</h3>
      <h4>One click away</h4>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam eligendi provident consequatur sit? Error dicta accusantium quia eos debitis iusto?Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis mollitia est tenetur saepe aspernatur at.</p>
      <router-link tag="button" to="/note">Start right away</router-link>
    </div>
      <div class="img-container">
        <img src="img/iphonemockup.png"></img>
      </div>
      </div>
  </section>
    <section class="application-features-container">
    <div class="app-wrapper">
    <div class="note-app-intro-container">
    <div class="img-container">
    <img src="img/iphoneXmockup.png"></img>
  </div>
    <div class="app-introduction">
      <h3>Your new email solution</h3>
      <h4>in your pocket</h4>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam eligendi provident consequatur sit? Error dicta accusantium quia eos debitis iusto?Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis mollitia est tenetur saepe aspernatur at.</p>
      <router-link tag="button" to="/email/list/isInbox">Start right away</router-link>
    </div>
      </div>
      </div>

    </section>
</div>`,
  components: {
    Header,
  },
};
