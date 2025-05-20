import React from 'react'
import API from '../../api/api';
import { Container, TextField, Button, Typography, Paper, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/auth/login", { email, password });
      localStorage.setItem("token", res.data.token);
      alert("Login successfully");
      navigate('/profile');
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
        </Box>
      </Paper>
    </Container>
  )
}

export default LoginPage