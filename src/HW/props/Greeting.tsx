import React from 'react';

export type NameType = {
    name: string;
}

export const Greeting = (props:NameType) => {
    return(
        <div>
            <h3>Hi {props.name}</h3>
        </div>
    )
}