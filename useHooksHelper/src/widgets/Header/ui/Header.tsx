import cls from './Header.module.scss'
import Navbar from "../../Navbar/ui/Navbar.tsx";
import ReactLogo from '../logo/react.svg';
import MyLink from "../../../shared/ui/MyLink/MyLink.tsx";
import {Box} from "@mui/material";

// interface FooterProps {
//     className?: string;
// }

export const Header = () => {
    return (
        <Box className={cls.header}>
            <Box className={cls.headerContent}>
                <MyLink to={'/'} className={cls.logo}>
                    <img src={ReactLogo} alt="logo"/>
                </MyLink>
                <Navbar/>
            </Box>
        </Box>
    );
};

export default Header;