export default {
  props: ["iconName", "isPressed"],
  template: `<div>
    <i :class="objClass.iconType"></i>
        </div>`,
  data() {
    return {
      title: "",
    };
  },
  computed: {
    objClass() {
      return { iconType: `fas fab fa-${this.iconName}` };
    },
  },
};
