import axios from "axios";
import { useState } from "react";
import { Form, Button} from "react-bootstrap";
import Swal from "sweetalert2";

function Registration(){
        const [username, setUserName] = useState("");
        const [emailaddress, setEmailAddress] = useState("");
        const [password, setPassword] = useState("");

        //useEffect is used for GET not for POST
        function clearInput(){
            setUserName("");
            setEmailAddress("");
            setPassword("");
        }

        async function UserPost(){
            //console.log(username,emailaddress,password);
            const userDetails = {
                "username" : username,
                "email": emailaddress,
                "password": password
            }
            //console.log(userDetails);
            const response = await axios.post('https://book-my-show10.herokuapp.com/user-register', userDetails)
            .then((data)=>{
                Swal.fire({
                        title: `<strong>${data.data.message}</strong>`,
                        icon: 'success',
                        showCloseButton: true,                                
                        })}
            
            ).catch((err) =>{
                Swal.fire({
                        title: `<strong>${err.message}</strong>`,
                        icon: 'error',
                        showCloseButton: true,                                                                                     
              })}
            )
            //console.log(response);
            
            clearInput();
        }

    return(
        <div>
            <Form style={{padding: "130px 260px 40px 260px"}}>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>User Name</Form.Label>
                    <Form.Control value={username} onChange={(e) => setUserName(e.target.value)} type="text" placeholder="Enter Username" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control value={emailaddress} onChange={(e) => setEmailAddress(e.target.value)} type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary"  onClick={UserPost}>
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default Registration;
