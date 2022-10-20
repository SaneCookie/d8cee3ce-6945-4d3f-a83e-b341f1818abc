import React, { useState } from 'react';
import Box from '@mui/material/Box';

import InfoLeiste from "./InfoLeiste"
import GridPage from "./GridPage"

export default function PrepareData({data, sortedByDate, handleClickWarenkorbCounter, warenKorb, searchTitle, open, handleClickRemoveWarenkorbCounter}:any) {
const [attending, setAttending] = useState<number>(0);
const handleChangeAttending = (value:number) => {
    setAttending(value);
};

const arrayWarenkorbRemoved = warenKorb?.length > 0 ? [...data].filter((a)=> !warenKorb.includes(a._id)): data

const arraySearchFilter = searchTitle?.length > 0 ? [...arrayWarenkorbRemoved].filter((a)=> a.title.toUpperCase().includes(searchTitle.toUpperCase())): arrayWarenkorbRemoved
const attendingFilter = attending > 0 ? arraySearchFilter.filter((a:any) => a.attending > attending) : arraySearchFilter

const sortDates = [...attendingFilter].sort((a,b):any => sortedByDate? new Date(a.date).getTime() - new Date(b.date).getTime(): new Date(b.date).getTime() - new Date(a.date).getTime())

const objectSortedByLocation:any = [];
sortDates.map((city, index):any => {if(!objectSortedByLocation[city.city]) objectSortedByLocation[city.city] = []; objectSortedByLocation[city.city].push(city); return objectSortedByLocation})
const cityNames:any = Object.keys(objectSortedByLocation)

const objectSortedByEventType:any = [];
sortDates.map((eventType, index):any => {if(!objectSortedByEventType[eventType.private]) objectSortedByEventType[eventType.private] = []; objectSortedByEventType[eventType.private].push(eventType); return objectSortedByEventType})
const eventType:any = Object.keys(objectSortedByEventType)

const objectSortedByDate:any = [];
sortDates.map((date, index):any => {if(!objectSortedByDate[date.date]) objectSortedByDate[date.date] = []; objectSortedByDate[date.date].push(date); return objectSortedByDate})
return <Box>
    <InfoLeiste objectSortedByDate={objectSortedByDate} sortDates={sortDates} cityNames={cityNames} eventType={eventType} handleChangeAttending={handleChangeAttending}/>
    <GridPage objectSortedByDate={objectSortedByDate} handleClickWarenkorbCounter={handleClickWarenkorbCounter} handleClickRemoveWarenkorbCounter={handleClickRemoveWarenkorbCounter} open={open}/>
</Box>
}