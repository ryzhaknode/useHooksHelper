import cls from './Navbar.module.scss'
import MyLink from "../../../shared/ui/MyLink/MyLink.tsx";

export const Navbar = () => {
    return (
        <div className={cls.navbar}>
            <MyLink to={'/use'} >use</MyLink>
            <MyLink to={'/hooks'}>hooks</MyLink>
            <MyLink to={'/helper'}>helper</MyLink>
        </div>
    );
};

export default Navbar;