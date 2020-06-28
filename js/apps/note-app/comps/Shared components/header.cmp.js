export default {
  props: ["title", "showIcon", "iconType"],
  template: `
  <header>
    <ul class="clean-list header">
      <router-link tag="li" to="">
        {{title}}
        <i v-if="showIcon" :class="iconClass"></i>
      </router-link>
      <div class="apps-container">
        <span @click="showDropDown =!showDropDown" tag="button" to="">Apps</span>
        <div v-if="showDropDown" class="app-menu">
        <router-link  class="fas fa-book-open" tag="i" to="/book">
        </router-link>
        <router-link class="far fa-envelope" tag="i" to="/email/list/isInbox"></router-link>
        <router-link v-if="$route.path!='/note'" class="far fa-sticky-note" tag="i" to="/note"></router-link>
        </div>
      </div>
    </ul>  
  </header>`,
  data() {
    return {
      showDropDown: false,
      showSnackbar: true,
    };
  },
  methods: {
    toggleSnackbar() {
      console.log("ss");
      this.showSnackbar = !this.showSnackbar;
    },
  },
  created() {},
  computed: {
    iconClass() {
      if (this.iconType === "email") {
        return "far fa-envelope";
      } else {
        return "far fa-sticky-note";
      }
    },
  },
};
