import React, { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

const Pagination = ({ totalPages, currentPage, onPageChange }) => {

  const handlePrevClick = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };
  
  return (
    <Paper 
    component="div" 
    sx={{
      display: "flex",
      justifyContent: "space-around",
      flexWrap: "wrap",
      marginBottom: 1.5,
    }}
    >
    <IconButton aria-label="go back" onClick={handlePrevClick}>
      <ArrowBackIcon color="primary" fontSize="large" />
    </IconButton>

    <Typography variant="h4" component="h3">
    {currentPage} / {totalPages}
    </Typography>
    <IconButton aria-label="go forward" onClick={handleNextClick}>
      <ArrowForwardIcon color="primary" fontSize="large" />
    </IconButton>
  </Paper>
  );
};

export default Pagination;