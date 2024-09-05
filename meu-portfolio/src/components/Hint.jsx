import React, { useState, useEffect } from 'react';
import { Fade } from '@mui/material';
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
        <section className='hint-container'>
            <TipsAndUpdatesIcon className='hint-icon' />
            <Fade in={true} timeout={500} key={index}>
                <p className='hint-text'>{tips[index]}</p>
            </Fade>
        </section>
    );
}

export default Hint;