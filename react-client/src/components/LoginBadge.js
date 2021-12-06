//import Session from "../services/session";
const Session = {};

function login() {
    this.$router.push('/login')
}

function name() {
    return this.Session.user.firstName + ' ' + this.Session.user.lastName;
}


export default ()=> ( !Session.user ? 
    <div class="buttons" v-if="!Session.user">
        <a class="button is-primary">
            <strong>Sign up</strong>
        </a>
        <a class="button is-light" click="login">
            Log in
        </a>
    </div> :
    <div>
        Hello {name}
    </div>
)