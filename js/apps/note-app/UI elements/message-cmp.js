import { eventBus } from "../../note-app/services/event-bus-service.js";

export default {
  template: `
    <div :class="messageClass" v-if="message" class='message-container'>{{message.content}}</div>
    `,
  data() {
    return {
      message: "",
    };
  },
  computed: {
    messageClass() {
      return this.message.failure ? "failure" : "sucsses";
    },
  },
  created() {
    eventBus.$on("displayMessage", (message) => {
      this.message = message;
    });
  },
  updated() {
    setTimeout(() => {
      this.message = "";
    }, 3000);
  },
};
