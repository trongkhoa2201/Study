import React, { useState } from "react";
import { Container, TextField, Button, Typography, Paper, Box, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import API from "../../api/api.js";

const RegisterPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleRegister = async () => {
    try {
      await API.post("/auth/register", form);
      alert("Đăng ký thành công! Vui lòng đăng nhập");
      window.location.href = "/login"; // hoặc dùng history.push nếu dùng react-router-dom v5
    } catch (err) {
      alert("Đăng ký thất bại: Email đã tồn tại hoặc dữ liệu không hợp lệ!");
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h5" gutterBottom>
          Đăng ký
        </Typography>
        <Box>
          <TextField
            fullWidth
            label="Tên"
            name="name"
            value={form.name}
            onChange={handleChange}
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            label="Email"
            name="email"
            value={form.email}
            onChange={handleChange}
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            label="Mật khẩu"
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            label="Tuổi"
            name="age"
            value={form.age}
            onChange={handleChange}
            sx={{ mb: 2 }}
          />

          <Button variant="contained" fullWidth onClick={handleRegister} sx={{ mb: 2 }}>
            Đăng ký
          </Button>

          <Typography variant="body2" align="center">
            Nếu đã có tài khoản,{" "}
            <Link component={RouterLink} to="/login" underline="hover">
              đăng nhập ở đây
            </Link>
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default RegisterPage;