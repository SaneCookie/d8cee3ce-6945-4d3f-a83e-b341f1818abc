import React from 'react';
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";

import PrepareData from "./PrepareData"


export default function Warenkorb({onClose, open, warenKorbItems, sortedByDate, handleClickWarenkorbCounter, handleClickRemoveWarenkorbCounter}:any) {
function handleClose() {
    onClose();
}
return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open} BackdropProps={{ style: { backgroundColor: "transparent" } }}   fullWidth maxWidth="xl" >
        <DialogTitle id="simple-dialog-title">Warenkorb</DialogTitle>
        <PrepareData sortedByDate={sortedByDate} data={warenKorbItems} open={open} handleClickRemoveWarenkorbCounter={handleClickRemoveWarenkorbCounter}/>
    </Dialog>
);

}