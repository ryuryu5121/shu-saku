import React, { useState, FormEvent } from 'react';
import { Button, TextField, Box, Typography, Container, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import axios, { HttpStatusCode } from "axios";
import { useNavigate } from "react-router-dom";

const CustomButton = styled(Button)(({ theme }) => ({
  fontWeight: 'bold',
  padding: theme.spacing(1, 4),
  borderRadius: '20px',
  transition: 'background-color 0.3s',
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
  fontSize: '1.1rem', // 文字サイズを少し大きくする
}));

const CustomPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: '20px',
  boxShadow: theme.shadows[5],
  backgroundColor: '#fff',
}));

const EmailParser = () => {
  const [emailContent, setEmailContent] = useState('');
  const [personalId, setPersonalId] = useState('');
  const [editablePersonalId, setEditablePersonalId] = useState('');
  const [myPageUrl, setMyPageUrl] = useState('');
  const [editableMyPageUrl, setEditableMyPageUrl] = useState('');
  const [mypagepassword, setMypagePassword] = useState('');
  const [companyName, setCompanyName] = useState('');

  const handleParseEmail = () => {
    const idMatch = emailContent.match(/ＩＤ：|ID ： |ID：|ＩＤ　：　|ID　　：|【  I　　D  】(\S+)/);
    const urlMatch = emailContent.match(/マイページ：|MyPage：|マイページURL：|MyPage：　|Ｕ　Ｒ　Ｌ：|MypageURL：|【マイページ】(\S+)/);

    if (idMatch) {
      setPersonalId(idMatch[1] || '');
      setEditablePersonalId(idMatch[1] || '');
    } else {
      setPersonalId('');
      setEditablePersonalId('');
    }

    if (urlMatch) {
      setMyPageUrl(urlMatch[1] || '');
      setEditableMyPageUrl(urlMatch[1] || '');
    } else {
      setMyPageUrl('');
      setEditableMyPageUrl('');
    }
  };

  const handleReset = () => {
    setEmailContent('');
    setPersonalId('');
    setEditablePersonalId('');
    setMyPageUrl('');
    setEditableMyPageUrl('');
    setMypagePassword('');
    setCompanyName('');
  };

  const handleGoBack = () => {
    window.location.href = 'http://localhost:3000';
  };

  return (
    <div style={{ backgroundColor: '#f0f4f8', minHeight: '100vh', padding: '40px 20px' }}>
      <Container maxWidth="md">
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#333', mb: 4, textAlign: 'center' }}>
          企業情報の追加
        </Typography>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <CustomPaper elevation={3}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', color: '#333' }}>
                  メールから入力
                </Typography>
                <TextField
                  label="メール内容"
                  multiline
                  rows={12}
                  variant="outlined"
                  fullWidth
                  value={emailContent}
                  onChange={(e) => setEmailContent(e.target.value)}
                  placeholder="ここにメールの内容を貼り付けてください..."
                  sx={{ backgroundColor: '#fff', borderRadius: 1 }}
                />
                <Box sx={{ display: 'flex', justifyContent: 'space-around', mt: 2 }}>
                  <CustomButton variant="contained" color="primary" onClick={handleParseEmail} sx={{ width: '150px', padding: '10px 0' }}>
                    入力
                  </CustomButton>
                  <CustomButton variant="outlined" color="secondary" onClick={handleReset} sx={{ width: '150px', padding: '10px 0' }}>
                    リセット
                  </CustomButton>
                </Box>
              </Box>
            </CustomPaper>
          </Grid>
          <Grid item xs={12} md={6}>
            <CustomPaper elevation={3}>
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', color: '#333' }}>
                企業情報入力
              </Typography>
              <Typography variant="body1" sx={{ color: '#555' }}>企業名</Typography>
              <TextField
                variant="outlined"
                fullWidth
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                sx={{ mb: 2 }}
              />
              <Typography variant="body1" sx={{ color: '#555' }}>マイページURL</Typography>
              <TextField
                variant="outlined"
                fullWidth
                value={editableMyPageUrl}
                onChange={(e) => setEditableMyPageUrl(e.target.value)}
                sx={{ mb: 2 }}
              />
              <Typography variant="body1" sx={{ color: '#555' }}>ID</Typography>
              <TextField
                variant="outlined"
                fullWidth
                value={editablePersonalId}
                onChange={(e) => setEditablePersonalId(e.target.value)}
                sx={{ mb: 2 }}
              />
              <Typography variant="body1" sx={{ color: '#555' }}>パスワード</Typography>
              <TextField
                variant="outlined"
                fullWidth
                value={mypagepassword}
                onChange={(e) => setMypagePassword(e.target.value)}
                type="password"
                sx={{ mb: 2 }}
              />
            </CustomPaper>
          </Grid>
        </Grid>
        <Box mt={4} display="flex" justifyContent="center" gap={14}>
          <CustomButton variant="outlined" color="primary" sx={{ fontSize: '1rem', padding: '10px 40px' }} onClick={handleGoBack}>
            戻る
          </CustomButton>
          <CustomButton variant="contained" color="primary" sx={{ fontSize: '1rem', padding: '10px 40px' }}>
            決定
          </CustomButton>
        </Box>
      </Container>
    </div>
  );
};

export default EmailParser;
