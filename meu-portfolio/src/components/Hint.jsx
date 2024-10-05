import React, { useState, useEffect } from 'react';
import { Box, Fade } from '@mui/material';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';

const Hint = ({ tips }) => {
    const [index, setIndex] = useState(0);
    
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % tips.length);
        }, 5000)
        return () => clearInterval(interval);
    }, [tips.length]);
    
    return (
        <Box className='hint-container' 
            sx={{ 
                width: '300px',
                height: '150px',
                background: 'linear-gradient(to bottom left, #ffd700 0%, #ffd700 50%, #ffa500 100%)',
                boxSizing: 'border-box',
                borderBottomLeftRadius: '8px',
                borderBottomRightRadius: '8px',
                borderTopLeftRadius: '20px',                                    
                borderTopRightRadius: '20px',
                filter: 'drop-shadow(1px 1px 3px #000)',
                overflow: 'hidden',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                '@media (max-width: 430px)': {
                    '&': {
                        width: '230px',
                        height: '120px'
                    }
                }                                    
            }}>
            <TipsAndUpdatesIcon className='hint-icon' sx={{ 
                                                            width: '100%',
                                                            color: '#ffd700',
                                                            outline: '1px solid #c2c50c',
                                                            borderTopLeftRadius: '20px',
                                                            borderTopRightRadius: '20px',
                                                            background: 'radial-gradient(circle, #e4ffa4 0%, #fbff0e 20%, #ffd700 40%)',
                                                            '& path': {
                                                                filter: 'drop-shadow(0px 0px 5px #000000)'
                                                            } 
                                                        }} />
            <Fade in={true} timeout={500} key={index}>
                <p className='hint-text'>{tips[index]}</p>
            </Fade>
        </Box>
    );
}

export default Hint;