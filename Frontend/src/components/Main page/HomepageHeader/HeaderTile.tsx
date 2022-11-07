import React from 'react'
import TileArrow from './Tiles/TileArrow'
import TileEntry from './Tiles/TileEntry'

const HeaderTile = () => {
    return (
        <div className="tile">

            <TileEntry />

            <TileArrow />

        </div>
    )
}

export default HeaderTile