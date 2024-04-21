import React, { useState, useEffect } from 'react'
import BarGraph from './BarGraph'
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import AccordionComponent from './AccordionComponent';
import '../components/style.css'
import '../App.css'

function Main() {
    // getting props from child aka AccordionComponent.js
    const [assetSum, setAssetSum] = useState()
    const [liabilitySum, setLiabilitySum] = useState()
    const gettingSumValue = (assetsum, liabilitysum, msg) => {
        setAssetSum(assetsum)
        setLiabilitySum(liabilitysum)
    }
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
            <Box width="90%" display="flex" id="title" alignItems="start"
                justifyContent="start" marginTop={2}>
                <Typography variant='h5' fontWeight={'bolder'}>Calculate Your Net Worth</Typography>
            </Box> <Grid container
                width="90%"

            >
                <Grid item xs={12} sm={4} paddingRight="2%" >
                    <Grid container spacing={2} paddingTop="0" paddingBottom={2}>
                        <Grid item xs={12}><AccordionComponent title="Total Assets" gettingSumValue={gettingSumValue} /></Grid>
                        <Grid item xs={12}><AccordionComponent title="Total Liabilities" gettingSumValue={gettingSumValue} /></Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={8} border={1} borderColor={'#e1e1e1'} >
                    <Grid container sx={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "1rem", gap: "1.2rem" }}>
                        <Grid item xs={12} sm={11} border={1} borderColor={'#e1e1e1'} >
                            <Grid container sx={{ gap: "1.3rem", padding: "1.3rem 0.6rem" }} display="flex"
                                alignItems="center"
                                justifyContent="center" boxSizing={'none'}>
                                <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", alignItems: "center", color: "#011c46", fontWeight: "bold", fontSize: "1.3rem" }}>Networth Summary</Grid>
                                <Grid item xs={12}>
                                    <Grid container sx={{ color: "#011c46" }}>

                                        {[{ item: "Total Assets", value: assetSum }, { item: "Total Liabilities", value: liabilitySum }, { item: "Networth", value: assetSum - liabilitySum }].map((item, index) => {
                                            return (
                                                <Grid key={index} item xs={12} sm={4} sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", gap: "0.4rem" }}>
                                                    <Grid item>{item.item}</Grid>
                                                    <Grid item sx={{ fontWeight: "bold", fontSize: "1rem" }}>${item.value}</Grid>
                                                </Grid>
                                            )
                                        })}
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={11} border={1} borderColor={'#e1e1e1'} sx={{ padding: "1rem" }} ><BarGraph liabilitySum={liabilitySum} assetSum={assetSum} /></Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Main