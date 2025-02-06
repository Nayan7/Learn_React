import {useState} from 'react';

const User = (props) => {
    const [count, setCount] = useState(0);
    const {name, location} = props;
    return(
        <div className='user-card'>
            <h1>Count: {count}</h1>
            <button onClick={() => {
                setCount(prevCount => prevCount + 1);
            }}>Increase count</button>
            <h2>Name: {name}</h2>
            <h3>Location: {location}</h3>
            <h4>Contact: blahblah</h4>
        </div>
    );
};

export default User;