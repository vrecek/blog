import React from 'react'
import SliderButtons from './SliderButtons'
import PopularArticle from './PopularArticle'
import { ISlide } from '../../../../interfaces/HomepageInterfaces'

const PopularSection = ({popular}: {popular: ISlide[]}) => {
    const sliderRef = React.useRef<HTMLDivElement>(null)

    return (
        <section className="main popular">

            <p className="header">Popular</p>

            <section className="container">

                <div ref={sliderRef} className="moving">

                    {
                        popular.map((x, i) => (
                            <PopularArticle
                                key={i}
                                mainImg={x.mainImg}
                                header={x.header}
                                title={x.title}
                                _id={x._id}
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