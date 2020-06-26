import { eventBus, EVENT_SHOW_MSG } from '../services/event-bus.service.js';

export default {
    template: `
        <section class="user-msg" v-if="msg">
            <button @click="close">x</button>
            <p>{{msg}}</p>
        </section>
    `,
    data() {
        return {
            msg: null,
            timeout: null
        }
    },
    computed: {
        msg() {
            // if (!this.msg) return ''
            return this.msg
        }
    },
    created() {
        eventBus.$on(EVENT_SHOW_MSG, msg =>{
            clearTimeout(this.timeout)
            console.log(msg)
            this.msg = msg;
            this.timeout = setTimeout(()=>{this.msg = null}, 20000)
        })
    },
    methods: {
        close() {
            this.msg = null;
            clearTimeout(this.timeout)
        }
    }
}