import React from 'react';
import moment from "moment"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import RoomIcon from '@mui/icons-material/Room';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import Box from '@mui/material/Box';

export default function ListElement(props:any) {
return <Card sx={{ height:"44vh"}} >
    <CardContent sx={{ objectFit: "contain", height:"4vh", p:1 }}>
        {props.title}
    </CardContent>
    <CardMedia component="img" image={props.flyerFront} sx={{ objectFit: "contain", height:"25vh" }} alt="No Image Found"/>
    <CardContent sx={{ objectFit: "contain", height:"9vh", position:"relative" }}>
        <a href={props.venue.direction} target="_blank" rel="noopener noreferrer"><RoomIcon />{props.venue.name}</a>
        <p>Starts: {moment(props.startTime).format('DD/MM/YYYY, HH:mm')}</p>
        <p>Ends: {moment(props.endTime).format('DD/MM/YYYY, HH:mm')}</p>
        <Box sx={{position:"absolute", top:"50%", right:"10%"}}>
            {props.open === true ? <RemoveCircleIcon sx={{mr:"auto"}} onClick={() => {props.handleClickRemoveWarenkorbCounter(props._id)} }/> :
            <AddCircleIcon sx={{mr:"auto"}} onClick={() => {props.handleClickWarenkorbCounter(props._id)} }/>}
        </Box>
    </CardContent>
</Card>
}