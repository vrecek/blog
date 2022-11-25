import React from 'react'
import { BiMenu } from 'react-icons/bi'
import {scroller} from 'react-scroll'
import Icon from '../../Common/Icon'
import '../../../css/TableContents.css'
import { Location, NavigateFunction, useLocation, useNavigate } from 'react-router-dom'
import Client from '../../../functions/Client'

const TableOfContents = ({text}: {text: string}) => {
    const listRef = React.useRef<HTMLUListElement>(null),
          n: NavigateFunction = useNavigate(),
          loc: Location = useLocation(),
          [dd] = React.useState(new Client.DropDown())


    const appendTableSections = (list: HTMLElement, fragment: DocumentFragment): void => {
        const comments = document.createElement('li')
        comments.textContent = 'Comments'
        comments.addEventListener('click', () => scroller.scrollTo(`comments-container`, {offset: -85}))

        const otherArts = document.createElement('li')
        otherArts.textContent = 'Other articles'
        otherArts.addEventListener('click', () => scroller.scrollTo(`article-container`, {offset: -85}))

        fragment.appendChild(comments)
        fragment.appendChild(otherArts)
        
        list.appendChild(fragment)
    }

    React.useEffect(() => {
        const c: HTMLElement = listRef.current!,
              fragment: DocumentFragment = document.createDocumentFragment(),
              headersStart: number[] = Array.from(text.matchAll(/\[-h\]/g)).map(x => x.index!),
              headersEnd: number[] = Array.from(text.matchAll(/\[h-\]/g)).map(x => x.index!)
        

        if(headersStart.length !== headersEnd.length) {
            n('/error', {
                replace: true,
                state: { code: 500, msg: 'Incorrect text options length' }
            })

            return
        }


        for(let x of Array.from(c.children)) x.remove()


        if(dd.getActive) dd.switchActive()
        dd.shrinkMenu(300)


        for(let i = 0; i < headersStart.length; i++) {
            const si: number = headersStart[i],
                  li: number = headersEnd[i],
                  listItem = document.createElement('li')


            listItem.textContent = text.slice(si + 4, li)
            listItem.addEventListener('click', () => scroller.scrollTo(`hdr${i + 1}`, {offset: -85}))

            fragment.appendChild(listItem)
        }

        
        appendTableSections(c, fragment)
    }, [loc])


    const toggleMenu = (e: React.MouseEvent): void => {
        const t: HTMLElement = e.target as HTMLElement
        const list: HTMLElement = t.parentElement!.parentElement!.children[1] as HTMLElement
        
        dd.switchActive()

        dd.getActive
            ? dd.expandMenu(300, list)
            : dd.shrinkMenu(300)
    }

    return (
        <section className="toc">

            <div>

                <p className="header">Table of contents</p>
                <Icon action={toggleMenu}><BiMenu /></Icon>

            </div>

            <ul ref={listRef}>

                <li onClick={() => scroller.scrollTo('comments-container', {offset: -85})}>Comments</li>
                <li onClick={() => scroller.scrollTo('article-container', {offset: -85})}>Other articles</li>

            </ul>

        </section>
    )
}

export default TableOfContents