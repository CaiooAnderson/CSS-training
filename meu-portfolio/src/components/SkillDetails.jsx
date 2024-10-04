import React from "react";
import { Box, Typography, Slide } from "@mui/material";

const SkillDetails = ({ icon: Icon, label, color, bgColor, isSelected }) => {
    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <Box className={`skill-icon-container ${isSelected ? 'selecionado' : ''}`} 
          style={{ 
                  '--icon-bg-color': bgColor,
                  position: 'relative',
                  zIndex: 5,
                  width: '60px',
                  height: '60px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center' 
                }}>
          <Icon className={`skill-icon ${isSelected ? 'flutuando' : ''}`} 
            style={{ 
                    color: color, 
                    fontSize: '24px',
                    transition: 'transform 0.6s ease-in-out',
                    width: '60px',
                    height: '60px'
                  }} />
        </Box>  
        <Slide direction="up" in={isSelected} mountOnEnter unmountOnExit>
          <Typography variant="subtitle1" sx={{ mb: 0, mt: 1 }}>{label}</Typography>
        </Slide>
      </Box>
    );
  }
  
  export default SkillDetails;  