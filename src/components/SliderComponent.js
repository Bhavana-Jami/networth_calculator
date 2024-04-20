import { Box, FormControl,InputLabel,OutlinedInput,InputAdornment, Slider} from '@mui/material'
import React from 'react'

function SliderComponent(props) {
  return (
   <Box>
     <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel htmlFor="outlined-adornment-amount">{props.inputTitle}</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            label="Amount"
          />
        </FormControl>
        <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
   </Box>
  )
}

export default SliderComponent