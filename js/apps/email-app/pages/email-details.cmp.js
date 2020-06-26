import { emailService } from "../services/email-service.js";
import sideNav from "../cmps/side-nav.cmp.js";
import emailCompose from "../cmps/email-compose.cmp.js";
import userMsg from "../cmps/user-msg.cmp.js";
import emailStatus from "../cmps/email-status.cmp.js";


export default {
  template: `
        <section v-if="email" class="email-details">
        <header class="app-header flex align-center space-between">
                <user-msg></user-msg>
                <h1>Appsus</h1>
                <nav>
                    <router-link to="/">Home</router-link> |
                    <router-link to="/email/list/isInbox">MisterEmail</router-link> | 
                    <router-link to="/note">Miss Notes</router-link> | 
                    <!-- <router-link to="/book">Miss Books</router-link> |  -->
                    <router-link to="/about">About</router-link> | 
                </nav>
            </header>
            <!-- <router-link to="/email"><button class="close-email-btn">Back to Email list</button></router-link> -->
         <div class="main-wrapper flex space-between">
            <div class="flex flex-col side-container">
                 <!-- needs to send emails props but get it first so it can show the numbers-->
                <email-status ></email-status> 
                <side-nav @compose="changeComposeMode"/>
            </div>
            <div class="flex flex-col details-container">
                <div class="title-container">
                     <h2>{{email.subject}}</h2>
                     <div class="flex space-between address">
                         <h5>{{email.name}}{{email.address}}</h5>
                     </div >
                </div>
                <div class="mail-body">
                    <p>{{email.body}}</p>
                </div>   
                <div class="btns-container">
                    <button  @click="setReplayMode(true)" ><i class="fa fa-reply" aria-hidden="true"></i></button>
                    <button @click="removeEmail"><i class="fa fa-trash" aria-hidden="true"></i></button>
                </div>
            </div>
         </div>
            <email-compose :isReply="isReply" :emailToEdit="email"  v-if="isComposeMode" @clsCompose="closeCompose"/>
        </section>
        `,
  data() {
    return {
      email: null,
      isComposeMode: false,
      isReply: false,
      listType: null
    };
  },
  methods: {
    // so it will be possible to edit or write a new compose as well
    setReplayMode(val) {
      this.isReply = val;
      this.changeComposeMode(val);
    },
    changeComposeMode(val) {
      this.isComposeMode = val;
    },
    closeCompose() {
      this.changeComposeMode(false);
      this.isReply = false;
    },
    removeEmail() {
      emailService.removeEmail(this.email.id, this.listType);
      this.$router.push({name:'email',params:{type:this.listType}} );
    }
  },
  created() {
      const { emailId, type } = this.$route.params;
      this.listType = type
    emailService.getById(emailId).then((email) => {
        console.log(email)
      this.email = email;
      this.email.isRead = true;
    });
    
  },
  components: {
    emailService,
    sideNav,
    emailCompose,
    emailStatus,
    userMsg
  },
};
