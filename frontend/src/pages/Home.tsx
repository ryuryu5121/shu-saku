import React from "react";
import { BasicButton } from "../components/BasicButton";
import { IconButton } from '@mui/material';
import { CompanyButton } from "../components/CompanyButton"
import Stack from '@mui/material/Stack';
import { SyuCalendar } from "../components/SyuCalender"
import Grid from '@mui/material/Grid';

export const Home = () => {
    return (
    <div>
        <Grid container alignItems= "center" justifyContent = "center">
            <h1>ホーム画面</h1>
        </Grid>
        <Grid container alignItems= "center" justifyContent = "center">
            <Grid item xs={2}>
            </Grid>
            <Grid item xs={3}>
                <BasicButton />
            </Grid>
            <Grid item xs={3}>
                <p>名前</p>
                <p>所属</p>
            </Grid>
            <Grid item xs={1}>
            </Grid>
        </Grid>
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
        <br></br>
        <Grid container alignItems= "center" justifyContent = "center">
            <SyuCalendar/>
        </Grid>
    </div>
    );
  };