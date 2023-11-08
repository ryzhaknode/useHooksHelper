import {FC} from "react";
import {Box} from "@mui/material";

interface HelperProps {
    theme?: string
}

export enum themeVariant {
    dark = 'dark',
    light = 'light'
}

const HelperPage: FC<HelperProps> = () => {
    return (
        <Box>
            TYPESCRIPT TEST{themeVariant.dark}

            <Box>HELPERS</Box>

        </Box>
    );
};

export default HelperPage;