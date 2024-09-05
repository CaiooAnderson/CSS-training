import { Box, Typography } from "@mui/material";

const SkillDetails = ({ icon: Icon, label, color, bgColor }) => {
    return (
      <Box sx={{ textAlign: 'center' }}>
          <Box className="face" sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              width: '100%', 
              height: '100%', 
              backgroundColor: bgColor }}>
            <Icon style={{ width: '50px', height: '50px', color: color, backgroundColor: bgColor }} />
          </Box>
        <Typography variant="subtitle1">{label}</Typography>
      </Box>
    );
  }
  
  export default SkillDetails;