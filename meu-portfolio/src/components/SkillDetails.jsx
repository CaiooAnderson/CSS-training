import { Box, Typography } from "@mui/material";

const SkillDetails = ({ icon: Icon, label, color, bgColor }) => {
    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <Box className='skill-icon-container' style={{ '--icon-bg-color': bgColor }}>
          <Icon className='skill-icon' style={{ color: color, fontSize: '24px' }} />
        </Box>  
        <Typography variant="subtitle1" sx={{ mt: 1 }}>{label}</Typography>
      </Box>
    );
  }
  
  export default SkillDetails;  