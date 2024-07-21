import React, { useState, FormEvent } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';
import axios, { HttpStatusCode } from "axios";
import { useNavigate } from "react-router-dom";

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

type CompanyInfo = {
    company: {
        companyName: string;
        mypageid: string;
        mypagepassword: string;
        mypageurl: string;
        status: number;
    }
}

type Props = {
    belong: string;
    CompanyInfo : string;
    username: string;
  };
  

export const CompanyAdd = () => {
    const [companyName, setCompanyName] = useState('');
    const [mypageUrl, setMypageUrl] = useState('');
    const [mypageid, setMypageId] = useState('');
    const [mypagepassword, setMypagePassword] = useState('');
    const [id, setId] = useState('');
    const navigate = useNavigate();

    const name = {
        company: {
            companyName: companyName,
            mypageid: mypageid,
            mypagepassword: mypagepassword,
            mypageurl: mypageUrl,
            status: id,
        }
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        if (companyName === "" || mypageUrl === "" || mypageid === "" || mypagepassword === "" ) {
            alert("入力されていない箇所があります");
            return;
          }
        e.preventDefault();
        // ここで入力データを処理します。例: API に送信
        console.log(companyName, mypageUrl, id, mypageid, mypagepassword);

        try {
            const resp = await axios.post("/api/signin", {
                company: {
                    companyName: companyName,
                    mypageid: mypageid,
                    mypagepassword: mypagepassword,
                    mypageurl: mypageUrl,
                    status: id,
                }
            });
    
            // const data: CompanyInfo = resp.data;
            // レスポンスの処理
        } catch (error) {
            // エラーハンドリング
            console.error(error);
        }
    };

    const handleChangePage = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): Promise<void>  => {
        if (companyName === "" || mypageUrl === "" || mypageid === "" || mypagepassword === "" ) {
            alert("入力されていない箇所があります");
            console.log(name)
            // navigate('/companyadd');
            e.preventDefault();
            return;
        }
        console.log(name)
        navigate('/');
        try {
            const resp = axios.post("/api/signin", {
                company: {
                    companyName: companyName,
                    mypageid: mypageid,
                    mypagepassword: mypagepassword,
                    mypageurl: mypageUrl,
                    status: id,
                }
            });
        
                // const data: CompanyInfo = resp.data;
                // console.log(name);
                // レスポンスの処理
        } catch (error) {
                // エラーハンドリング
            console.error(error);
        }
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
                                value={mypageUrl}
                                onChange={(e) => setMypageUrl(e.target.value)}
                            />
                        </StyledForm>
                    </Grid>
                    <Grid item>
                        <StyledForm onSubmit={handleSubmit}>
                            <TextField
                                style={{ width: '500px' }}
                                label="ID"
                                variant="outlined"
                                value={mypageid}
                                onChange={(e) => setMypageId(e.target.value)}
                            />
                        </StyledForm>
                    </Grid>
                    <Grid item>
                        <StyledForm onSubmit={handleSubmit}>
                            <TextField
                                style={{ width: '500px' }}
                                label="Password"
                                variant="outlined"
                                value={mypagepassword}
                                onChange={(e) => setMypagePassword(e.target.value)}
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
                            onClick = {handleChangePage}
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