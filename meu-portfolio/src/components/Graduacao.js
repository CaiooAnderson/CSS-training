import React from 'react';
import { List, ListItem, ListItemAvatar, Avatar, ListItemText, Fade } from '@mui/material';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';

const Graduacao = () => {
    return (
        <Fade in={true} timeout={2000}>
            <List>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <SchoolOutlinedIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Graduação" secondary="Análise e Desenvolvimento de Sistemas" />
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <LocationOnOutlinedIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Universidade" secondary="Unopar Anhanguera" />
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
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