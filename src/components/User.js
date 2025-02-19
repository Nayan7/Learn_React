import {useState, useEffect} from 'react';

const User = () => {
    
    const [name, setname] = useState("None");
    const [location, setlocation] = useState("None");
    const [avatar_url, setavatar_url] = useState("");

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async() => {
        const data = await fetch('https://api.github.com/users/Nayan7');
        const json = await data.json();

        setname(json?.name);
        setlocation(json?.location);
        setavatar_url(json?.avatar_url);
    }


    return(
        <div className='user-card m-4 p-4 bg-gray-50 rounded-lg'>
            <img src={avatar_url}></img>
            <h2>Name: {name}</h2>
            <h3>Location: {location}</h3>
            <h4>Contact: blahblah</h4>
        </div>
    );
};

export default User;