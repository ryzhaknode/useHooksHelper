import {ReactNode} from "react";
import UsePage from "../../pages/UsePage/UsePage.tsx";
import HooksPage from "../../pages/HooksPage/HooksPage.tsx";
import HelperPage from "../../pages/HelperPage/HelperPage.tsx";
import MainPage from "../../pages/MainPage/MainPage.tsx";

enum AppRoutes {
    MAIN = 'main',
    USE = 'use',
    HOOKS = 'hooks',
    HELPER = 'helper'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.USE]: 'use',
    [AppRoutes.HOOKS]: 'hooks',
    [AppRoutes.HELPER]: 'helper',

}

interface RouterProps {
    path: string;
    element: ReactNode;
}

export const routeConfig: Record<AppRoutes, RouterProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage/>
    },
    [AppRoutes.USE]: {
        path: RoutePath.use,
        element: <UsePage/>
    },
    [AppRoutes.HOOKS]: {
        path: RoutePath.hooks,
        element: <HooksPage/>
    },
    [AppRoutes.HELPER]: {
        path: RoutePath.helper,
        element: <HelperPage/>
    }
}