import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography} from '@material-ui/core'
import PhotoGrid from './PhotoGrid'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

export default function CarDetail({ item }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box className={classes.root} mb={1}>
      <Accordion expanded={expanded === item.id } onChange={handleChange(item.id)}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={item.id}
          id={item.url}
        >
          <Typography className={classes.heading}>{ item.brand }</Typography>
          <Typography className={classes.secondaryHeading}>Редкость: { item.rare } <Typography variant='caption'>*Левушкины единицы</Typography></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <PhotoGrid items={ item.photos }/>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
