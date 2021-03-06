import { emailService } from "../services/email-service.js";

export default {
    props: ['email','listType'],
    template: `
         <router-link :to="'/email/list/'+ listType + '/' + email.id">
             <li :class="isRead" class="email-preview flex space-between clean-list">
                <div class="checkboxes">
                    <input @click.stop="toggleStarred" class="star" type="checkbox" title="bookmark starred Emails">
                    <input @click.stop type="checkbox" class="checkbox" v-model="email.isRead" title="Mark as Read/Unread">
                </div>
                <template class="flex space-between">
                    <p class="email-name">{{email.name}}</p>
                    <p class="email-subject">{{email.subject}}</p>
                    <p>{{sentAt}}</p>
                    <button @click.prevent="removeEmail" class="remove-btn"><i   class="fa fa-trash " aria-hidden="true"></i></button>
                </template>
             </li>
        </router-link>
        `,
          computed : {

            //need to make css class bold or regular 
            isRead () {
                if (this.email.isRead) return 'read'
                else return 'unread'
            },
            
            // convert the mil sec to readbale time or date
            sentAt () {
                let date = new Date(this.email.sentAt).toLocaleString() 
                return date
            }
        },
        methods : {
            toggleStarred (){
                this.email.isStarred = !this.email.isStarred
            },
            removeEmail() {
                emailService.removeEmail(this.email.id, this.listType);
                // this.$router.push({ name: "email", params: { type: this.listType } });
              }
        },
        components: {
            emailService
        }
}

  
 
 
