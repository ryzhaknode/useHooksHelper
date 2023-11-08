import {createBrowserRouter} from "react-router-dom";
import App from "../ui/App.tsx";
import UsePage from "../../pages/UsePage/UsePage.tsx";
import HooksPage from "../../pages/HooksPage/HooksPage.tsx";
import HelperPage from "../../pages/HelperPage/HelperPage.tsx";
import {RoutePath} from "../../shared/config/routeConfig.tsx";
import MainPage from "../../pages/MainPage/MainPage.tsx";


export const router = createBrowserRouter([
    {
        path: '/*',
        element: <App/>,
        children: [
            {
                index: true,
                element: <MainPage/>
            },
            {
                path: RoutePath.use,
                element: <UsePage/>
            },
            {
                path: RoutePath.hooks,
                element: <HooksPage/>
            },
            {
                path: RoutePath.helper,
                element: <HelperPage/>
            }
        ]
    },
]);