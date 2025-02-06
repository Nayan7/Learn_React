import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return(
        <div>
            <h1>About</h1>
            <h2>This is Namaste React Web Series</h2>
            <User name={"Nayan Joshi Function"} location={"Texas, Dallas"}/>
            <UserClass name={"Nayan Joshi Class"} location={"Texas, Dallas"}/>
        </div>
    );
};


export default About;