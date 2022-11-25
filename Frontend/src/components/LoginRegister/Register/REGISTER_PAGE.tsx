import React from 'react'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import { UserContext } from '../../../App'
import '../../../css/LoginRegister.css'
import '../../../css/Register.css'
import { PossibleUser } from '../../../interfaces/UserType'
import LayoutWrap from '../../Layout/LayoutWrap'
import RegisterLeft from './RegisterLeft'
import RegisterRight from './RegisterRight'

const REGISTER_PAGE = () => {
    window.scrollTo(0, 0)

    const n: NavigateFunction = useNavigate()
    const user: PossibleUser = React.useContext(UserContext)
    React.useEffect(() => {
        if(user) n('/')
    }, [])

    if(!user)
    return (
        <LayoutWrap>

            <main className="logreg register">

                <RegisterLeft />
                <RegisterRight />

            </main>

        </LayoutWrap>
    )

    return <></>
}

export default REGISTER_PAGE