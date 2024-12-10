import React from 'react'
import {ChangeEvent} from "react";
import {UserType} from "../2/HW2";

type InputPropsType = {
	currentText: string
	setCurrentText: (value: string)=> void
};

export const Input = (props: InputPropsType) => {
	const onChangeHandler = (event: ChangeEvent<HTMLInputElement> ) => {
		props.setCurrentText(event.currentTarget.value);
	};

	return (
	  <input id={'hw04-input'} type="text" value={props.currentText} onChange={onChangeHandler} />
	);
};
