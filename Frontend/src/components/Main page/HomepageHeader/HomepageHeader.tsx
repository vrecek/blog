import React from 'react'
import '../../../css/HomepageHeader.css'
import HeaderTile from './HeaderTile'
import HeaderText from './Tiles/HeaderText'

const HomepageHeader = () => {
    return (
        <header className="homepage-header">

            <HeaderText />

            <section className="tiles">

                <HeaderTile />
                <HeaderTile />
                <HeaderTile />
                <HeaderTile />

            </section>

        </header>
    )
}

export default HomepageHeader