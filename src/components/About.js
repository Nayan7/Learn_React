import User from "./User";
import UserClass from "./UserClass";
import {useContext} from 'react';
import UserContext from "../utils/UserContext";

//<User name={"Nayan Joshi Function"} location={"Texas, Dallas"}/> can be used above 

const About = () => {

    const {loggedInUser} = useContext(UserContext);
    return(
        <div>
            <h1>About</h1>
            <div>
                Logged In User:
                {loggedInUser}
            </div>
            <h2>This is Namaste React Web Series</h2>
            <User />
            <UserClass />
        </div>
    );
};


export default About;