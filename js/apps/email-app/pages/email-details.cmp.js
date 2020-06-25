import { emailService } from "../services/email-service.js";
import sideNav from "../cmps/side-nav.cmp.js";
import emailCompose from "../cmps/email-compose.cmp.js";

export default {
  template: `
        <section v-if="email" class="email-details">
        <header class="app-header flex align-center space-between">
                <h1>Appsus</h1>
                <nav>
                    <router-link to="/">Home</router-link> |
                    <router-link to="/email">MisterEmail</router-link> | 
                    <router-link to="/note">Miss Notes</router-link> | 
                    <!-- <router-link to="/book">Miss Books</router-link> |  -->
                    <router-link to="/about">About</router-link> | 
                </nav>
            </header>
            <!-- <router-link to="/email"><button class="close-email-btn">Back to Email list</button></router-link> -->
            <div class="wrapper flex space-between">
            <side-nav  @compose="changeComposeMode" ></side-nav>
            <div class="flex flex-col details-container">
                <div class="title-container flex scpase-between">
                     <h2>{{email.subject}}</h2>
                     <div class="btns-container">
                        <button>Delete</button>
                        <button>Full screen</button>
                    </div>
                </div>
                <div class="flex space-between">
                    <h5>{{email.name}}{{email.address}}</h5>
                    <button  @click="setReplayMode(true)" >Reply</button>
                </div >
                <div class="mail-body">
                    <p>{{email.body}}</p>
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
      isReply : false
    };
  },
  methods: {
    // so it will be possible to edit or write a new compose as well
    setReplayMode(val){
        this.isReply = val
        this.changeComposeMode(val)
    },
    changeComposeMode(val) {
        this.isComposeMode = val;
    },
    closeCompose (){
        this.changeComposeMode(false)
        this.isReply = false
    }
  },
  created() {
    const { emailId } = this.$route.params;
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
