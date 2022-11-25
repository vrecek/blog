import React from 'react'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import { UserContext } from '../../App'
import '../../css/ProfilePage.css'
import { PossibleUser } from '../../interfaces/UserType'
import LayoutWrap from '../Layout/LayoutWrap'
import ProfileInformations from './Content/ProfileInformations/ProfileInformations'
import ProfileAside from './ProfileAside/ProfileAside'

const PROFILE_PAGE = () => {
    window.scrollTo(0, 0)

    const [contentComponent, setContent] = React.useState<JSX.Element>(<ProfileInformations />)
    const n: NavigateFunction = useNavigate()
    const user: PossibleUser = React.useContext(UserContext)

    React.useEffect(() => {
        if(!user) n('/', {replace: true})
    }, [])

    if(user)
    return (
        <LayoutWrap>
            
            <main className="profile-page">

                <ProfileAside contentSet={setContent} />
                {contentComponent}

            </main>

        </LayoutWrap>
    )

    return <></>
}

export default PROFILE_PAGE