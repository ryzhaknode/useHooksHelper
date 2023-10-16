import cls from './Header.module.scss'
import Navbar from "../../Navbar/ui/Navbar.tsx";
import ReactLogo from '../logo/react.svg';
import MyLink from "../../../shared/ui/MyLink/MyLink.tsx";

// interface FooterProps {
//     className?: string;
// }

export const Header = () => {
    return (
        <div className={cls.header}>
            <div className={cls.headerContent}>
                <MyLink to={'/'} className={cls.logo}>
                    <img src={ReactLogo} alt="logo"/>
                </MyLink>
                <Navbar/>
            </div>
        </div>
    );
};

export default Header;