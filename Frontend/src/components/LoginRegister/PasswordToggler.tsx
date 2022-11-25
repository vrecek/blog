import React from 'react'
import { AiFillEye } from 'react-icons/ai'
import Icon from '../Common/Icon'

const PasswordToggler = () => {
    const togglePassword = (e: React.MouseEvent): void => {
        const t: HTMLElement = e.target as HTMLElement
        const input: HTMLInputElement = t.parentElement!.children[0] as HTMLInputElement

        input.classList.toggle('active')

        if(input.classList.contains('active')) {
            const span = document.createElement('span')
            span.className = 'line'

            input.type = 'text'

            t.appendChild(span)

            return
        }

        const line: Element = Array.from(t.children).filter(x => x.className === 'line')[0]
        line.remove()

        input.type = 'password'
    }

    return (
        <div onClick={togglePassword} className="password-toggler">

            <Icon cname='icon'>
                <AiFillEye />
            </Icon>

        </div>
    )
}

export default PasswordToggler