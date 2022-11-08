import React from 'react'
import { ISliderButtons } from '../../../../interfaces/HomepageInterfaces'

const SliderButtons = ({sliderRef, slidersCount}: ISliderButtons) => {
    let interval: NodeJS.Timer
    let hasSlided: boolean = true

    const intervalFunc = () => {
        if(!document.hasFocus()) return

        const slider: HTMLElement = sliderRef.current!
        const btns: Element[] = Array.from(slider.parentElement!.children[1].children)
        const slideNr: number = parseInt(slider.getAttribute('counter') ?? '1')

        for(let x of btns) x.className = ''
        slideNr >= slidersCount 
            ? btns[0].className = 'active' 
            : btns[slideNr].className = 'active'


        slider.style.transition = '.5s'
        slider.style.translate = `-${slideNr * 100}% 0`

        slider.setAttribute('counter', (slideNr + 1).toString())
    }

    const moveSlider = (e: React.MouseEvent, num: number): void => {
        if(!hasSlided) return
        hasSlided = false

        clearInterval(interval)

        const t: HTMLElement = e.target as HTMLElement
        const btns: Element[] = Array.from(t.parentElement!.children)
        const slider: HTMLElement = sliderRef!.current as HTMLElement

        for(let x of btns) x.className = ''
        t.className = 'active'

        slider.setAttribute('counter', (num + 1).toString())

        slider.style.transition = '.5s'
        slider.style.translate = `-${num * 100}% 0`

        interval = setInterval(intervalFunc, 5000)
    }

    React.useEffect(() => {
        const slider: HTMLElement = sliderRef!.current as HTMLElement

        slider.addEventListener('transitionend', () => {
            hasSlided = true

            const attr: number = parseInt(slider.getAttribute('counter') ?? '1')

            if(attr >= slidersCount + 1) {
                slider.style.transition = '0s'
                slider.style.translate = `0 0`
                slider.setAttribute('counter', '1')
            }
        })

        interval = setInterval(intervalFunc, 5000)
    }, [])

    return (
        <div className="buttons">

            {
                [...Array(slidersCount)].map((x, i) => (
                    <span 
                        className={i === 0 ? 'active' : ''} 
                        key={i}
                        onClick={(e) => moveSlider(e, i)}>          
                    </span>
                ))
            }

        </div>
    )
}

export default SliderButtons