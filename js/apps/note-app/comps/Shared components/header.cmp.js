export default {
  template: `
  <header>
    <ul class="clean-list header">
      <router-link tag="li" to="">
        Notes
        <i class="far fa-sticky-note"></i>
      </router-link>
      <div class="apps-container">
        <span @click="showDropDown =!showDropDown" tag="button" to="">Apps</span>
        <div v-if="showDropDown" class="app-menu">
        <router-link class="fas fa-book-open" tag="i" to="/book"></router-link>
        <router-link class="far fa-envelope" tag="i" to="/email"></router-link>
        <router-link class="far fa-sticky-note" tag="i" to="/note"></router-link>
        </div>
      </div>
    </ul>  
  </header>`,
  data() {
    return {
      showDropDown: false,
    };
  },
  created() {},
  computed: {},
  methods: {},
};
