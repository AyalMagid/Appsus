import { eventBus, EVENT_SHOW_MSG } from '../services/event-bus.service.js';

export default {
    template: `
        <section class="user-msg" v-if="msg">
            <button @click="close"><i class="cls-btn  fa fa-window-close" aria-hidden="true"></i></button>
            <p>{{msgToShow}}</p>
        </section>
    `,
    data() {
        return {
            msg: null,
            timeout: null
        }
    },
    computed: {
        msgToShow() {
            return this.msg
        }
    },
    created() {
        eventBus.$on(EVENT_SHOW_MSG, msg =>{
            clearTimeout(this.timeout)
            console.log(msg)
            this.msg = msg;
            this.timeout = setTimeout(()=>{this.msg = null}, 3000)
        })
    },
    methods: {
        close() {
            this.msg = null;
            clearTimeout(this.timeout)
        }
    }
}