import React from 'react'
import { Location, NavigateFunction, useLocation, useNavigate } from 'react-router-dom'
import { ITextParagraph } from '../../../interfaces/ArticlePageInterfaces'

const TextParagraph = ({text, images}: ITextParagraph) => {
    const textRef = React.useRef<HTMLPreElement>(null),
                    n: NavigateFunction = useNavigate(),
                    loc: Location = useLocation()

    const replaceLinks = (): void => {
        const aStart = Array.from(text.matchAll(/\[-a{:"/g))
        const aEnd = Array.from(text.matchAll(/":}]/g))

        if(aStart.length !== aEnd.length) {
            n('/error', {
                state: { code: 500, msg: 'Incorrect text options length' },
                replace: true,
            })

            return
        }

        for(let i = 0; i < aStart.length; i++) {
            const url: string = text.slice(aStart[i].index! + 6, aEnd[i].index)
            
            text = text.replace(`[-a{:"${url}":}]`, `<a target="_blank" href="${url}">`)
                               .replace('[a-]', '</a>')
        }
    }

    const replaceImages = (): void => {
        for(let x of images)
            text = text.replace(`[-i][i-]`, `<img src="${x}" loading="lazy" />`)
    }

    const replaceNormalText = (): void => {
        let i: number = 0

        text = text.replaceAll('[-h]', () => `<span class="header hdr${++i}">`)
                   .replaceAll('[h-]', '</span>') 
                   .replaceAll('[-c]', '<span class="color">')
                   .replaceAll('[c-]', '</span>')
                   .replaceAll('[-b]', '<span class="box">')
                   .replaceAll('[b-]', '</span>')
    }

    React.useEffect(() => {
        const t: HTMLPreElement = textRef.current!

        replaceNormalText()  
        replaceLinks()
        replaceImages()
        text = text.replaceAll('<<', '&lt')
                   .replaceAll('>>', '&gt')


        t.innerHTML = text
    }, [loc])

    return (
        <pre className='pre-text' ref={textRef}></pre>
    )
}

export default TextParagraph