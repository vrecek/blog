import React from 'react'
import { Link } from 'react-router-dom'

const RememberAndForgot = () => {
    return (
        <div className="raf">

            <div>

                <label htmlFor='remember'>Remember me</label>
                <input type='checkbox' id='remember' />

            </div>

            <Link to='/'>Forgot password?</Link>

        </div>
    )
}

export default RememberAndForgot