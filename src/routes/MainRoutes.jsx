import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import NotFound from "../pages/static/NotFound";
import Login from "../pages/login/Login";
import Ourmenu from "../pages/ourmenu/Ourmenu";
import Homepage from "../pages/homepage/Homepage";
import Gallery from "../pages/gallery/Gallery";
import ContactUs from "../pages/contactus/ContactUs";
import Signup from "../pages/login/Signup";

const MainRoutes = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout/>,
        children:[
            {
               path:"/homepage",
               element:<Homepage/>
            },
            {
                path:"/ourmenu",
                element:<Ourmenu/>,
            },
            {
                path:"/gallery",
                element:<Gallery/>,
            },
            {
                path:"/contactus",
                element:<ContactUs/>,
            },
        ]
    },
    {
        path:"*",
        element:<NotFound/>,
    },
    {
        path:"/login",
        element:<Login/>,
    },
    {
        path:"/signup",
        element:<Signup/>,
    },
])
export default MainRoutes

