import React from 'react'
import Button from '../../Common/Button'

const Newsletter = () => {
    return (
        <div className="newsletter">

            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia nemo alias aliquam.</p>

            <div>

                <input placeholder='Your mail' type="text" spellCheck='false' />
                <Button text='Submit' />

            </div>

        </div>
    )
}

export default Newsletter