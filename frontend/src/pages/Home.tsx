import React from "react";
import { useNavigate } from 'react-router-dom';
import { BasicButton } from "../components/BasicButton";
import { CompanyButton } from "../components/CompanyButton";
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { SyuCalendar } from "../components/SyuCalender";
import { Task } from "../components/Task";

export const Home: React.FC = () => {
    const navigate = useNavigate();
    const message1 = "アイコン"
    const message3  = "会社名"
    const message4 = "企業追加"

    const handleCompanyButtonClick = () => {
        navigate('/company');
    };

    const handleAddButtonClick = () => {
        navigate('/companyadd');
    };

    return (
        <div>
            <Grid container alignItems="center" justifyContent="center">
                <h1>ホーム画面</h1>
            </Grid>
            <Grid container alignItems="center" justifyContent="center">
                <Grid item xs={2}></Grid>
                <Grid item xs={3}>
                    <BasicButton text={message1}/>
                </Grid>
                <Grid item xs={3}>
                    <p>名前</p>
                    <p>所属</p>
                </Grid>
                <Grid item xs={1}></Grid>
            </Grid>
            <br></br>
            <Grid container alignItems="center" justifyContent="center">
                <Stack spacing={30} direction="row" alignItems="center">
                    <CompanyButton text={message3} onClick={handleCompanyButtonClick}/>
                    <CompanyButton text={message3} onClick={handleCompanyButtonClick}/>
                    <CompanyButton text={message3} onClick={handleCompanyButtonClick}/>
                </Stack>
            </Grid>
            <br></br>
            <Grid container alignItems="center" justifyContent="center">
                <Stack spacing={30} direction="row">
                    <CompanyButton text={message3} onClick={handleCompanyButtonClick}/>
                    <CompanyButton text={message3} onClick={handleCompanyButtonClick}/>
                    <CompanyButton text={message3} onClick={handleCompanyButtonClick}/>
                </Stack>
            </Grid>
            <br></br>
            <Grid container alignItems="center" justifyContent="center">
                <Stack spacing={30} direction="row">
                    <CompanyButton text={message3} onClick={handleCompanyButtonClick}/>
                    <CompanyButton text={message3} onClick={handleCompanyButtonClick}/>
                    <CompanyButton text={message3} onClick={handleCompanyButtonClick}/>
                </Stack>
            </Grid>
            <br></br>
            <br></br>
            <Grid container alignItems="center" justifyContent="center">
                <BasicButton text={message4} variant="outlined" onClick={handleAddButtonClick}/>
            </Grid>
            <br></br>
            <br></br>
            <Grid container alignItems="center" justifyContent="center">
                <Grid item xs={5}>
                    <Paper elevation={3} style={{ padding: '50px', width: '300px' }}>
                        <SyuCalendar />
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper elevation={3} style={{ padding: '20px', width: '400px' }}>
                        <Task />
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
};
