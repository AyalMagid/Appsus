
export default {
    props: ['email'],
    template: `
         <router-link :to="'/email/' + email.id">
             <li :class="isRead">

                    <p>{{email.subject}}</p>
             </li>
             </router-link>
        `,
          computed : {

            //need to make css class bold or regular 
            isRead () {
                if (this.email.isRead) return 'read'
                else return 'not-read'
            }
        }
}