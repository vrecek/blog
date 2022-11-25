export interface IProfileAside {
    contentSet: React.Dispatch<React.SetStateAction<JSX.Element>>
}

export interface IProfileAsideList {
    component: JSX.Element
    text: string
    cname?: string
}

export interface IProfileInfoDiv {
    keyName: string
    value: string | number | JSX.Element
    cname?: string
}

export interface ITextInfo {
    header: string,
    text: string
}

export interface IUsernameMail {
    mail: string
    username: string
}