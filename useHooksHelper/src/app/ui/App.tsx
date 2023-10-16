import './App.scss'
import AppRoutes from "../router/ui/AppRoutes.tsx";
import Layout from "../../widgets/Layout/ui/Layout.tsx";

function App() {

    return (
        <>
            <Layout>
                <AppRoutes/>
            </Layout>
        </>
    )
}

export default App
