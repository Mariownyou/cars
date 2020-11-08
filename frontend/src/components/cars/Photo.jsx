import React from 'react'
import { GridListTile, GridListTileBar } from '@material-ui/core'

const Photo = ({ item }) => {
    return (
        <GridListTile>
            <img src={item} alt='1' />
            <GridListTileBar
              title='title'
            />
        </GridListTile>
    )
}

export default Photo
