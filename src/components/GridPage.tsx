import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import ListElement from "./ListElement"

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function GridPage({objectSortedByDate, handleClickWarenkorbCounter,open, handleClickRemoveWarenkorbCounter}:any) {
return <Box>
    {Object.keys(objectSortedByDate).map((arr:any, index) => {
       return <Box key={index}>
          <Grid container spacing={2} alignItems="stretch">
                {objectSortedByDate[Object.keys(objectSortedByDate)[index]].map(({_id, title, flyerFront, venue, startTime, endTime}:any) =>{
                    return <Grid item xs={4} key={_id}>
                        <Item>{ListElement({title, flyerFront, venue, startTime, endTime, handleClickWarenkorbCounter, _id, open, handleClickRemoveWarenkorbCounter})}</Item>
                    </Grid>
                })}
          </Grid>
       </Box>
    })}
</Box>
}