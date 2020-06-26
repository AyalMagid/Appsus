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
                        <button @click="emitClsCompose" class="cls-compose"><i class="cls-btn fa fa-window-close" aria-hidden="true"></i></button>
                    </div>
                      <template v-if="!isReply">
                        <div class="flex space-between">
                            <input type="text" placeholder="To" />
                            <div>
                                <button v-show="!isCc" @click="isCc=true">Cc</button><button v-show="!isBcc" @click="isBcc=true">Bcc</button>
                            </div>
                        </div>
                        <input v-show="isCc" type="text" placeholder="Cc"/>
                        <input v-show="isBcc" type="text" placeholder="Bcc"/>
                        <input type="text" placeholder="Subject" v-model="subject"/>
                        <!-- <h4>Bcc: </h4> -->
                     </template>
                    <div class="email-body">
                        <textarea v-if="isReply" name="email-body"  v-model="txt"></textarea>
                        <textarea v-else name="email-body"  v-model="txt" ></textarea>
                        <div class="btns-container">
                            <button @click.prevent="sendEmail" class="submit-btn" :disabled="!isValid" ><i class="fa fa-paper-plane send-btn" aria-hidden="true"></i></button>
                            <button class="delete-btn" @click.prevent="emitClsCompose"><i class="fa fa-trash" aria-hidden="true"></i></button>
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
      isBcc: false 
    };
  },
  computed: {
    isValid() {
      return this.txt ? true : false;
    }

  },
    methods: {
        emitClsCompose (){
            this.$emit('clsCompose', false);
            this.isCc = false,
            this.isBcc = false 
        },
        sendEmail(){
            let email = emailService.createEmail(this.txt, this.subject)
            // adding it to inbox as incoming mail and to sent mail also
            emailService.addEmail(email)
            this.emitClsCompose()
            eventBus.$emit(EVENT_SHOW_MSG, `${this.subject} was sent!`);
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

