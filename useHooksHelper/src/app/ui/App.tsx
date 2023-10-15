import './App.scss'
import AppRoutes from "../router/ui/AppRoutes.tsx";
import Layout from "../../widgets/Layout/ui/Layout.tsx";

function App() {

    return (
        <div className='app'>
            <Layout>
                <AppRoutes/>
            </Layout>
        </div>
    )
}

export default App
