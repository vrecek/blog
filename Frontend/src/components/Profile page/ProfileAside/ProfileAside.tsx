import React from 'react'
import { IProfileAside, IProfileAsideList } from '../../../interfaces/ProfileInterfaces'
import ProfileDelete from '../Content/ProfileDelete/ProfileDelete'
import ProfileInformations from '../Content/ProfileInformations/ProfileInformations'

const ProfileAside = ({contentSet}: IProfileAside) => {
    const list: IProfileAsideList[] = [
        { component: <ProfileInformations />, text: 'Informations', cname: 'active' },
        { component: <ProfileDelete />, text: 'Delete account' }
    ]

    const setContentFunc = (e: React.MouseEvent, component: JSX.Element): void => {
        const t: HTMLElement = e.target as HTMLElement
        const children: Element[] = Array.from(t.parentElement!.children)

        for(let x of children) x.className = ''
        t.className = 'active'

        contentSet(component)
    }

    return (
        <aside className="profile-aside">

            <p className="settings">Settings</p>

            <ul>

                {
                    list.map((x, i) => (
                        <li onClick={(e) => setContentFunc(e, x.component)} key={i} className={x.cname ?? ''}>
                            {x.text}
                        </li>
                    ))
                }

            </ul>

        </aside>
    )
}

export default ProfileAside