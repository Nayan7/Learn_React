import RestaurantCard from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";


const Body = () => {

    // State variable -> Super powerful variable

    //React Hooks are normal JS functions

    const [ListOfRestaurants, setListOfRestaurants] = useState([]);

    const [filteredRestaurant, setfilteredRestaurant] = useState();

    const [SearchText, setSearchText] = useState("");

    console.log(ListOfRestaurants);

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = await fetch(
            'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
        );

        const json = await data.json();
        //Read about optional chaining
        setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false) return <h1>Looks like you are offline! Please check your internet connection</h1>

    const {loggedInUser, setuserName} = useContext(UserContext);

    //Conditional rendering
   
    return ListOfRestaurants.length == 0 ? <Shimmer /> : (
        <div className = 'body'>
            <div className = 'filter flex'>
                <div className="search m-4 p-4">
                    <input type="text" 
                    className="border border-solid border-black" 
                    value={SearchText} 
                    onChange = {(e) => {
                        setSearchText(e.target.value);
                    }}></input>
                    <button className='px-4 py-2 bg-green-100 m-4 rounded-lg' 
                    onClick = {() => {
                        //Filter the restaurants and update the UI
                        const filteredRestaurant = ListOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(SearchText.toLowerCase()));
                        setfilteredRestaurant(filteredRestaurant);
                    }}>Search</button>
                </div>
                <div className='search m-4 p-4 flex items-center'>
                
                <button className="px-4 py-2 bg-gray-100 rounded-lg" 
                onClick={() => {
                    const filteredList = ListOfRestaurants.filter(
                        (res)=> res.info.avgRating>4.3);
                        setListOfRestaurants(filteredList);
                }}> Top Rated Restaurants </button>

                </div>
                <div className='search m-4 p-4 flex items-center'>
                <label>UserName :</label>
                <input className='border border-black p-2' 
                value={loggedInUser}
                onChange={(e) => setuserName(e.target.value)}></input>
                </div>
                
            </div>
            <div className = 'flex flex-wrap'>
                {
                    filteredRestaurant.map((restaurant) => (
                    <Link key={restaurant.info.id} to={'/restaurants/'+restaurant.info.id}>
                        <RestaurantCard resData={restaurant} /></Link>))   
                }
            </div>
        </div>
    )
};

export default Body;