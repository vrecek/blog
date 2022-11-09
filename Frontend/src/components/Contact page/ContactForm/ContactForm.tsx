import React from 'react'
import Button from '../../Common/Button'
import InputDiv from '../../LoginRegister/InputDiv'

const ContactForm = () => {
    const contactSubmit = (e: React.FormEvent): void => {
        e.preventDefault()
    }

    const changeFunc = (e: React.ChangeEvent): void => {
        const t: HTMLInputElement = e.target as HTMLInputElement
        const label: HTMLElement = t.parentElement!.parentElement!.children[0] as HTMLElement

        if(t.value.length) {
            label.style.top = '0'
            label.style.left = '0'
            label.style.translate = '0 -110%'

            return
        }

        label.style.top = '50%'
        label.style.left = '1.5em'
        label.style.translate = '0 -50%'
    }

    return (
        <form onSubmit={contactSubmit}>

            <InputDiv changeFunc={changeFunc} label='Username' type='text' />
            <InputDiv changeFunc={changeFunc} label='Mail address' type='text' />
            <InputDiv changeFunc={changeFunc} label='Subject' type='text' />
            <textarea spellCheck='false'></textarea>

            <Button text='Submit' />

        </form>
    ) 
}

export default ContactForm