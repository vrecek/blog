import React from 'react'
import Button from '../../Common/Button'

const Newsletter = () => {
    return (
        <div className="newsletter">

            <p>Subscribe to our newsletter to don't miss any news!</p>

            <div>

                <input placeholder='Your mail' type="text" spellCheck='false' />
                <Button text='Submit' />

            </div>

        </div>
    )
}

export default Newsletter