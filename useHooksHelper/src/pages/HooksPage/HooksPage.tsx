import CustomHook from "../../widgets/CustomHook/ui/CustomHook.tsx";
import cls from './HooksPage.module.scss'
import {classNames} from "../../shared/lib/classNames/classNames.ts";

const HooksPage = () => {
    return (
        <div className={classNames(cls.hooksPage)}>
            <CustomHook/>


        </div>
    );
};

export default HooksPage;