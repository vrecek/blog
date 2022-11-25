import { ImageType } from "./CommonInterfaces"

export type UserRole = 'user' | 'admin'

export default interface UserType {
    _id: string
    username: string
    hash: string
    salt: string
    mail: string
    avatar: ImageType
    role: UserRole
    created: number
    points: number
}

export type PossibleUser = UserType | null