import React from "react";
import { Box, Typography, Slide } from "@mui/material";

const SkillDetails = ({ icon: Icon, label, color, bgColor, isSelected }) => {
    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <Box className={`skill-icon-container ${isSelected ? 'selecionado' : ''}`} style={{ '--icon-bg-color': bgColor }}>
          <Icon className={`skill-icon ${isSelected ? 'flutuando' : ''}`} style={{ color: color, fontSize: '24px' }} />
        </Box>  
        <Slide direction="up" in={isSelected} mountOnEnter unmountOnExit>
        <Typography variant="subtitle1" sx={{ mb: 0, mt: 1 }}>{label}</Typography>
        </Slide>
      </Box>
    );
  }
  
  export default SkillDetails;  