import { Box, Typography } from "@mui/material";

const SkillDetails = ({ icon: Icon, label, color, bgColor }) => {
    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <Box sx={{ 
              width: '80px', 
              height: '80px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              svg: {
                  fill: color
              }
              }}>
                <Box sx={{ 
                        backgroundColor: bgColor,
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '100%',
                        height: '100%',
                      }}>
                  <Icon />
              </Box>  
          </Box>
        <Typography variant="subtitle1">{label}</Typography>
      </Box>
    );
  }
  
  export default SkillDetails;  