
export default {
    props: ['email','listType'],
    template: `
         <router-link :to="'/email/list/'+ listType + '/' + email.id">
             <li :class="isRead" class="email-preview flex space-between clean-list">
                <div class="checkboxes">
                    <input @click.stop="toggleStarred" class="star" type="checkbox" title="bookmark starred Emails">
                    <input @click.stop type="checkbox" class="checkbox" v-model="email.isRead" title="Mark as Read/Unread">
                </div>
                    <p>{{email.name}}</p>
                    <p>{{email.subject}}</p>
                    <p>{{sentAt}}</p>
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
                let date = new Date(this.email.sentAt).toString()
                return date
            }
        },
        methods : {
            toggleStarred (){
                this.email.isStarred = !this.email.isStarred
            }
        }
}