import { emailService } from "../services/email-service.js";
import {eventBus} from '../services/event-bus.service.js';

export default {
  props: ['emailToEdit', 'isReply'],
  template: `

        <section class="email-compose">
            <form>
                 <div class="flex flex-col details-container">
                     <div class="flex space-between">
                        <h3 v-if="isReply">replay-sign{{emailToEdit.address}}</h3>
                        <h3 v-else>New Message</h3>
                        <button @click="emitClsCompose" class="cls-compose">x</button>
                    </div>
                      <template v-if="!isReply">
                        <h4>To: </h4>
                        <h4>Cc: </h4>
                        <h4>Bcc: </h4>
                        <h4>Subject: </h4>
                     </template>
                    <div class="email-body">
                        <textarea v-if="isReply" name="email-body" rows="20" cols="60" v-model="txt"></textarea>
                        <textarea v-else name="email-body" rows="4" cols="50" v-model="txt" ></textarea>
                        <button @click.prevent="sendEmail" lass="submit-btn" :disabled="!isValid" >Send</button>
                        <button>Delete</button>
                    </div>   
                 </div>
            </form>
        </section>
`,
  data() {
    return {
      txt: '',
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
        },
        sendEmail(){
            let newEmail = emailService.createEmail(this.txt)
            emailService.addEmail(newEmail)
            this.emitClsCompose()
        }
    },
    created (){
            if (this.emailToEdit && this.isReply) {
            this.txt = this.emailToEdit.body
        }
    },
    components :{
        emailService
    }
  
};

