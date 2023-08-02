import React from "react"

import UsersList from '../components/UsersList'

const Users = () => {
    const USERS = [
        {
            id: 'u1',
            name: 'Don Santo',
            image:
              'https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/54.svg',
            places: 3
          
        }
    ]

    return (
        <UsersList items={USERS} />
    )
}

export default Users;