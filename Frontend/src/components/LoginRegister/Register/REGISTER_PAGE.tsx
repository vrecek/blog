import React from 'react'
import '../../../css/LoginRegister.css'
import '../../../css/Register.css'
import LayoutWrap from '../../Layout/LayoutWrap'
import RegisterLeft from './RegisterLeft'
import RegisterRight from './RegisterRight'

const REGISTER_PAGE = () => {
    return (
        <LayoutWrap>

            <main className="logreg register">

                <RegisterLeft />
                <RegisterRight />

            </main>

        </LayoutWrap>
    )
}

export default REGISTER_PAGE