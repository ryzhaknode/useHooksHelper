import cls from './Layout.module.scss'
import Header from "../../Header/ui/Header.tsx";
import Footer from "../../Footer/ui/Footer.tsx";
import {ReactNode} from "react";

interface LayoutProps {
    children: ReactNode;
}

export const Layout = ({children}: LayoutProps) => {
    return (
        <>
            <Header/>
            <div className={cls.bodyContainer}>
                <main className={cls.main}>
                    {children}
                </main>
            </div>
            <Footer/>

        </>
    );
};

export default Layout;