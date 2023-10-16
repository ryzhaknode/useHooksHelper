import cls from './MyLink.module.scss'
import {Link} from "react-router-dom";
import {ReactNode} from "react";
import {classNames} from "../../lib/classNames/classNames.ts";

export enum MyLinkTheme {
    WHITE = 'white',
    BLACK = 'black',
}

interface MyLinkProps {
    to: string;
    children?: ReactNode;
    className?: string;
    theme?: MyLinkTheme;

}


export const MyLink = (props: MyLinkProps) => {
    const {
        to,
        className = '',
        children,
        theme = MyLinkTheme.WHITE,
    } = props

    return (
        <Link to={to} className={classNames(cls.myLink, {[cls[theme]]: true}, [className])}>
            {children}
        </Link>
    );
};

export default MyLink;