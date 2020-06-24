import { emailService } from "../services/email-service.js";
import sideNav from "../cmps/side-nav.cmp.js";
import emailCompose from "../cmps/email-compose.cmp.js";

export default {
  template: `
        <section v-if="email" class="email-details">
            <router-link to="/email"><button class="close-email-btn">Back to Email list</button></router-link>
            <div class="wrapper flex">
            <side-nav  @compose="changeComposeMode" ></side-nav>
            <div class="flex flex-col details-container">
                <div class="title-container flex scpase-between">
                     <h2>{{email.subject}}</h2>
                     <div class="btns-container">
                        <button>Delete</button>
                        <button>Full screen</button>
                    </div>
                </div>
                <h5>{{email.name}}{{email.address}}</h5>
                <div class="mail-body">
                    <p>fsfsdgsd gsgsgsg sgsvsdffdada dasfsdvbd fgbdfbg dfbvsfcsdadas</p>
                </div>   
                </div>
            </div>
            <email-compose  v-if="isComposeMode" @clsCompose="changeComposeMode"/>
        </section>
        `,
  data() {
    return {
      email: null,
      isComposeMode: false,
    };
  },
  methods: {
    changeComposeMode(val) {
      this.isComposeMode = val;
    },
  },
  created() {
    const { emailId } = this.$route.params;
    console.log(emailId);
    emailService.getById(emailId).then((email) => (this.email = email));
  },
  components: {
    emailService,
    sideNav,
    emailCompose,
  },
};

// <section v-if="email" class="email-details">
// <router-link to="/email"><button class="close-email-btn">Back to Email list</button></router-link>
// <div class="flex flex-col details-container">
//     <h3>New Message</h3>
//     <h4>To: </h4>
//     <h4>Cc: </h4>
//     <h4>Bcc: </h4>
//     <h4>Subject: </h4>
//     <div class="mail-body">
//         <button>Send</button>
//         <button>Delete</button>
//     </div>
// </div>
// </section>
