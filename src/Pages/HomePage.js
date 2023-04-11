import { useEffect, useState } from "react";
import { useAuth } from "../Hooks/Auth";

const urlEndpoint = process.env.REACT_APP_BACKEND

//home page component 
const HomePage = () => {

    const [message, setMessage] = useState("")
	const auth = useAuth()
	console.log(auth);

    useEffect(()=>{

        // if(auth.userToken){
            const fetchMessage = async () => {
                const headers = {
                    "Content-Type": "application/json",
                }

                headers[process.env.REACT_APP_TOKEN_HEADER_KEY] = auth.userToken

                console.log(headers)

                const response = await fetch(`${urlEndpoint}/users/message`, {
                    method: "GET",
                    headers: headers,
                });
                const responseJSON = await response.json();
                console.log(responseJSON)
                setMessage(responseJSON.message)
            }
            if (auth.userToken !== null) {
                fetchMessage()
            }
            if (auth.userToken === null) {
                setMessage("User Login Required")
		}
    // }
    // else {

    // }
	}, [auth.userToken])



    return (
        <div>
            <h1>Full Stack Blogging Tool App</h1>
            <p>Message: {message}</p>
        </div>
    )
}

export default HomePage