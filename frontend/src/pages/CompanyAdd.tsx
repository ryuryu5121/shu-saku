import React, { useState, FormEvent } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';

const CustomContainer = styled(Container)({
    backgroundColor: 'rgb(244, 248, 248)', // 画面全体の背景色
    padding: '20px', // 必要に応じて調整
    minHeight: '100vh', // コンテナが画面の高さ全体を占めるようにする
    minwidth: '100vw', // コンテナの幅をビューポートの幅全体にする

    boxSizing: 'border-box', // パディングとボーダーを要素の寸法に含める
});

const StyledForm = styled('form')({
    background: 'rgb(256, 256, 256)', // 薄く灰がかった白い色
    padding: '20px',
});

export const CompanyAdd = () => {
    const [companyName, setCompanyName] = useState('');
    const [mypageUrl, setMypageUrl] = useState('');
    const [id, setId] = useState('');

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // ここで入力データを処理します。例: API に送信
        console.log(companyName, mypageUrl, id);
    };

    return (
        <div style={{ backgroundColor: 'rgb(244, 248, 248)' }}>
            <CustomContainer>
                <br></br>
                <br></br>
                <br></br>
                <Typography
                    variant="h4"
                    component="h1"
                    gutterBottom
                    align="center"
                    style={{ fontWeight: 900 }} // fontWeight を 900 に設定
                >
                    企業情報追加
                </Typography>
                <br></br>
                <br></br>
                <br></br>
                <Grid container spacing={0} direction="column" justifyContent="center" alignItems="center">
                    <Grid item>
                        <StyledForm onSubmit={handleSubmit}>
                            <TextField
                                style={{ width: '500px' }}
                                label="企業名"
                                variant="outlined"
                                value={companyName}
                                onChange={(e) => setCompanyName(e.target.value)}
                            />
                        </StyledForm>
                    </Grid>
                    <Grid item>
                        <StyledForm onSubmit={handleSubmit}>
                            <TextField
                                style={{ width: '500px' }}
                                label="マイページURL"
                                variant="outlined"
                                value={companyName}
                                onChange={(e) => setCompanyName(e.target.value)}
                            />
                        </StyledForm>
                    </Grid>
                    <Grid item>
                        <StyledForm onSubmit={handleSubmit}>
                            <TextField
                                style={{ width: '500px' }}
                                label="ID"
                                variant="outlined"
                                value={companyName}
                                onChange={(e) => setCompanyName(e.target.value)}
                            />
                        </StyledForm>
                    </Grid>
                    <Grid item>
                        <StyledForm onSubmit={handleSubmit}>
                            <TextField
                                style={{ width: '500px' }}
                                label="Password"
                                variant="outlined"
                                value={companyName}
                                onChange={(e) => setCompanyName(e.target.value)}
                            />
                        </StyledForm>
                    </Grid>
                    
                    <br></br>
                    <Grid>
                        <Button
                            style={{
                                width: '100px', 
                                height: '45px',
                                fontSize: '18px', // フォントサイズを16pxに設定
                                fontFamily: '"Roboto", sans-serif' // フォントファミリーをRobotoに設定
                            }}
                            variant="contained"
                            color="primary"
                            type="submit"
                            >
                            追加
                        </Button>
                    </Grid>
                    <br></br>
                    <br></br>
                    <br></br>
                    <Grid>
                        <Button
                            variant="outlined"
                            color="primary"
                            type="submit"
                        >
                            メール入力フォームはこちら
                        </Button>
                    </Grid>
                </Grid>
            </CustomContainer>
        </div>
    );  
};