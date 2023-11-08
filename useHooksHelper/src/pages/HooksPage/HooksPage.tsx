import CustomHook from "../../widgets/CustomHook/ui/CustomHook.tsx";
import cls from './HooksPage.module.scss'
import {classNames} from "../../shared/lib/classNames/classNames.ts";
import {useEffect, useLayoutEffect, useState} from "react";
import {Box} from "@mui/material";



const HooksPage = () => {

    return (
        <Box className={classNames(cls.hooksPage)}>
            <CustomHook/>
        </Box>
    );
};

export default HooksPage;