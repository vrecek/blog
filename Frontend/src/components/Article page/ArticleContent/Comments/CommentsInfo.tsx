import React from 'react'
import { BiArrowFromTop } from 'react-icons/bi'
import Client from '../../../../functions/Client'
import { IChildren } from '../../../../interfaces/CommonInterfaces'
import Icon from '../../../Common/Icon'

const CommentsInfo = ({children}: IChildren<(string|number)[]>) => {
    const [dd] = React.useState(new Client.DropDown())

    const toggleComments = (e: React.MouseEvent): void => {
        const t: HTMLElement = e.target as HTMLElement,
              arrow: HTMLElement = t,
              list: HTMLElement = t.parentElement!.parentElement!.children[2] as HTMLElement


              
        dd.getActive
              ? dd.expandMenu(300, list)
              : dd.shrinkMenu(300, list)
              
        dd.switchActive()
        dd.rotateArrow(arrow)
    }

    return (
        <p className="entry-header">

            {children}
            <Icon action={toggleComments}>
                <BiArrowFromTop />
            </Icon>

        </p>
    )
}

export default CommentsInfo