import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const GetUsers = () => {

    const [disabledButton, setDisabledButton] = useState(true);
    const [users, setUsers] = useState([]);

    const getUser = () => {
        const apiUrl = 'https://jsonplaceholder.typicode.com/users';
        axios.get(apiUrl).then((response) => {
            const allPerson = response.data;
            setUsers(allPerson);
            setDisabledButton(false);
        });
    }

    const filterUsers = users.filter(user => user.username !== 'Delphine');
    
    return (
        <>
            {
                Object.keys(filterUsers).length === 0 ?
                    (<div className='container'>
                        <button disabled={!disabledButton} onClick={() => getUser()}>Get Users</button>
                        <div className='users'>
                            <p>Empty List</p>
                        </div>
                    </div>)
                    :
                    (
                        <div className='container'>
                            <button disabled={!disabledButton} onClick={() => getUser()}>Get Users</button>
                            {
                                filterUsers.map(user => (
                                    <div key={user.id} className='users'>
                                        <p>ID: {user.id}</p>
                                        <p>{user.name}</p>
                                        <p>{user.email}</p>
                                        <p>{user.phone}</p>
                                        <div>
                                            <Link to={`/${user.id}`}>
                                                <button className='like_button'>Like</button>
                                            </Link>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    )
            }
        </>
    );
};

export default GetUsers;