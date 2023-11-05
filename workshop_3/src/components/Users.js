import React, { useState } from 'react';
import { User } from '../components/User';
import { users } from '../constants/problem';



const Users = () => {
    const [usersCount, setUsersCount] = useState(5)

    return (
        <div className='usersContainer'>
            {users.slice(0, usersCount).map(user => <User data={user} key={user.email} />)}

            {users.length > usersCount ? (
                <button className='usersButton' onClick={() => setUsersCount(users.length)}>Show more</button>)
                : null}

        </div>

    )
}

export default Users;