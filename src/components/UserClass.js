//Learn how to use Class based component

//the workflow of elemetns being called in a parent-child relation
//parent constructor, parent render, child constructor, child render, child mount, parent mount
//componentdidmount is used to make an API call 
//if multiple childs then
//parent constructor, parent render, first child constructor, first child render, second child constructor, second child render, first child mount, second child mount, parent mount
import React from 'react';

class UserClass extends React.Component{
    constructor(){
        super();

        this.state = {
            userInfo: {
                name: "None",
                location:"None",
                avatar_url: ""
            },
        };
    };

    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/Nayan7");
        const json = await data.json();

        this.setState({
            userInfo: json,
        })
    }

    render(){
        const {name, location, avatar_url} = this.state.userInfo;

        return(
            <div className='user-card'>
                <img src={avatar_url}></img>
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: blahblah</h4>
            </div>
        ); 
    }
}

export default UserClass;