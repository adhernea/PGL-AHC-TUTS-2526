import { createContext } from 'react'
import { UserInfo } from '../types/UserInfo'

export type UserContextType = {
    userInfo: UserInfo,
    userClicks: number,
    addUserClick: () => void
}

export const UserContext = createContext<UserContextType>({
    userInfo: {
        id: 0,
        username: '',
        email: ''
    },
    userClicks: 0,
    addUserClick: () => console.log("No está implementado")
})

