import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const UserPage = () => {

    const [oneUser, setOneUser] = useState([]);
    const [timeClick, setTimeClick] = useState(null);

    const {id} = useParams();

    useEffect(() => {
        const apiUrl = `https://jsonplaceholder.typicode.com/users/${id}`;
        axios.get(apiUrl).then(response => {
            const user = response.data;
            setOneUser(user);
            setTimeClick(Date());
        })
    }, [])

    return (
        <div className='user__card'>
            <p>{timeClick}</p>
            <p>ID: {oneUser.id}</p>
            <p>{oneUser.name}</p>
            <p>{oneUser.email}</p>
            <p>{oneUser.phone}</p>
            <Link to='/'><button>Back</button></Link>
        </div>
    );
};

export default UserPage;