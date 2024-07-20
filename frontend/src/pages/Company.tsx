import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { FlowButton } from '../components/FlowButton';
import { useNavigate } from 'react-router-dom';
import './Company.css';

export const Company: React.FC = () => {
    const navigate = useNavigate();
    const [reflection, setReflection] = useState('');
    const [clickedIndex, setClickedIndex] = useState(-1);
    const [failedIndex, setFailedIndex] = useState<number | null>(null);
    const [showJoke, setShowJoke] = useState(false);
    const [showSparkle, setShowSparkle] = useState(false);

    const handleMyPageClick = () => {
        window.location.href = 'https://example.com'; // 外部リンクに移動
    };

    const handleReflectionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setReflection(e.target.value);
    };

    const handleFlowButtonClick = (index: number) => {
        setClickedIndex(index);
        setFailedIndex(null); // クリックすると赤背景が解除される
    };

    const handlePassClick = () => {
        if (clickedIndex < flows.length - 1) {
            setClickedIndex(clickedIndex + 1);
            if (clickedIndex + 1 === flows.length - 1) {
                setShowSparkle(true);
                setTimeout(() => setShowSparkle(false), 5000); // 5秒間キラキラ表示
            }
        }
    };

    const handleFailClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        setFailedIndex(clickedIndex + 1); // 次のフローを不合格に設定
        setShowJoke(true);
    };

    const handleJokeClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        setShowJoke(false);
    };

    const flows = ["START", "ES", "適性検査", "グループディスカッション", "1次面接", "最終面接", "内定"];

    return (
        <div className="recruitment-page">
            <div className="header">
                <h1 className="company-title">企業名</h1>
                <div className="my-page-button">
                    <a href="https://example.com" target="_blank" rel="noopener noreferrer">
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
                                clicked={index <= clickedIndex && failedIndex !== index}
                                failed={failedIndex === index}
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
                    <div className="next-flow">
                        <h3 className='feedback'>選考状況</h3>
                        {clickedIndex < flows.length - 1 && (
                            <>
                                <FlowButton 
                                    text={flows[clickedIndex + 1]} 
                                    clicked={false}
                                    failed={failedIndex === clickedIndex + 1}
                                    onClick={() => {}}
                                />
                                <div className="result-buttons">
                                    <Button 
                                        variant="contained" 
                                        color="success" 
                                        onClick={handlePassClick}
                                        className="result-button"
                                    >
                                        合格
                                    </Button>
                                    <Button 
                                        variant="contained" 
                                        color="error" 
                                        onClick={handleFailClick}
                                        className="result-button"
                                    >
                                        不合格
                                    </Button>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
            {showJoke && (
                <div className="joke" onClick={handleJokeClick}>
                    布団が吹っ飛んだ
                </div>
            )}
            {showSparkle && (
                <div className="sparkle">
                    ✨✨✨おめでとうございます！内定です！✨✨✨
                </div>
            )}
        </div>
    );
};
