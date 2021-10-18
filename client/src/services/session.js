import router from "../router";
import { Login } from "./users";
import { NotificationProgrammatic } from "@oruga-ui/oruga-next/dist/esm/notification"

const session = {
    user: null,
    messages: [                             // {text: string, type: string}
    ],
    toRoute: '/feed',
    Login(handle, password) {
        try {
            const response = Login(handle, password);
            this.user = response.user;
            router.push(this.toRoute);
        } 
        catch (error) {
            this.messages.push({ text: error.msg, type: "warning"})
            NotificationProgrammatic.open({
                duration: 7500,
                message: error.msg,
                varient: 'danger',
                type: 'danger',
                closable: true,
            })
        }
    }
}

export default session;

// export function