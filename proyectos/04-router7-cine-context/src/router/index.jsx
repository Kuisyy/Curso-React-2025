import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import MovieDetail from "../pages/MovieDetail";
import MovieList from "../pages/MovieList";
import Search from "../pages/Search";
import Reviews from "../pages/Reviews";
import Favourites from "../pages/Favourites";
import { ROUTES } from "./paths";
import AboutPage from "../pages/AboutPage";



export const router = createBrowserRouter([
    {
        path:ROUTES.HOME,
        element: <RootLayout />,
        errorElement:<ErrorPage/>,
        children:[
            {
                index:true,
                element:<Home/>
            },
            {
                path:ROUTES.MOVIELIST,
                element: <MovieList/>
            },
            {
                path:ROUTES.SEARCH,
                element: <MovieDetail/>
            },
            {
                path:ROUTES.SEARCH,
                element:<Search/>
            },
            {
                path:ROUTES.REVIEWS,
                element:<Reviews/>
            },
            {
                path:ROUTES.FAVOURITES,
                element:<Favourites/>
            },
            {
                path:ROUTES.ABOUT,
                element:<AboutPage/>
            }
        ]
    }
]);

export default router;