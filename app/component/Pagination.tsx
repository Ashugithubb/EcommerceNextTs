import { Box, Button, IconButton } from '@mui/material'
import React from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
interface PropType {
    currentPage: number,
    goToNextPage: () => void,
    goToPrevPage: () => void
    totalPage:number
}
const Pagination = (props: PropType) => {
    const { currentPage, goToNextPage, goToPrevPage,totalPage } = props;

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center',
                gap: 1, 
                p: 2,   
                backgroundColor: '#f5f5f5', 
                marginLeft: '70vw'
            }}
        >
            <IconButton disabled = {currentPage===0} color="primary">
                <ArrowBackIosIcon  onClick={goToPrevPage} />
            </IconButton>
            <Button disabled = {currentPage===0} variant="outlined" >{currentPage - 1}</Button>

            <Button variant="contained" color="primary">{currentPage}</Button>

            <Button disabled = {currentPage===totalPage-1} variant="outlined" >{currentPage + 1}</Button>
            <IconButton disabled = {currentPage===totalPage-1} color="primary">
                <ArrowForwardIosIcon  onClick={goToNextPage} />
            </IconButton>
        </Box>
    )
}

export default Pagination