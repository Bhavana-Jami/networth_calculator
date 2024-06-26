import { Box, FormControl, InputLabel, OutlinedInput, InputAdornment, Slider } from '@mui/material'
import React, { useState } from 'react'

function SliderComponent(props) {
    return (
        <Box>
            <FormControl fullWidth sx={{ m: 1 }}>
                <InputLabel htmlFor="outlined-adornment-amount">{props.inputTitle}</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-amount"
                    startAdornment={<InputAdornment position="start">$</InputAdornment>}
                    label="Amount"
                    value={props.value}
                />
            </FormControl>
            <Slider defaultValue={props.value} aria-label="Default" valueLabelDisplay="auto" min={0} max={1000} />
        </Box>
    )
}

export default SliderComponent