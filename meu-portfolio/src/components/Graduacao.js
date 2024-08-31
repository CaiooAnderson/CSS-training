import React from 'react';
import { List, ListItem, ListItemAvatar, Avatar, ListItemText, Fade, Typography } from '@mui/material';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';

const Graduacao = () => {
    return (
        <Fade in={true} timeout={2000}>
            <List>
                <Typography variant="h6" sx={{ textAlign: 'center', borderBottom: '1px solid #000' }}>Graduação</Typography>
                <ListItem className='lista'>
                    <ListItemAvatar className='graduacao-icon'>
                        <Avatar>
                            <SchoolOutlinedIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Curso" secondary="Análise e Desenvolvimento de Sistemas" />
                </ListItem>
                <ListItem className='lista'>
                    <ListItemAvatar className='graduacao-icon'>
                        <Avatar>
                            <LocationOnOutlinedIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Universidade" secondary="UNOPAR - Universidade Norte do Paraná" />
                </ListItem>
                <ListItem className='lista'>
                    <ListItemAvatar className='graduacao-icon'>
                        <Avatar>
                            <AccessTimeOutlinedIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Duração" secondary="2 anos: (08/22) - (08/24)" />
                </ListItem>
            </List>
        </Fade>
    );
};

export default Graduacao;