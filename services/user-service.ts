import { UserInfo } from "../types/UserInfo"

const users: UserInfo[] = [
    { id: 1, username: 'Jose', email: 'jose@salesianos.net'},
    { id: 2, username: 'César', email: 'cesar@salesianos.net'},
    { id: 3, username: 'Adrián', email: 'adrian@salesianos.net'},
]

const getUserInfo = (userId: number): UserInfo | undefined =>{
    const foundUser = users.find(user => user.id == userId)
    return foundUser
}

export const userService = {
    getUserInfo
}