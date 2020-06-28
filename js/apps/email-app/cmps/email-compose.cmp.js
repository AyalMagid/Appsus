import { emailService } from "../services/email-service.js";
import {eventBus, EVENT_SHOW_MSG} from '../services/event-bus.service.js';

export default {
  props: ['emailToEdit', 'isReply'],
  template: `

        <section class="email-compose">
            <form>
                 <div class="flex flex-col compose-container">
                     <div class="flex space-between">
                         <template v-if="isReply">
                            <h3>{{emailToEdit.address}}</h3>
                            <input type="text"  v-model="subject" placeholder="Subject"/>
                        </template>
                         <h3 v-else>New Message</h3>
                        <button @click="emitClsCompose(true)" class="cls-compose"><i class="cls-btn i-btns fa fa-window-close" aria-hidden="true"></i></button>
                    </div>
                      <template v-if="!isReply">
                        <div class="flex space-between">
                            <input class="email-to" type="text" placeholder="To" />
                            <div>
                                <button v-show="!isCc" @click="isCc=true">Cc</button>
                                <button v-show="!isBcc" @click="isBcc=true">Bcc</button>
                            </div>
                        </div>
                        <input v-show="isCc" type="text" placeholder="Cc"/>
                        <input v-show="isBcc" type="text" placeholder="Bcc"/>
                        <input type="text" placeholder="Subject" v-model="subject"/>
                     </template>
                    <div class="email-body">
                        <textarea v-if="isReply" name="email-body"  v-model="txt"></textarea>
                        <textarea v-else name="email-body"  v-model="txt" ></textarea>
                        <div class="btns-container" >
                            <button @click.prevent="sendEmail" class="send-btn" :disabled="!isValid" ><i class="i-btns fa fa-paper-plane " aria-hidden="true"></i></button>
                            <button class="delete-btn" @click.prevent="emitClsCompose(false)"><i class="i-btns fa fa-trash" aria-hidden="true"></i></button>
                            <button @click.prevent="makeNote"  :class="{'pressed':!isNote}">{{!isNote? 'Make a note':'Email will be saved as note - click to cancel'}}</button>
                        </div>
                    </div>   
                 </div>
            </form>
        </section>
`,
  data() {
    return {
      txt: '',
      subject: '',
      isCc: false,
      isBcc: false,
      isNote: false
    };
  },
  computed: {
    isValid() {
      return this.txt ? true : false;
    },


  },
    methods: {
        emitClsCompose (isDraft){
            if ((isDraft)&&(this.txt!=='')) {
                let email = emailService.createEmail(this.txt, this.subject, true, false, false)
                console.log('draft', email)
                emailService.addEmail(email)
            }
            this.$emit('clsCompose', false);
            this.isCc = false,
            this.isBcc = false ,
            this.isNote = false
        },
        sendEmail(){
            let email = emailService.createEmail(this.txt, this.subject, false, true, true)
            // adding it to inbox as incoming mail and to sent mail also
            emailService.addEmail(email)
            console.log('sent', email)
            eventBus.$emit(EVENT_SHOW_MSG, `Email sent!`);
            if (this.isNote) {
                console.log('yesss')
                this.$router.push({name:'addEmailNote',params:{title:this.subject,content:this.txt}})
            } 
            this.emitClsCompose(false)
        },
        makeNote (){
            this.isNote = !this.isNote
        },

    },
    created (){
            if (this.emailToEdit && this.isReply) {
            this.txt = this.emailToEdit.body
            this.subject = 'Re: ' + this.emailToEdit.subject
        }
    },
    components :{
        emailService,
        eventBus
    }
  
};

