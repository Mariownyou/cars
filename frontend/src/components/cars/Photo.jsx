import React from 'react'
import { GridListTile, GridListTileBar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    title: {
      // color: theme.palette.primary.light,
      color: 'white'
    },
    titleBar: {
      background:
        'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
}));

const Photo = ({ item }) => {
    const classes = useStyles();

    return (
        <GridListTile>
            <img src={item.image} alt={item.title} />
            <GridListTileBar
              title={item.title}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
            />
        </GridListTile>
    )
}

export default Photo
