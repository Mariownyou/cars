import React from 'react'
import { Paper, Typography } from '@material-ui/core'

const Car = ({item}) => {
    return (
        <Paper>
            <Typography variant='h3'>
                {item.brand}
            </Typography>
            <Typography variant='h4'>
                {item.rare}
            </Typography>
        </Paper>
    )
}

export default Car
