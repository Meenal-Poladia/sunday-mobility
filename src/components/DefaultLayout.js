import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import UserDetails from "./UserDetails";
import Error from "./Error";
import "./DefaultLayout.css";

const DefaultLayout = () => {
    return(
        <section className="layout">
            <div className="division">
                <img
                    src="sideImage.jpg"
                    alt="Default"
                    width="300px"/>
            </div>
            <Router className="division">
                <Switch>
                    <Route exact path ="/">
                        <Login/>
                    </Route>
                    <Route path="/login">
                        <Login/>
                    </Route>
                    <Route path="/Register">
                        <Register/>
                    </Route>
                    <Route path="/user-details">
                        <UserDetails/>
                    </Route>
                    <Route path="*">
                        <Error/>
                    </Route>
                </Switch>
            </Router>
        </section>
    )
}
export default DefaultLayout;