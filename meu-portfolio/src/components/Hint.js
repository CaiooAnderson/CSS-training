import React, { useState, useEffect } from 'react';
import { Fade } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import EmojiObjectsOutlinedIcon from '@mui/icons-material/EmojiObjectsOutlined';

import TipsAndUpdatesOutlinedIcon from '@mui/icons-material/TipsAndUpdatesOutlined';

const Hint = ({ tips }) => {
    const [index, setIndex] = useState(0);
    
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % tips.length);
        }, 5000)
        return () => clearInterval(interval);
    }, [tips.length]);
    
    return (
        <section className='hint-container'>
            <TipsAndUpdatesOutlinedIcon className='hint-icon' />
            <Fade in={true} timeout={500} key={index}>
                <p className='hint-text'>{tips[index]}</p>
            </Fade>
        </section>
    );
}

export default Hint;