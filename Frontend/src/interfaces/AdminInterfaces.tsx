export interface IAsideList {
    text: string
    icon?: JSX.Element
    component?: JSX.Element
    cname?: string
}

export interface ISetContent {
    setContent: React.Dispatch<React.SetStateAction<JSX.Element>>
}

export interface ITextareaOptions {
    char: string | JSX.Element
    addText: string
}

export interface IMultipleIInputs extends IHandleInputsComponent {
    divCname: string
    label: string
}

export interface IHandleInputsComponent extends IModifySection {
    initialInput: boolean
}

export interface IModifySection {
    type: string
    max: number
    min: number
    inputCname: string
}