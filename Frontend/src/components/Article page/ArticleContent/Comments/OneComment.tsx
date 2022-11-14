import React from 'react'
import FigureImage from '../../../Common/FigureImage'

const OneComment = () => {
    return (
        <article className="one-comment">

            <section className="author-info">

                <FigureImage source='http://localhost:3000/static/media/header.d57c9e6930442930c8a6.jpg' altTxt='Avatar' />

                <div className="text">

                    <p className="name">vrecek</p>
                    <p className="date">Today</p>

                </div>

            </section>            

            <p className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nemo, praesentium voluptatem est aut iure dolore sed? Dignissimos quas obcaecati voluptatum temporibus illum beatae veniam maxime, modi dolorem eligendi consequuntur.</p>

        </article>
    )
}

export default OneComment