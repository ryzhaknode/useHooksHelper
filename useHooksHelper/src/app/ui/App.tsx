import './App.css'
import AppRoutes from "../router/ui/AppRoutes.tsx";

function App() {

    return (
        <div className='app'>
            <div>Header</div>
            <AppRoutes/>
            <div>Footer</div>
        </div>
    )
}

export default App
