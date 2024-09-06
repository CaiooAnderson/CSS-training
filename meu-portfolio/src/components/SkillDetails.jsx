import { Box, Typography } from "@mui/material";
// import { motion } from 'framer-motion';

const SkillDetails = ({ icon: Icon, label, color, bgColor, isSelected }) => {
    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <Box className={`skill-icon-container ${isSelected ? 'selecionado' : ''}`} style={{ '--icon-bg-color': bgColor }}>
          <Icon className='skill-icon' style={{ color: color, fontSize: '24px' }} />
        </Box>  
        {isSelected && (
        <Typography variant="subtitle1" sx={{ mt: 1 }}>{label}</Typography>
        )}
      </Box>
    );
  }
  
  export default SkillDetails;  