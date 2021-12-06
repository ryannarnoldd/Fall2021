// import router from "../router";
import { Login } from "./users";
import { toast } from "react-toastify";

const session = {
    user: {
        firstName: "John",
        lastName: "Doe",
        email: "this@gmail.com",
        role: "admin",
        _id: "5d8f8f8f8f8f8f8f8f8f8f8"
    },
    messages: [                             // {text: string, type: string}
    ],
    toRoute: '/feed',
    async Login(handle, password) {
        try {
            const response = Login(handle, password);
            this.user = response.user;

            //router.push(this.toRoute);
        } 
        catch (error) {
            this.Error(error);
        }
    },
    Error(error) {
        console.log(error);
        const msg = error.msg || error;
        this.messages.push({ text: msg, type: "warning"})
        toast.error(msg, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        
    },
}

export default session;

// export function