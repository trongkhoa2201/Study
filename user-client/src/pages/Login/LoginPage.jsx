import React from 'react'
import API from '../../api/api';
import { Container, TextField, Button, Typography, Paper, Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/auth/login", { email, password });
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("username", res.data.user.name);
      alert("Login successfully");
      navigate('/');
    } catch (err) {
      alert('Sai email hoặc mật khẩu');
    }
  }

  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h5" gutterBottom>Đăng nhập</Typography>
        <Box>
          <TextField
            fullWidth
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            label="Mật khẩu"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{ mb: 2 }}
          />
          <Button variant="contained" fullWidth onClick={handleLogin}>
            Đăng nhập
          </Button>

          <Typography variant="body2" align="center">
            Nếu chưa có tài khoản,{' '}
            <Link component={RouterLink} to="/register" underline="hover">
            thì nhấn vào đây để đăng ký
            </Link>
          </Typography>
        </Box>
      </Paper>
    </Container>
  )
}

export default LoginPage