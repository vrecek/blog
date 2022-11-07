import React from 'react'
import SliderButtons from './SliderButtons'
import PopularArticle from './PopularArticle'
import { ISlide } from '../../../../interfaces/HomepageInterfaces'
import img1 from '../../../../images/n1.jpg'
import img2 from '../../../../images/n2.jpg'
import img3 from '../../../../images/n3.jpg'

const PopularSection = () => {
    const sliderRef = React.useRef<HTMLDivElement>(null)

    const sliders: ISlide[] = [
        { 
            id: '1',
            image: img1, 
            header: 'Lorem ipsum dolor? Sit amet conqestur!', 
            para: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad, vitae?' 
        },

        { 
            id: '2',
            image: img2, 
            header: 'Integer iaculis elit eu suscipit auctor.', 
            para: 'Quisque venenatis dignissim nisi, quis interdum lectus sodales in. Aliquam a felis eu risus.' 
        },

        { 
            id: '3',
            image: img3, 
            header: 'Donec id odio ut eros aliquam congue.', 
            para: 'Ut elit elit, aliquam sit amet dictum vel, consequat nec sapien.' 
        },

        { 
            id: '1',
            image: img1, 
            header: 'Lorem ipsum dolor? Sit amet conqestur!', 
            para: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad, vitae?' 
        }
    ]

    return (
        <section className="main popular">

            <p className="header">Popular</p>

            <section className="container">

                <div ref={sliderRef} className="moving">

                    {
                        sliders.map((x, i) => (
                            <PopularArticle
                                key={i}
                                image={x.image}
                                header={x.header}
                                para={x.header}
                                id={x.id}
                            />
                        ))
                    }

                </div>

                <SliderButtons slidersCount={3} sliderRef={sliderRef} />

            </section>

        </section>
    )
}

export default PopularSection