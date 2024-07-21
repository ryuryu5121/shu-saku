import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const CustomButton = styled(Button)(({ clicked, failed, text }) => ({
    fontSize: '1.5rem',
    fontWeight: 'bold',
    backgroundColor: failed ? 'red' : (clicked ? 'lightskyblue' : 'white'),
    color: clicked || failed ? 'white' : 'black',
    borderRadius: text === 'START' || text === '内定' ? '15px' : '4px',
    '&:hover': {
        backgroundColor: failed ? 'darkred' : (clicked ? 'lightskyblue' : 'lightblue'),
    },
}));

export const FlowButton = ({ text, clicked, failed, onClick }) => {
    return (
        <CustomButton 
            variant="outlined" 
            clicked={clicked ? 1 : 0}
            failed={failed ? 1 : 0}
            text={text}
            onClick={onClick}
        >
            {text}
        </CustomButton>
    );
};
