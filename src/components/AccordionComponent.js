import React, { useState } from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import SliderComponent from './SliderComponent';
import { Box, FormControl, InputLabel, OutlinedInput, InputAdornment, Slider } from '@mui/material'


function AccordionComponent(props) {


    // const [realEstateInputValue, setRealEstateInputValue] = useState(500)

    // const handleInputChange = () => {

    // }
    // const handlePersonalInputChange = () => {

    // }
    // const handleRealInputChange = (e) => {
    //     realEstateInputValue(e.target.value)

    // }
    // const yourAssets =
    //     [{ id: 1, inputTitle: "Real estate", value: 1000, onChange: (event) => handleRealInputChange(1, event), state: realEstateInputValue },
    //     { id: 2, inputTitle: "Personal property", value: 100, onChange: (event) => handlePersonalInputChange(2, event) },
    //     { id: 3, inputTitle: "Investments", value: 100, onChange: (event) => handleInputChange(3, event) },
    //     { id: 4, inputTitle: "Cash", value: 100, onChange: (event) => handleInputChange(4, event) }]

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
                {
                    props.title === "Total Assets" ?
                        [{ inputTitle: "Real estate", value: 100000 },
                        { inputTitle: "Personal property", value: 100 },
                        { inputTitle: "Investments", value: 100 },
                        { inputTitle: "Cash", value: 100 }].map((data) => <SliderComponent inputTitle={data.inputTitle} value={data.value} />) :
                        [{ inputTitle: "Mortagage balance", value: 100 },
                        { inputTitle: "Loan balaces", value: 100 },
                        { inputTitle: "Credit card debt", value: 100 }
                        ].map((data) => <SliderComponent inputTitle={data.inputTitle} value={data.value} />)
                }
                {/* {
                    props.title === "Total Assets" ?
                        yourAssets.map((data) => (
                            <Box>
                                <FormControl fullWidth sx={{ m: 1 }}>
                                    <InputLabel htmlFor="outlined-adornment-amount">{data.inputTitle}</InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-amount"
                                        startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                        label="Amount"
                                        value={data.state}

                                    />
                                </FormControl>
                                <Slider defaultValue={0} aria-label="Default" valueLabelDisplay="auto" min={0} max={1000} onChange={data.onChange} />
                            </Box>)) : null
                } */}
            </AccordionDetails>


        </Accordion>
    )
}

export default AccordionComponent