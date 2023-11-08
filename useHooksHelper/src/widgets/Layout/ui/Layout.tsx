import cls from './Layout.module.scss'
import Header from "../../Header/ui/Header.tsx";
import Footer from "../../Footer/ui/Footer.tsx";
import {ReactNode} from "react";
import {ThemeProvider} from "@mui/material";
import {theme} from "../../../app/theme/theme.ts";

interface LayoutProps {
    children: ReactNode;
}

export const Layout = ({children}: LayoutProps) => {
    return (
        <>
            <ThemeProvider theme={theme}>
                <Header/>
                <div className={cls.bodyContainer}>
                    <main className={cls.main}>
                        {children}
                    </main>
                </div>
                <Footer/>
            </ThemeProvider>

        </>
    );
};

export default Layout;