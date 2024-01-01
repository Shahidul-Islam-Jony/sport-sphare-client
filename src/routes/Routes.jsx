import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Shop from "../pages/Shop/Shop";


const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'shop',
                element:<Shop></Shop>
            }
        ]
    }
])

export default router;