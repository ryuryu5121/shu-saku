import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { CompanyButton } from "../components/CompanyButton";
import { FlowButton } from '../components/FlowButton';
import { useNavigate } from 'react-router-dom';
import './Company.css';

export const Company: React.FC = () => {
    const navigate = useNavigate();
    const [reflection, setReflection] = useState('');
    const [clickedIndex, setClickedIndex] = useState(-1);

    const handleMyPageClick = () => {
        navigate('/mypage');
    };

    const handleReflectionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setReflection(e.target.value);
    };

    const handleFlowButtonClick = (index: number) => {
        setClickedIndex(index);
    };

    const flows = ["START", "ES", "適性検査", "グループディスカッション", "1次面接", "最終面接", "内定"];

    return (
        <div className="recruitment-page">
            <div className="header">
                <h1 className="company-title">企業名</h1>
                <div className="my-page-button">
                <a href="http://localhost:3000" target="_blank" rel="noopener noreferrer">
                <Button 
                    variant="contained" 
                    color="primary"
                >
                    マイページ
                </Button>
            </a>
        </div>
            </div>
            <div className="content">
                <div className="recruitment-flow">
                    {flows.map((flow, index) => (
                        <>
                            <FlowButton 
                                key={index} 
                                text={flow} 
                                clicked={index <= clickedIndex}
                                onClick={() => handleFlowButtonClick(index)}
                            />
                            {index < flows.length - 1 && <div className="arrow">↓</div>}
                        </>
                    ))}
                </div>
                <div className="reflection-section">
                    <h3 className='feedback'>フィードバック</h3>
                    <textarea 
                        value={reflection} 
                        onChange={handleReflectionChange}
                        placeholder="ここに学びを記入してください"
                    />
                </div>
            </div>
        </div>
    );
};
