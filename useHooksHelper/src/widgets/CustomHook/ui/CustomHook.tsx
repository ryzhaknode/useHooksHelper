import cls from './CustomHook.module.scss'
import {classNames} from "../../../shared/lib/classNames/classNames.ts";
import {useReducer, useState} from "react";
import Image from "../img/useReducer.png"
import Stick from "../img/stick.svg"


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

    // @ts-ignore
    const sticks = Array(state.count).fill().map((_, index) => (
        <img key={index} src={Stick} className={cls.visualBlock__sticksBlock__stick}/>
    ));

    const incrementDispatch = () => {
        dispatch({type: 'INCREMENT', payload: count})
    }

    const decrementDispatch = () => {
        dispatch({type: 'DECREMENT', payload: count})
    }

    const multiplyDispatch = () => {
        dispatch({type: 'MULTIPLY', payload: 2})
    }

    // Функція, яка буде викликана при натисканні на кнопку
    const onClickHandle = () => {
        setCount(prevCount => prevCount + 1);
    };

    return (
        <div className={classNames(cls.customHook, {}, [])}>

            <div className={cls.customHook__title}>TITLE OF HOOKS</div>

            <div className={cls.customHook__container}>

                <div className={cls.contentBlock}>

                    <h3>VISUAL BLOCK</h3>

                    <div className={cls.contentBlock__container}>


                        <div className={classNames(cls.contentBlock__main, {}, [cls.visualBlock])}>

                            <div className={cls.visualBlock__image}
                            >

                                <img className={cls.visualBlock__image} src={Image} alt='logo' loading="lazy"/>

                            </div>

                            <div className={classNames(cls.visualBlock__information, {}, [])}
                            >

                                <h3> range from 1 to 10</h3>
                                <div
                                    className={cls.visualBlock__sticksBlock}>
                                    {sticks}
                                </div>

                                {/*<h3> History of state:</h3>*/}
                                {/*<div className={cls.visualBlock__history}*/}
                                {/*>*/}
                                {/*    {state.history.map(item => (*/}
                                {/*        <span key={item}>{item}, </span>*/}
                                {/*    ))}*/}
                                {/*</div>*/}

                            </div>

                        </div>

                    </div>

                </div>


                <div className={cls.contentBlock}>

                    <h3>TECHNICAL BLOCK</h3>

                    <div className={cls.contentBlock__container}>


                        <div className={classNames(cls.contentBlock__main, {}, [cls.technicalBlock])}>

                            <div className={cls.technicalBlock__main}>
                                <div className={cls.technicalBlock__action}>
                                    <h4>INCREMENT</h4>
                                    <p className={cls.technicalBlock__p}>(increment number from state)</p>
                                    <button onClick={incrementDispatch}>+</button>
                                </div>

                                <div className={cls.technicalBlock__action}>
                                    <h4>DECREMENT</h4>
                                    <p className={cls.technicalBlock__p}>(decrement number from state)</p>
                                    <button disabled={state.count <= 0 && true} onClick={decrementDispatch}>-</button>
                                </div>


                                <div className={cls.technicalBlock__action}>
                                    <h4>MULTIPLY</h4>
                                    <p className={cls.technicalBlock__p}>(save state changes history)</p>
                                    <button onClick={multiplyDispatch}>*</button>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    )
        ;
};

export default CustomHook;