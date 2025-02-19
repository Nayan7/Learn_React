import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from "./components/Header";
import Body from "./components/Body";
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import RestaurantMenu from './components/RestaurantMenu';
import {useState, useEffect} from 'react';
import UserContext from './utils/UserContext';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import Cart from './components/Cart';
import Login from './components/Login';
import Register from './components/Register';

/*
Header
    Logo
    Nav Items
Body
    Search
    RestaurantContainer
        RestaurantCard
            Img
            Name of Res, Star Rating, Cuisine, Delivery time
Footer
    Copyright
    Links
    Address
    Contact
 */


const AppLayout = () => {

    const [userName, setuserName] = useState();

    useEffect(() => {
        const data = {
            name: "Nayan Joshi",
        };
        setuserName(data.name);
    }, []);

    return(
        <Provider store={appStore}>
        <UserContext.Provider value={{loggedInUser:userName, setuserName}}>
        <div className='app'>
            <Header /> {/* This will always be shown */}
            <Outlet /> {/* This is where child routes will be rendered */}
        </div>
        </UserContext.Provider>
        </Provider>
    );
    
};
const appRouter = createBrowserRouter([
    {
        path: "/", 
        element: <AppLayout />, // Wrap all children with AppLayout
        children: [
            {
                path: "/", // Default route
                element: <Body />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu />,
            },
            {
                path: "/cart",
                element: <Cart />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/register",
                element: <Register />,
            },
        ],
        errorElement: <Error />, // Display error page for undefined routes
    },
    
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

