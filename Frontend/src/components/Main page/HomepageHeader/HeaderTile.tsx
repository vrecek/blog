import React from 'react'
import { IHeaderTile } from '../../../interfaces/HomepageInterfaces'
import TileArrow from './Tiles/TileArrow'
import TileEntry from './Tiles/TileEntry'

const HeaderTile = ({text, url, icon}: IHeaderTile) => {
    return (
        <div className="tile">

            <TileEntry icon={icon} text={text} />

            {
                url 
                    && <TileArrow url={url} />
            }

        </div>
    )
}

export default HeaderTile