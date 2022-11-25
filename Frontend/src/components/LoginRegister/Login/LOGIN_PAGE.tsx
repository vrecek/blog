import React from 'react'
import '../../../css/LoginRegister.css'
import '../../../css/Login.css'
import LayoutWrap from '../../Layout/LayoutWrap'
import LoginRight from './LoginRight'
import LoginLeft from './LoginLeft'
import { PossibleUser } from '../../../interfaces/UserType'
import { UserContext } from '../../../App'
import { NavigateFunction, useNavigate } from 'react-router-dom'

const LOGIN_PAGE = () => {
    window.scrollTo(0, 0)
    
    const n: NavigateFunction = useNavigate()
    const user: PossibleUser = React.useContext(UserContext)
    React.useEffect(() => {
        if(user) n('/')
    }, [])

    if(!user)
    return (
        <LayoutWrap>

            <main className="logreg login">

                <LoginLeft />
                <LoginRight />

            </main>

        </LayoutWrap>
    )

    return <></>
}

export default LOGIN_PAGE