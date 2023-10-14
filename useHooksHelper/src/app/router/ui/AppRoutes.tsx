import {Route, Routes} from "react-router-dom";
import {routeConfig} from "../../../shared/config/routeConfig.tsx";

const AppRoutes = () => {
    return (
        <Routes>
            {Object.values(routeConfig).map(route => (
                <Route
                    key={route.path}
                    path={route.path}
                    element={route.element}
                />
            ))}
        </Routes>
    );
};

export default AppRoutes;