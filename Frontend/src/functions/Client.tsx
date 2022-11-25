import { CSSProperties } from "react"

export type StrUN = string | undefined | null
export type Inputs = HTMLCollectionOf<HTMLInputElement>


// TextBox types
type TBElementType = 'div' | 'p'
type TBConstructorOptions = {
    message?: string 
    cname?: string
} | undefined
type TBDefaultStyles = 'fixed-center-top-black-textsize'


// DropDown types
type DDDisplayType = 'block' | 'flex'
type DDReturnedHeight = {
    height: number
    marginTop: number
    marginBottom: number
}
type DDMargins = {
    top: number
    bottom: number
} | null


export default class Client {
    public constructor() {
        
    }

    public static TextBox = class {
        private timeout: NodeJS.Timer | null

        private divStyles: React.CSSProperties
        private pStyles: React.CSSProperties

        private eDiv: HTMLElement | null
        private ePar: HTMLElement | null

        private message: string
        private cname: string


        public constructor(options?: TBConstructorOptions) {
            const {message, cname} = options ?? {}

            this.eDiv = null
            this.ePar = null

            this.message = message ?? 'Not set'
            this.cname = cname ?? ''
            this.timeout = null

            this.divStyles = {}
            this.pStyles = {}
        }

        private clearProperties() {
            this.timeout = null
            this.eDiv = null
            this.ePar = null
        }

        /**
            * @info Initializes components 
            * @returns this - to chain together with appendBox()
        */
        public createElements(): this {
            const div = document.createElement('div')
            const p = document.createElement('p')
            
            div.appendChild(p)

            this.eDiv = div
            this.ePar = p

            return this
        }

        /**
            * @param styleObj Object of CSSProperties
            * @param type Element to style
        */
        public changeStyles(styleObj: React.CSSProperties, type: TBElementType): void {
            const changedEle = type === 'div' 
                                ? this.divStyles
                                : this.pStyles


            for(let [key, value] of Object.entries(styleObj)) {
                Object.assign(changedEle, {
                    [key]: value
                })
            }
        }

        /**
            * @param name Name of default styles. Conception is: 'position-x-y-bg-width'
        */
        public setDefaultStyles(name: TBDefaultStyles): void {
            switch(name) {
                case 'fixed-center-top-black-textsize':
                    this.divStyles = {
                        transition: '.5s',
                        position: 'fixed',
                        left: '50%',
                        top: '0',
                        translate: '-50% 0',
                        zIndex: '999',
                        borderRadius: '.25em',
                        border: '1px solid #505050',
                        padding: '1.25em 2em',
                        background: '#232323',
                        width: 'max-content'
                    }
        
                    this.pStyles = {
                        fontWeight: '500',
                        fontSize: '1.1rem',
                        color: 'rgb(245, 245, 245)'
                    }
                break;

                default: return
            }
        }

        /** 
            * @param element Element to append box
            * @param removeAfterMs Remove box after miliseconds
            * @info use createElements() first
        */
        public appendBox(element: HTMLElement, removeAfterMs: number): void {
            if(!this.eDiv || !this.ePar) return

            Object.assign(this.eDiv.style, this.divStyles)
            Object.assign(this.ePar.style, this.pStyles)

            this.eDiv.className = `textbox-div ${this.cname}`
            this.ePar.className = 'textbox-p'
            this.ePar.textContent = this.message

            element.appendChild(this.eDiv)

            setTimeout(() => {

                this.eDiv?.remove()
                this.clearProperties()

            }, removeAfterMs)
        }

        /**
            * @info Removes box manually 
        */
        public removeBox(): void {
            if(!this.eDiv) return

            clearTimeout(this.timeout!)
            this.eDiv.remove()
            this.clearProperties()
        }

        /**
            * @param type Remove styles of "div" or "p" or both if argument not passed
        */
        public resetStyles(type?: TBElementType): void {
            if(!type) {
                this.divStyles = {}
                this.pStyles = {}
            }
            else if(type === 'div') this.divStyles = {}
            else if(type === 'p') this.pStyles = {}
        }

        public get isAppended(): boolean {
            return !!this.eDiv
        }

        public set setMessage(str: string) {
            this.message = str
        }

        public set setClass(str: string) {
            this.cname = str
        }
    }


    public static DropDown = class {
        private active: boolean
        private activeList: HTMLElement | null

        private margins: DDMargins


        private getValueOfProperty(list: HTMLElement, property: string): number {
            return parseFloat(window.getComputedStyle(list, null).getPropertyValue(property)
                                    .split('')
                                    .filter(x => /[0-9.]/ig.test(x) )
                                    .join('')
            )
        }

        private returnHeight(list: HTMLElement, display?: DDDisplayType): DDReturnedHeight {
            list.style.height = 'auto'
            list.style.display = display ?? 'block'
            
            const height: number = this.getValueOfProperty(list, 'height')
                

            if(!this.margins) {
                const marginTop: number = this.getValueOfProperty(list, 'margin-top'),
                      marginBottom: number = this.getValueOfProperty(list, 'margin-bottom')


                this.margins = {
                    top: marginTop,
                    bottom: marginBottom
                }
            }


            return {height, marginTop: this.margins.top, marginBottom: this.margins.bottom}
        }

        private zeroListProperties(list: HTMLElement): void {
            list.style.marginTop = '0'
            list.style.marginBottom = '0'
            list.style.height = '0'
            list.style.overflow = 'hidden'
        }

        private calculateListProperties(list: HTMLElement, values: DDReturnedHeight): void {
            const {marginBottom, marginTop, height} = values

            list.style.marginTop = `${ marginTop }px`
            list.style.marginBottom = `${ marginBottom }px`
            list.style.height = `${ height }px`
        }


        public constructor() {
            this.active = false
            this.activeList = null
            this.margins = null
        }


        /**
            * @info Use height: 0, display: none, overflow: hidden IF USED FIRST 
            * @param yourTransitionMs Transition in miliseconds
            * @param hiddenList Your list to expand
            * @param display Optional - block or flex
        */
        public expandMenu(yourTransitionMs: number, hiddenList: HTMLElement, display?: DDDisplayType): void {
            if(!this.active) return

            const VALUES: DDReturnedHeight = this.returnHeight(hiddenList, display)
            
            hiddenList.style.transition = '0'
            this.zeroListProperties(hiddenList)
            
            setTimeout(() => {
                this.activeList = hiddenList
                
                hiddenList.style.transition = `${yourTransitionMs}ms`
                this.calculateListProperties(hiddenList, VALUES)

                setTimeout(() => hiddenList.style.overflow = 'visible', yourTransitionMs)
            }, 5);
        }


        /**
            * @param yourTransitionMs Transition in miliseconds
            * @param hiddenList Optional - Pass list to shrink, if you want to shrink list first
            * @param display Optional - block or flex
        */
        public shrinkMenu(yourTransitionMs: number, hiddenList?: HTMLElement, display?: DDDisplayType): void {
            if(!this.activeList && hiddenList) {
                const VALUES: DDReturnedHeight = this.returnHeight(hiddenList, display)

                this.calculateListProperties(hiddenList, VALUES)

                setTimeout(() => {
                    hiddenList.style.overflow = 'hidden'
                    this.zeroListProperties(hiddenList)

                    setTimeout(() => {
                        hiddenList.style.display = 'none'
                    }, yourTransitionMs);
                }, 5);

                return
            }
            
            if(this.active || !this.activeList) return

            const item = this.activeList

            item.style.overflow = 'hidden'
            this.zeroListProperties(item)

            this.activeList = null

            setTimeout(() => {
                item.style.display = 'none'
            }, yourTransitionMs);
        }  


        /**
            * @param arrow Rotates passed element (presumably arrow icon to indicate expanded list)
        */
        public rotateArrow(arrow: HTMLElement): void {
            this.active
                ? arrow.style.transform = 'rotate(180deg)'
                : arrow.style.transform = 'rotate(0)'
        }


        /**
            * @info Default {active} variable is false 
        */
        public switchActive(): void { 
            this.active = !this.active 
        }


        public get getActive(): boolean { 
            return this.active 
        }
    }


    public static getDefaultMsgFromErrorCode(code: number): string {
        switch(code) {
            case 400: return 'Bad request'
            case 401: return 'Unauthorized'
            case 403: return 'Forbidden'
            case 404: return 'Not found'
            case 500: return 'Internal server error'

            default: return 'Unkown error'
        }
    }


    public static numberToDateString(num: number): string {
        const diff: number = Date.now() - num
        const days: number = diff / 1000 / 60 / 60 / 24 

        if(days <= 1) return 'Today'
        if(days > 1 && days < 2) return '1 day ago'

        return `${Math.floor(days)} days ago`
    }


    public static hasUserActed(userId: StrUN, allIds: string[]): boolean {
        if(!userId) return false

        return allIds.includes(userId)
    }


    public static returnIncrementedStringNumber(str: string, by: number): string {
        const parsedStr: number = parseInt(str)

        if(isNaN(parsedStr)) return '0'

        return (parsedStr + by).toString()
    }


}