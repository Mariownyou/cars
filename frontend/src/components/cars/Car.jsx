import React from 'react'
import { Paper, Typography } from '@material-ui/core'
import PhotoGrid from './PhotoGrid'

const Car = ({item}) => {
    return (
        <Paper>
            <Typography variant='h3'>
                {item.brand}
            </Typography>
            <Typography variant='h4'>
                {item.rare}
            </Typography>
            <PhotoGrid items={item.photos}/>
        </Paper>
    )
}

export default Car
