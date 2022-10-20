import React, { useState } from 'react';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TextField from '@mui/material/TextField';

import moment from "moment"

export default function InfoLeiste({ objectSortedByDate, sortDates,cityNames, eventType, handleChangeAttending}:any) {
const [location, setLocation] = useState("");
const [publicEvent, setPublic] = useState('');

const handleChangeLocation = (event: SelectChangeEvent) => {
    setLocation(event.target.value as string);
};

const handleChangepublicEvent = (event: SelectChangeEvent) => {
    setPublic(event.target.value as string);
};
return <Box>
    <Box sx={{display: 'flex', justifyContent: 'space-around', p: 1, m: 1, }}>
        <FormControl sx={{ minWidth: 120 }} >
            <InputLabel id="location-select-label">location</InputLabel>
            <Select labelId="location-select-label" id="location-select" value={location} label="Town" onChange={handleChangeLocation}>{
                cityNames.map((names:any, index:any)=>{
                    return <MenuItem value={names} key={index}>{names}</MenuItem>
                })
                }
                </Select>
        </FormControl>
        <TextField id="outlined-basic" label="Attending less then" variant="outlined" sx={{ml:0}} onChange={(event) => {handleChangeAttending(event.target.value)}}/>
        <FormControl sx={{ minWidth: 120 }} >
            <InputLabel id="eventType-select-label">Event Type</InputLabel>
            <Select labelId="eventType-select-label" id="eventType-select" value={publicEvent} label="Event Type" onChange={handleChangepublicEvent}>{
                eventType.map((eventType:any, index:any) =>{
                    return <MenuItem value={eventType} key={index}>{eventType === "false"? "private":"public"}</MenuItem>
                })
                }
                </Select>
        </FormControl>
</Box>
    <Chip variant="outlined" label={moment(objectSortedByDate).format('dddd MMMM DD YYYY, HH:mm')} color="primary" sx={{position: "sticky", top: 0}}/>
</Box>

}