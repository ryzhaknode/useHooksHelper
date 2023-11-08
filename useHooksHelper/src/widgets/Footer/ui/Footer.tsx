import cls from './Footer.module.scss'
import {classNames} from "../../../shared/lib/classNames/classNames.ts";

export const Footer = () => {
    return (
        <div className={cls.footer}>
            <div className={classNames(cls.myLinks)}>
                <h3> myLinks:</h3>
                <div className={cls.myLinks__links}>
                    <a href={'https://github.com/ryzhaknode'}>gitHub</a>
                    <a href={'https://www.linkedin.com/in/denys-ryzhak-9a01b021a/'}>linkedin</a>
                </div>

            </div>
        </div>
    );
};

export default Footer;