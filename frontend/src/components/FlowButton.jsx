import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const CustomButton = styled(Button)(({ clicked, text }) => ({
    fontSize: '1.5rem',
    fontWeight: 'bold',
    backgroundColor: clicked ? 'lightskyblue' : 'white',
    color: clicked ? 'white' : 'black',
    borderRadius: text === 'START' || text === '内定' ? '15px' : '4px', // 丸くする
    '&:hover': {
        backgroundColor: clicked ? 'lightskyblue' : 'lightblue',
    },
}));

export const FlowButton = ({ text, clicked, onClick }) => {
    return (
        <CustomButton 
            variant="outlined" 
            clicked={clicked ? 1 : 0}
            text={text}
            onClick={onClick}
        >
            {text}
        </CustomButton>
    );
};
