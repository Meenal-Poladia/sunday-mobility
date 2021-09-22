import FormFieldInput from "./FormFieldInput";
import './Login.css'
import "../global.css"
import {Link} from "react-router-dom";
import {useState} from "react";
import {withRouter} from "react-router-dom";

const Login = (props) => {
    let [showMessage, setShowMessage] = useState(false);
    let user;

    const handleSubmit = (e) => {
        e.preventDefault();
        user = localStorage.getItem(e.target[0].value);
        if (!user) {
            setShowMessage(true);
        } else {
            user = JSON.parse(user);
            if (user.email === e.target[0].value && user.password === e.target[1].value) {
                setShowMessage(false);
                // goto users page
                props.history.push("/user-details");
            } else {
                setShowMessage(true);
            }
        }
    }

    return (
        <article className="account-details-page">
            <h1>Welcome Back!</h1>
            <h3>Please login to your account</h3>
            {showMessage && <p> Your details are incorrect, please try again</p>}
            <form onSubmit={handleSubmit}>
                <FormFieldInput
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    minLength="1"
                    regx="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                />
                <FormFieldInput
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                    minLength="8"
                    maxLength="20"
                    regx="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"
                    title="Password should contain atleast one letter, one number, one special character and minimum 8 characters"
                />
                <div className="remember-forgot">
                    <div>
                        <input type="checkbox" id="rememberMe" name="rememberMe"/>
                        <label htmlFor="rememberMe">Remember Me</label>
                    </div>
                    <p className="forgot-password">
                        <Link to="/register">
                            New User? Register Here!
                        </Link>
                    </p>
                </div>
                <button className="btn">Login</button>
            </form>
            <footer>
                <p>Terms of use.
                    <span> Privacy Policies.</span>
                </p>
            </footer>
        </article>
    )
}


export default withRouter(Login);