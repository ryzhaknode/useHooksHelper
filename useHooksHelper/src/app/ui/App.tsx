import './App.scss'
import AppRoutes from "../router/ui/AppRoutes.tsx";
import Layout from "../../widgets/Layout/ui/Layout.tsx";

function App() {


    // const obj = {
    //     name: 'Den',
    //     age: 24,
    // }

    const obj = Object.defineProperties({age: 10}, {
        age: {
            // value: 10,
            configurable: true,
            writable: false
        }
    })


    // Object.defineProperty(obj, 'age', {
    //     value: 10,
    //     writable: true
    //
    // })

    // obj.age = 'Oleg'

    // delete obj.age

    console.log('rebase')

    return (
        <>
            <Layout>
                <AppRoutes/>
            </Layout>
        </>
    )
}

export default App
