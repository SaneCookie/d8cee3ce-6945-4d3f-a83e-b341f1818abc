import React, { useState, useEffect } from 'react';
import './App.scss';
import PrepareData from "./components/PrepareData"
import Header from "./components/Header"
import Warenkorb from "./components/Warenkorb"


export default function App() {
const [data, setData] = useState<any[]>([])
useEffect(() => {
    fetch('https://tlv-events-app.herokuapp.com/events/uk/london')
    .then(res => res.json())
    .then(setData)
},[])
const [sortedByDate, setSortedByDate] = useState(true)
const [warenkorbCounter, setWarenkorbCounter] = useState(0)
const [warenKorb, setWarenkorb] = useState<number[]>([])
const [searchTitle, setSearchTitle] = useState<String>("")
const [warenKorbItems, setWarenKorbItems] = useState<Object>({})
const [open, setOpen] = useState(false);

const addToWarenkorbItems = (value:Object) => {
    setWarenKorbItems([...data].filter((a)=> warenKorb.includes(a._id)));
    setOpen(true);
};
const handleClickSortDate = () => {
    setSortedByDate(current => !current);
};
const handleClickWarenkorbCounter = (value:number) => {
    setWarenkorbCounter(warenkorbCounter + 1);
    setWarenkorb(warenKorb => [...warenKorb, value])
};
const handleClickRemoveWarenkorbCounter = (value:number) => {
    setWarenkorbCounter(warenkorbCounter - 1);
    setWarenKorbItems((warenKorbItems) => Object.values(warenKorbItems).filter((searchItem) => searchItem._id !== value))
    setWarenkorb(warenKorb.filter((a) => a !== value))
};
const handleClickSearchTitle = (value:String) => {
    setSearchTitle(value)
};
const handleClose = (value:any) => {
    setOpen(false);
};

return (
<div className="App">
    <Header handleClickSortDate={handleClickSortDate} warenkorbCounter={warenkorbCounter} handleClickSearchTitle={handleClickSearchTitle} addToWarenkorbItems={addToWarenkorbItems} />
    <Warenkorb open={open} onClose={handleClose} warenKorbItems={warenKorbItems} sortedByDate={sortedByDate} handleClickRemoveWarenkorbCounter={handleClickRemoveWarenkorbCounter}/>
    <PrepareData data = {data} sortedByDate={sortedByDate} handleClickWarenkorbCounter={handleClickWarenkorbCounter} warenKorb={warenKorb} searchTitle={searchTitle} open={open}/>
</div>
);
}
