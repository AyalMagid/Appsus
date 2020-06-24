
export default {
    props: ['email'],
    template: `
             <li>
                    <p>{{email.subject}}</p>
             </li>
        `,
}