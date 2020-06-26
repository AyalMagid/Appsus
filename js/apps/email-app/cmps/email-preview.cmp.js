
export default {
    props: ['email'],
    template: `
         <router-link :to="'/email/' + email.id">
             <li :class="isRead" class="email-preview flex space-between clean-list">
                <div>
                 <input @click.stop type="checkbox" v-model="email.isRead" title="Mark as Read/Unread">
                 <input @click.stop class="star" type="checkbox" title="bookmark starred Emails">
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
        }
}