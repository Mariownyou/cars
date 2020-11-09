import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography} from '@material-ui/core'

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

const Expand = () => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
  
    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };
  
    return (
      <Box className={classes.root} mb={1}>
        <Accordion square expanded={expanded === 'menu' } onChange={handleChange('menu')}>
          <AccordionSummary
            aria-controls='menu-header'
            id='menu-header'
          >
            <Typography className={classes.heading}>Желтые машинки</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>ЖЕлтые машинки бла бла бла...</Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    );
}

export default Expand
