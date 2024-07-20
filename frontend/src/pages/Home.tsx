import React from "react";
import { BasicButton } from "../components/BasicButton";
import { IconButton } from '@mui/material';
import { CompanyButton } from "../components/CompanyButton";
import Stack from '@mui/material/Stack';
import { SyuCalendar } from "../components/SyuCalender";
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { Task } from "../components/Task";
import Paper from '@mui/material/Paper';

export const Home = () => {
    const message1 = "アイコン"
    const message2 = "追加"
    return (
    <div>
        <Grid container alignItems= "center" justifyContent = "center">
            <h1>ホーム画面</h1>
        </Grid>
        <Grid container alignItems= "center" justifyContent = "center">
            <Grid item xs={2}>
            </Grid>
            <Grid item xs={3}>
                <BasicButton text = {message1}/>
            </Grid>
            <Grid item xs={3}>
                <p>名前</p>
                <p>所属</p>
            </Grid>
            <Grid item xs={1}>
            </Grid>
        </Grid>
        <br></br>
        <Grid container alignItems= "center" justifyContent = "center">
            <Stack spacing={30} direction="row" alignItems="center">
                <CompanyButton/>
                <CompanyButton/>
                <CompanyButton/>
            </Stack>
        </Grid>
        <br></br>
        <Grid container alignItems= "center" justifyContent = "center">
            <Stack spacing={30} direction="row">
                <CompanyButton/>
                <CompanyButton/>
                <CompanyButton/>
            </Stack>
        </Grid>
        <br></br>
        <Grid container alignItems= "center" justifyContent = "center">
            <Stack spacing={30} direction="row">
                <CompanyButton/>
                <CompanyButton/>
                <CompanyButton/>
            </Stack>
        </Grid>
        <br></br>
        <br></br>
        <Grid container alignItems= "center" justifyContent = "center">
            <Button variant="outlined">企業追加</Button>
        </Grid>
        <br></br>
        <br></br>
            <Grid container alignItems= "center" justifyContent = "center">
                {/* <Stack spacing={30} direction="row"> */}
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
                {/* </Stack> */}
            </Grid>
    </div>
    );
  };

 
//                     <Task/>
//                 </Grid>