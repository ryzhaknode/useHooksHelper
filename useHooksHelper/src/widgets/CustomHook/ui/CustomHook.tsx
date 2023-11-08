import cls from './CustomHook.module.scss'
import {classNames} from "../../../shared/lib/classNames/classNames.ts";
import {useReducer, useState} from "react";
import Image from "../img/useReducer.png"
import Stick from "../img/stick.svg"
import {Box, Button, Typography, useTheme} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import SendIcon from '@mui/icons-material/Send';


type Action =
    | { type: 'INCREMENT'; payload: number }
    | { type: 'DECREMENT'; payload: number }
    | { type: 'MULTIPLY'; payload: number }


type State = {
    count: number;
    history: number[];
}

const intialState: State = {
    count: 1,
    history: [],
}


function reducer(state: State, action: Action) {
    switch (action.type) {

        case "INCREMENT": {

            if (state.count < 10) {

                const newCount = state.count + action.payload;
                return {
                    count: newCount,
                    history: [...state.history, newCount]
                };

            } else {
                return {
                    ...state
                };
            }
        }

        case "DECREMENT": {
            const newCount = state.count - action.payload;
            return {
                count: newCount,
                history: [...state.history, newCount]
            };
        }

        case 'MULTIPLY': {
            if (state.count < 6) {
                const newCount = state.count * action.payload;
                return {
                    count: newCount,
                    history: [...state.history, newCount]

                }
            } else {
                return {
                    ...state
                };
            }
        }

        default:
            return state;
    }
}

export const CustomHook = () => {
    const [state, dispatch] = useReducer(reducer, intialState);
    const [count, setCount] = useState<number>(1);
    const theme = useTheme()

    console.log(theme.palette.primary.main)

    // @ts-ignore
    const sticks = Array(state.count).fill().map((_, index) => (
        <img key={index} src={Stick} className={cls.visualBlock__sticksBlock__stick}/>
    ));

    const incrementDispatch = () => {
        dispatch({type: 'INCREMENT', payload: count})
    }

    // React.MouseEvent<HTMLButtonElement>
    // for types events
    const decrementDispatch = (e: React.MouseEvent<HTMLButtonElement>) => {
        dispatch({type: 'DECREMENT', payload: count})
    }

    const multiplyDispatch = () => {
        dispatch({type: 'MULTIPLY', payload: 2})
    }

    // Функція, яка буде викликана при натисканні на кнопку    // const onClickHandle = (e) => {
    //     //     setCount(prevCount => prevCount + 1);
    //     // };


    return (
        <Box className={classNames(cls.customHook, {}, [])}>

            <Box className={cls.customHook__title}>TITLE OF HOOKS</Box>

            <Box className={cls.customHook__container}>

                <Box className={cls.contentBlock}>

                    <Typography variant='h5'>VISUAL BLOCK</Typography>

                    <Box className={cls.contentBlock__container}>


                        <Box className={classNames(cls.contentBlock__main, {}, [cls.visualBlock])}>

                            <Box className={cls.visualBlock__image}
                            >

                                <img className={cls.visualBlock__image} src={Image} alt='logo' loading="lazy"/>

                            </Box>

                            <Box className={classNames(cls.visualBlock__information, {}, [])}
                            >

                                <Typography
                                    // color={theme.palette.primary.main}
                                    variant='h6'> range from 1 to 10</Typography>
                                <Box
                                    className={cls.visualBlock__sticksBlock}>
                                    {sticks}
                                </Box>

                                {/*<Typography> History of state:</Typography>*/}
                                {/*<Box className={cls.visualBlock__history}*/}
                                {/*>*/}
                                {/*    {state.history.map(item => (*/}
                                {/*        <span key={item}>{item}, </span>*/}
                                {/*    ))}*/}
                                {/*</Box>*/}

                            </Box>

                        </Box>

                    </Box>

                </Box>


                <Box className={cls.contentBlock}>

                    <Typography variant='h5'>TECHNICAL BLOCK</Typography>

                    <Box className={cls.contentBlock__container}>


                        <Box className={classNames(cls.contentBlock__main, {}, [cls.technicalBlock])}>

                            <Box className={cls.technicalBlock__main}>
                                <Box className={cls.technicalBlock__action}>
                                    <Typography variant='subtitle1'>INCREMENT</Typography>
                                    <Typography variant='body1' className={cls.technicalBlock__p}>(increment number from
                                        state)</Typography>
                                    <Button color='secondary' variant='text' onClick={incrementDispatch}
                                            endIcon={<AddIcon/>}>+</Button>
                                </Box>

                                <Box className={cls.technicalBlock__action}>
                                    <Typography variant='subtitle1'>DECREMENT</Typography>
                                    <Typography variant='body1' className={cls.technicalBlock__p}>(decrement number from
                                        state)</Typography>
                                    <Button color='success' variant='outlined' disabled={state.count <= 0 && true}
                                            onClick={decrementDispatch} endIcon={<SendIcon/>}>-</Button>
                                </Box>


                                <Box className={cls.technicalBlock__action}>
                                    <Typography variant='subtitle1'>MULTIPLY</Typography>
                                    <Typography variant='body1' className={cls.technicalBlock__p}>(save state changes
                                        history)</Typography>
                                    <Button color='error' variant='contained' onClick={multiplyDispatch}>*</Button>
                                </Box>

                            </Box>
                        </Box>

                    </Box>

                </Box>
            </Box>

        </Box>
    )
        ;
};

export default CustomHook;