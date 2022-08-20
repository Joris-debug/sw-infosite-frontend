import classes from "./Contacts.module.css"
import {useRef} from "react";
import { useNavigate } from "react-router-dom";


function Contacts() {
    const navigation = useNavigate();
    const emailRef = useRef(" ");
    const messageRef = useRef(" ");

    function handleMessage(event) {
        event.preventDefault();
        const request = new XMLHttpRequest();
        request.open("POST", "http://localhost:3001/msg/send");

        request.setRequestHeader('Content-type', 'application/json');

        const params = {
            username: emailRef.current.value,
            content: messageRef.current.value,
        }
        request.send(JSON.stringify(params));
        navigation("../", { replace: true });
    }

    return (
        <div className={classes.contactForm} onSubmit={handleMessage}>
            <h1>Leave a message</h1>
            <form>
                <label htmlFor={"email"}>Your Email:</label>
                <br/>
                <input type="email" required id="email" ref={emailRef}/>
                <br/>
                <br/>
                <label htmlFor={"desc"}>Content:</label>
                <textarea rows="5" required id="desc" ref={messageRef}/>
                <br/>
                <button className={classes.button}>send message</button>
            </form>

        </div>
    )
}

export default Contacts;