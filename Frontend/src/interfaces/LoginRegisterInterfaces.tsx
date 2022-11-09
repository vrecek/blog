
// REGISTER LEFT SECTION

export interface IRegisterProfit extends IRegisterTextContainer, IRegisterIconContainer {}

export interface IRegisterTextContainer {
    text: string,
    header: string
}

export interface IRegisterIconContainer {
    icon: JSX.Element
}

//////////

export type InputType = 'text' | 'password' | 'number' | 'mail' | 'file'
export interface IInputDiv {
    label: string
    type: InputType
    inputClass?: string
    divClass?: string
    additionalToInput?: JSX.Element
    additionalToContainer?: JSX.Element
}

export interface IRedirectText {
    left: string,
    linkText: string,
    linkUrl: string
}