import { emailService } from "../services/email-service.js";
import sideNav from "../cmps/side-nav.cmp.js";
import emailCompose from "../cmps/email-compose.cmp.js";
import userMsg from "../cmps/user-msg.cmp.js";
import emailStatus from "../cmps/email-status.cmp.js";
import emailHeader from "../cmps/email-header.cmp.js";

export default {
  template: `
        <section v-if="email" class="email-details"  @click.stop="closeSideBar">
        <email-header></email-header>
            <button @click.stop="openSideBar" v-if="!isMoved" class="hamburger"><i class="fa fa-bars" ></i></button>
            <div class="flex flex-col side-container" :class="{move: isMovedClass}">
                <email-status ></email-status> 
                <side-nav @compose="changeComposeMode"/>
            </div>
            <div class="flex flex-col details-container">
                <div class="title-container">
                     <h2>{{email.subject}}</h2>
                      <div>
                         <h5 >{{email.name}} : </h5>
                         <h5> {{email.address}} </h5>
                      </div>
                </div>
                <div class="mail-body">
                    <p>{{email.body}}</p>
                </div>   
                <div >
                    <button  @click="setReplayMode(true)" class="reply-btn"><i class="fa fa-reply " aria-hidden="true"></i></button>
                    <button @click="removeEmail"  class="remove-btn"><i class="fa fa-trash " aria-hidden="true"></i></button>
                </div>
            </div>
         <!-- </div> -->
            <email-compose :isReply="isReply" :emailToEdit="email"  v-if="isComposeMode" @clsCompose="closeCompose"/>
        </section>
        `,
  data() {
    return {
      email: null,
      isComposeMode: false,
      isReply: false,
      listType: null,
      isMoved:false
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
      this.$router.push({ name: "email", params: { type: this.listType } });
    },
    openSideBar() {
      this.isMoved = true;
    },
    closeSideBar() {
      this.isMoved = false;
    }
  },
    computed : {
      isMovedClass (){
        return this.isMoved
    }
  },
  created() {
    const { emailId, type } = this.$route.params;
    this.listType = type;
    emailService.getById(emailId).then((email) => {
      this.email = email;
      this.email.isRead = true;
    });
  },
  components: {
    emailService,
    sideNav,
    emailCompose,
    emailStatus,
    userMsg,
    emailHeader,
  },
};
