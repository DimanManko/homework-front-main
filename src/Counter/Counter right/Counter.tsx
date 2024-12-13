import React, {PropsWithChildren, useEffect, useState} from "react";
import s from './Counter.module.css'


type PropsType = {
    valueStart: number;
    valueMax: number
}

export const Counter = (props: PropsType) => {
    const {valueStart, valueMax} = props

    const [valueMin, setValueMin] = useState(44);

    const [value1, setValue1] = useState(valueMax);

    useEffect(() => {
        setValueMin(valueStart)
    }, [valueStart]);

    const increment = () => {
        console.log(valueStart, valueMax)
        if (valueMin === valueMax) {
            return
        }
        setValueMin(valueMin + 1);
    }

    const clearLocalStorage = () => {
        localStorage.clear()
        setValueMin(0)
    }

    return (
        <div className={s.counter}>
            <h1 className={s.value}>{valueMin}</h1>
            <div className={s.buttonGen}>
                <div>
                    <button className={s.button} disabled={valueMin === valueMax} onClick={increment}
                            key="counterStart"> inc
                    </button>
                </div>
                <div>
                    <button className={s.button} onClick={clearLocalStorage}> reset</button>
                </div>
            </div>
        </div>
    )
}
