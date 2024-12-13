import React, {useEffect, useState} from "react";
import s from './SetInput.module.css'


type PropsType = {
    callback: (value: number, value2: number) => void

}

export const Input = (props: PropsType) => {

    const [valueMax, setValueMax] = useState(0);

    const onChangeHandlerMax = (e: any) => {
        if (e.target.value) {
            let newValue = JSON.parse(e.target.value);
            setValueMax(newValue)
        }
    }


    const [valueStart, setValueStart] = useState(0);
    console.log(typeof valueStart)

    const buttonHandler = (e: any) => {
        localStorage.setItem("counterStart", JSON.stringify(valueStart));
        props.callback(valueStart, valueMax)
        localStorage.setItem("counterMax", JSON.stringify(valueMax))
        setIsDisabled(true)
    }

    const onChangeHandler = (e: any) => {
        if (e.target.value) {
            let newValue = JSON.parse(e.target.value);
            setValueStart(newValue)
        }
    }

    const [isDisabled, setIsDisabled] = useState(false);


    return (
        <div className={s.counter}>


            <div className={s.button}>
                <div className={s.but}>
                    max value
                    <input disabled={isDisabled} onChange={onChangeHandlerMax} className={s.inputstyle} type="number"
                           id="tentacles"
                           name="tentacles" min="-100" max="100"/>
                </div>
                <br/>
                <div className={s.but}>
                    <span>start value</span>
                    <input disabled={isDisabled} onChange={onChangeHandler} className={s.inputstyle} type="number"
                           id="tentacles"
                           name="tentacles" min="-100" max="100"/>
                </div>
                <br/>
                <div>
                    <button disabled={isDisabled} onClick={buttonHandler}> set</button>
                </div>
            </div>
        </div>
    )
}
