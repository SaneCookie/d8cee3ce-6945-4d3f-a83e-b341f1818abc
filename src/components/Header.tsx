import React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';

export default function Header({handleClickSortDate, warenkorbCounter, handleClickSearchTitle, addToWarenkorbItems}:any) {

return <Box  display="flex"  alignItems="center" minHeight="1vh" flexDirection="row" sx={{ m: 1,p:1,position: "sticky", top: 0 }}     bgcolor="gray"         >
    <TextField id="outlined-basic" label="search" variant="outlined" sx={{ml:0}} onChange={(event) => {handleClickSearchTitle(event.target.value)}}
    InputProps={{startAdornment: (<InputAdornment position="start">
    <SearchIcon />
    </InputAdornment>),}}
     />
    <Box onClick={() => {handleClickSortDate()}}><FilterAltIcon sx={{mr:"auto"}}/></Box>
    <Box  sx={{ml:"auto"}} onClick={addToWarenkorbItems}>
        <IconButton aria-label="cart">
            <Badge badgeContent={warenkorbCounter} color="error">
                <ShoppingCartIcon />
            </Badge>
        </IconButton>
    </Box>
</Box>
}