import React, {useState} from 'react'
import {Input} from "./SetInput/Input";
import {Counter} from "./Counter right/Counter";
import s from './Basik.module.css'


export const Basik = () => {

    const [value, setValue] = useState<number>(0)
    const [value1, setValue1] = useState<number>(0)


    const callback = (valueStart: number, valueMax: number) => {
        setValue(valueStart)
        setValue1(valueMax)
    }


    return (
        <div className={s.general}>
            <Input callback={callback}/>
            <Counter valueStart={value} valueMax={value1}/>
        </div>
    )


}