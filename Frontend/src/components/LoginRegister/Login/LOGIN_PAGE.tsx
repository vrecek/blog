import React from 'react'
import '../../../css/LoginRegister.css'
import '../../../css/Login.css'
import LayoutWrap from '../../Layout/LayoutWrap'
import LoginRight from './LoginRight'
import LoginLeft from './LoginLeft'

const LOGIN_PAGE = () => {
    return (
        <LayoutWrap>

            <main className="logreg login">

                <LoginLeft />
                <LoginRight />

            </main>

        </LayoutWrap>
    )
}

export default LOGIN_PAGE