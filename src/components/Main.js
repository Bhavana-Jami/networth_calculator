import React from 'react'
import BarGraph from './BarGraph'
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import AccordionComponent from './AccordionComponent';
import '../components/style.css'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function Main() {

    return (
        <Box
            height="100vh"
            width="100%"
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            gap={2}
        >

            <Typography id="title" marginLeft={8} marginBottom={1} variant='h5' fontWeight={'bolder'} sx={{ alignSelf: 'flex-start' }}>Calculate Your Net Worth</Typography>


            <Grid container
                width="90%"
            >
                <Grid item xs={4} paddingRight="2%" >
                    <Grid container spacing={2} paddingTop="0">
                        <Grid item xs={12}><AccordionComponent /></Grid>
                        <Grid item xs={12}><AccordionComponent /></Grid>
                    </Grid>
                </Grid>
                <Grid item xs={8} border={1} borderColor={'grey.500'} >
                    <Grid container  sx={{ display: "flex", justifyContent: "center", alignItems:"center", padding:"1rem"}}>
                        <Grid item xs={11} border={1} borderColor={'grey.500'}>
                            <Grid container  sx={{marginBottom:"1rem"}}>
                                <Grid item xs={12}>Networth Summary</Grid>
                                <Grid item xs={12}>
                                    <Grid container>

                                        {[{ item: "Total Assets", value: 123 }, { item: "Total Liabilities", value: 234 }, { item: "Networth", value: 45654 }].map((item) => {
                                            return (
                                                <Grid item xs={4} sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                                                    <Grid item>{item.item}</Grid>
                                                    <Grid item>{item.value}</Grid>
                                                </Grid>
                                            )
                                        })}
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={11} border={1} borderColor={'grey.500'} ><BarGraph /></Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Main