import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { userService } from '../../services/user-service'
import { UserContext } from '../user-context'

type UserContextProviderProps = {
    children: React.ReactNode
}

const UserContextProvider = ({ children }: UserContextProviderProps) => {
    // Obtengo el token de usuario, lo desencripto y obtengo el id
    const userId = 1

    // Simulo una petición al servicio de user
    let userInfo = userService.getUserInfo(userId)

    if (userInfo == null) {
        userInfo = {
            id: 0,
            username: 'Usuario no encontrado.',
            email: 'Email no asociado.'
        }
    }

    const [userClicks, setUserClicks] = useState(0)
    const addUserClick = () => setUserClicks(userClicks + 1)

    return (
        <UserContext.Provider value={{ userInfo, userClicks, addUserClick }}>
            {children}
        </ UserContext.Provider >
    )
}

export default UserContextProvider

const styles = StyleSheet.create({})