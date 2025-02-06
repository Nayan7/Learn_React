//Learn how to use Class based component

//the workflow of elemetns being called in a parent-child relation
//parent constructor, parent render, child constructor, child render, child mount, parent mount
//componentdidmount is used to make an API call 
//if multiple childs then
//parent constructor, parent render, first child constructor, first child render, second child constructor, second child render, first child mount, second child mount, parent mount
import React from 'react';

class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count: 0,
        };
    };

    render(){
        const {name, location} = this.props;
        const {count} = this.state;

        return(
            <div className='user-card'>
                <h1>Count: {count}</h1>
                <button onClick={() => {
                    //never update state variables directly
                    this.setState({
                        count: this.state.count + 1,
                    })
                }}>Count Increase</button>
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: blahblah</h4>
            </div>
        ); 
    }
}

export default UserClass;