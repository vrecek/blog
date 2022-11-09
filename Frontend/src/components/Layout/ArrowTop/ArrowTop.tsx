import React from 'react'
import Icon from '../../Common/Icon'
import {BiUpArrowAlt} from 'react-icons/bi'

const ArrowTop = () => {
    const arrowRef = React.useRef<HTMLDivElement>(null)

    React.useEffect(() => {
        const c: HTMLElement = arrowRef.current! as HTMLElement
        let visible: boolean = false

        window.addEventListener('scroll', () => {
            if(window.scrollY >= 300 && !visible) {
                visible = true

                c.style.pointerEvents = 'all'
                c.style.opacity = '1'
            }
            else if(window.scrollY < 300 && visible) {
                visible = false

                c.style.pointerEvents = 'none'
                c.style.opacity = '0'
            }
        })
    }, [])

    return (
        <div onClick={() => window.scrollTo(0, 0)} ref={arrowRef} className="arrow-top">

            <Icon><BiUpArrowAlt /></Icon>

        </div>
    )
}

export default ArrowTop