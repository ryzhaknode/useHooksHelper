import {createTheme} from "@mui/material";


export const theme = createTheme({

    palette: {
        primary: {
            main: '#0052cc',
        },
        secondary: {
            main: '#edf2ff',
        },
        info: {
            main: '#0fb9d3'
        }
    },

    typography: {
        h6: {
            fontSize: '1.5rem',
            fontWeight: 500,
            color: "green",

        }
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '8px', // Adjust button border radius
                },
                contained: {
                    backgroundColor: '#1e1e27', // Adjust the background color of contained buttons
                    color: 'white', // Adjust the text color of contained buttons
                    '&:hover': {
                        backgroundColor: '#0056b3', // Adjust the hover background color
                    },
                },
                outlined: {
                    borderColor: '#4ad7e5', // Adjust the border color of outlined buttons
                    color: '#000', // Adjust the text color of outlined buttons
                    '&:hover': {
                        backgroundColor: 'rgba(0, 123, 255, 0.04)', // Adjust the hover background color
                    },
                },
            },
        }
    }

})