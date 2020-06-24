
export default {
    props: ['email'],
    template: `
         <router-link :to="'/email/' + email.id">
             <li>
                    <p>{{email.subject}}</p>
             </li>
             </router-link>
        `,
}