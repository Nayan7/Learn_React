import { useState, useEffect } from 'react';
import { MENU_API } from '../utils/constants';

const useRestaurantMenu = (resId) => {

    const [resInfo, setresInfo] = useState(null);
    useEffect(() => {
        fetchData();
    },[]);

    const fetchData = async () => {

        const data = await fetch(MENU_API + resId + "&catalog_qa=undefined&submitAction=ENTER");
        
        const json = await data.json();
        console.log(json);
        
        setresInfo(json.data);
    }
    return resInfo;
}

export default useRestaurantMenu;