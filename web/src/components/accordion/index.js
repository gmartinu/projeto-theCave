import React from 'react';

import { Typography } from '@mui/material';

import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { ExpandMore } from '@mui/icons-material';
import { styled } from '@mui/system';

const Accordion = styled(MuiAccordion)(({ theme }) => ({
    border: '0px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
}))

const AccordionSummary = styled(MuiAccordionSummary)(({ theme }) => ({
    backgroundColor: 'rgba(0, 0, 0, .03)',
    paddingLeft: 8,
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: '48px !important',
    maxHeight: 48,
    height: 48,
}))

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(1),
}))

const TypographyStyled = styled(Typography)(({ theme }) => ({
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
}))


function NewAccordion({ title, children, startExpanded }) {
  const [expanded, setExpanded] = React.useState(startExpanded);

  const handlePanel = () => {
    setExpanded(!expanded);
  };

  return (
    <Accordion expanded={expanded} onChange={handlePanel}>
      <AccordionSummary
        expandIcon={<ExpandMore />}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
      >
        <TypographyStyled>{title}</TypographyStyled>
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  );
}

export default NewAccordion;
