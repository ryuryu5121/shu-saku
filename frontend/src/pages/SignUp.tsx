import React, { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box'; // Box コンポーネントをインポート

export const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [affiliation, setAffiliation] = useState("");
  const [icon, setIcon] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // ここでフォームの送信処理を行います
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setIcon(URL.createObjectURL(e.target.files[0]));
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom align="center">
        Sign up
      </Typography>
      <br></br>
      <br></br>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3} direction="column"> {/* 項目間の間隔を調整 */}
          <Grid item>
            <TextField
              fullWidth
              label="ユーザー名"
              variant="outlined"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Grid>
          <Grid item>
            <TextField
              fullWidth
              label="メールアドレス"
              variant="outlined"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
          <Grid item>
            <TextField
              fullWidth
              label="所属"
              variant="outlined"
              value={affiliation}
              onChange={(e) => setAffiliation(e.target.value)}
            />
          </Grid>
          <br></br>
          <br></br>
          <br></br>
          <Grid item>
            <TextField
              fullWidth
              label="パスワード"
              variant="outlined"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={toggleShowPassword}
                      edge="end"
                      aria-label="toggle password visibility"
                    >
                      <Typography variant="caption">{showPassword ? '非表示' : '表示'}</Typography>
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item>
            <TextField
              fullWidth
              label="パスワードの確認"
              variant="outlined"
              type={showConfirmPassword ? 'text' : 'password'}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={toggleShowConfirmPassword}
                      edge="end"
                      aria-label="toggle confirm password visibility"
                    >
                      <Typography variant="caption">{showConfirmPassword ? '非表示' : '表示'}</Typography>
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item>
            {icon && (
              <Box textAlign="center" mb={2}> {/* 画像プレビューを中央揃えにし、マージンを調整 */}
                <img src={icon} alt="アイコン画像プレビュー" style={{maxWidth: '100%', maxHeight: '200px'}} />
              </Box>
            )}
            <Box display="flex" justifyContent="flex-end"> {/* ボタンを右下に配置 */}
              <Button
                variant="contained"
                component="label"
              >
                アイコン画像をアップロード
                <input
                  type="file"
                  hidden
                  onChange={handleFileChange}
                />
              </Button>
            </Box>
          </Grid>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <Grid item>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              type="submit"
            >
              アカウント作成
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};