import axios from "axios";
import UseAuth from "./UseAuth";
import { useNavigate } from "react-router-dom";

const axiosSecure=axios.create({
    baseURL:'http://localhost:5000',
    withCredentials:true
})

const UseAxiosSecure = () => {

   const {logOut}=UseAuth()
   const navigate=useNavigate()

    axiosSecure.interceptors.response.use(
        res=>{
            console.log('age')
            return res
        },
      async error=>{
            if(error.response.status === 401 || error.response.status === 403){
                 await logOut()
                 navigate('/login')
            }
            return Promise.reject(error)
        }
    )

    return axiosSecure
};

export default UseAxiosSecure;