import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import UserDetails from "./UserDetails";
import Error from "./Error";
import "./DefaultLayout.css";

const DefaultLayout = () => {
    return(
        <section className="layout">
            <div className="image-container">
                <img
                    src="sideImage.jpg"
                    alt="Default"/>
            </div>
            <Router>
                <Switch>
                    <Route exact path ="/">
                        <Login/>
                    </Route>
                    <Route path="/login">
                        <Login/>
                    </Route>
                    <Route path="/register">
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