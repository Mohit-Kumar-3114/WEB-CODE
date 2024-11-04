import axios from "axios";
import { useEffect} from "react"
import { BACKEND_URL } from "../config";

export const User = () => {
    useEffect(() => {
        axios.get(`${BACKEND_URL}/user`, {
            withCredentials: true,
          })
            .then(res => {
                console.log(res.data);
            })
    }, []);

    return <div>
        You're new user
        <br /><br />
        <button onClick={() => {
            axios.post(`${BACKEND_URL}/logout`, {
                withCredentials: true,
            })
        }}>Logout</button>
    </div>
}