import React from 'react';
import {Greeting} from "./Greeting";


export const LoginPage = () => {
    const name = 'Alex';
    return (
        <div>
            <h1>Login page</h1>
            <Greeting name={name}/>
        </div>
    )
}

