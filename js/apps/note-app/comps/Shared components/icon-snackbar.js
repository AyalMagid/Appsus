export default {
  props: ["snackbarText", "showSnackbar"],
  template: `<span v-if="showSnackbar">{{snackbarText}}</span>`,
};
