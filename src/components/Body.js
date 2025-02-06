import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {

    // State variable -> Super powerful variable

    //React Hooks are normal JS functions

    const [ListOfRestaurants, setListOfRestaurants] = useState([]);

    const [filteredRestaurant, setfilteredRestaurant] = useState();

    const [SearchText, setSearchText] = useState("");

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

    //Conditional rendering
   
    return ListOfRestaurants.length == 0 ? <Shimmer /> : (
        <div className = 'body'>
            <div className = 'filter'>
                <div className="search">
                    <input type="text" 
                    className="search-box" 
                    value={SearchText} 
                    onChange = {(e) => {
                        setSearchText(e.target.value);
                    }}></input>
                    <button onClick = {() => {
                        //Filter the restaurants and update the UI
                        const filteredRestaurant = ListOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(SearchText.toLowerCase()));
                        setfilteredRestaurant(filteredRestaurant);
                    }}>Search</button>
                </div>
                <button className="filter-btn" 
                onClick={() => {
                    const filteredList = ListOfRestaurants.filter(
                        (res)=> res.info.avgRating>4.3);
                        setListOfRestaurants(filteredList);
                }}> Top Rated Restaurants </button>
            </div>
            <div className = 'res-container'>
                {
                    filteredRestaurant.map((restaurant) => (
                    <Link key={restaurant.info.id} to={'/restaurants/'+restaurant.info.id}><RestaurantCard resData={restaurant} /></Link>))   
                }
            </div>
        </div>
    )
};

export default Body;