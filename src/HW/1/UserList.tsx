import React from 'react'
type AddressType = {
    street: string; // ПОДПРАВЛЯЕМ any
    city: string; // ПОДПРАВЛЯЕМ any
};

type UserType = {
    id: number
    name: string;
    age: number;
    address: {
        street: string;
        city: string;
    }
    // ПРИДЕТСЯ САМОМУ)
};

type UserListPropsType = {
    users: Array<UserType>; // ПО МОЕМУ ЧЕГО-ТО НЕ ХВАТАЕТ...
};

export const UserList = (props: UserListPropsType) => {
    return (
        <div id={'hw01-users'}>
            <h2>User List:</h2>
            <ul>
                {props.users.map((user: UserType, index: number) => { // ВСЕ ТОВАРЫ В СТРАНУ ПРИЕЗЖАЮТ В КОНТЕЙНЕРАХ, А В РЕАКТЕ...
                    return (
                        <li key={user.id} id={`hw01-user-${user.id}`}>
                            <strong>{user.name}</strong>,
                            <strong>Age: {user.age}</strong>,
                            <strong>Address: {user.address.street}, {user.address.city}</strong>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
};
