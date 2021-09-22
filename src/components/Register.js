import FormFieldInput from "./FormFieldInput";
import "../global.css";
import {Link} from "react-router-dom";
import "./Register.css";
import {useState} from "react";

const Register = () => {
    let [showMessage, setShowMessage] = useState(false);

    const handleRegistration = (ev) => {
        ev.preventDefault();
        localStorage.setItem(ev.target[2].value, JSON.stringify({
            name: ev.target[0].value,
            number: ev.target[1].value,
            email: ev.target[2].value,
            password: ev.target[3].value
        }))
        ev.target.reset();
        setShowMessage(true);
    };

    return (
        <article className="account-details-page">
            <h1>Create Account</h1>
            {showMessage && <p> User Added </p> }
            <form onSubmit={handleRegistration}>
                <FormFieldInput
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Name"
                    regx="^[a-zA-Z ]*$"
                />
                <FormFieldInput
                    type="tel"
                    id="number"
                    name="number"
                    placeholder="Phone Number"
                    minLength="10"
                    maxLength="10"
                    regx="[0-9]{3}[0-9]{3}[0-9]{4}"
                />
                <FormFieldInput
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email ID"
                    regx="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                />
                <FormFieldInput
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Set Password"
                    regx="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"
                    title="Password should contain atleast one letter, one number, one special character and minimum 8 characters"
                />
                <p className="go-to-login">
                    <Link to="/login">
                        Back to Login
                    </Link>
                </p>
                <button className="btn">Register</button>
            </form>
        </article>
    )
}
export default Register;