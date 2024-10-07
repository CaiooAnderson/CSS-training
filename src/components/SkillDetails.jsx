import React from "react";
import { Box, Typography, Slide } from "@mui/material";

const SkillDetails = ({ icon: Icon, label, color, bgColor, isSelected }) => {
    return (
      <Box sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                justifyContent: 'center',
                '@media (max-width: 430px)': {
                  '.skill-icon-container': {
                    height: '30px',
                  },
                  '.skill-icon-container svg': {
                    height: '30px',
                    width: '30px',
                  },
                }   
              }}>
        <Box className={`skill-icon-container ${isSelected ? 'selecionado' : ''}`}
          sx={{ 
            position: 'relative',
            zIndex: 5,
            width: '60px',
            height: '60px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            '& svg': {
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '60px',
              height: '60px',
            },
          }} 
          style={{ 
                  '--icon-bg-color': bgColor,
                }}>
          <Icon className={`skill-icon ${isSelected ? 'flutuando' : ''}`}
            sx={{
              color: color,
              fontSize: '24px',
              transition: 'transform 0.6s ease-in-out',
            }} 
            style={{ 
                    color: color, 
                    fontSize: '24px',
                  }} />
        </Box>  
        <Slide direction="up" in={isSelected} mountOnEnter unmountOnExit>
          <Typography variant="subtitle1" sx={{ mb: 0, mt: 1 }}>{label}</Typography>
        </Slide>
      </Box>
    );
  }
  
  export default SkillDetails;  