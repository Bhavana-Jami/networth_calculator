import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

function AccordionComponent() {
    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: 'white' }}/>}
                aria-controls="panel1-content"
                id="panel1-header"
                sx={{ backgroundColor: '#011c46', color: 'white',fontWeight:'bold' }}
            >
                Accordion
            </AccordionSummary>
            <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
            </AccordionDetails>
        </Accordion>
    )
}

export default AccordionComponent