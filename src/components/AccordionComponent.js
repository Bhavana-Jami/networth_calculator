import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import SliderComponent from './SliderComponent';

function AccordionComponent(props) {
    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                aria-controls="panel1-content"
                id="panel1-header"
                sx={{ backgroundColor: '#011c46', color: 'white', fontWeight: 'bold' }}
            >
                {props.title}
            </AccordionSummary>
            <AccordionDetails>
                {props.title === "Total Assets" ?
                    ["asd", "asdf"].map((data) => <SliderComponent inputTitle={data} />):
                    ["bha", "asdfsadfdff"].map((data) => <SliderComponent inputTitle={data} />)
            }
            </AccordionDetails>


        </Accordion>
    )
}

export default AccordionComponent