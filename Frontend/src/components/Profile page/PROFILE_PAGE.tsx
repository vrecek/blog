import React from 'react'
import '../../css/ProfilePage.css'
import LayoutWrap from '../Layout/LayoutWrap'
import ProfileInformations from './Content/ProfileInformations/ProfileInformations'
import ProfileAside from './ProfileAside/ProfileAside'

const PROFILE_PAGE = () => {
    window.scrollTo(0, 0)
    
    const [contentComponent, setContent] = React.useState<JSX.Element>(<ProfileInformations />)

    return (
        <LayoutWrap>
            
            <main className="profile-page">

                <ProfileAside contentSet={setContent} />
                {contentComponent}

            </main>

        </LayoutWrap>
    )
}

export default PROFILE_PAGE