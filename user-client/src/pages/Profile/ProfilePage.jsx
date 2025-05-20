import React, { useEffect } from 'react'
import API from '../../api/api';
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Paper,
  CircularProgress,
} from '@mui/material';

const ProfilePage = () => {
  const [profile, setProfile] = React.useState({});
  const [editName, setEditName] = React.useState("");
  const [editAge, setEditAge] = React.useState("");
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await API.get('/users/profile');
        setProfile(res.data);
        setEditName(res.data.name);
        setEditAge(res.data.age || '');
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const handleUpdate = async () => {
    try {
    const res = await API.put('/users/profile', {
      name: editName,
      age: Number(editAge) || undefined,
    });
    alert('Cập nhật thành công');
    setProfile(res.data);
  } catch (err) {
    alert('Cập nhật thất bại: ' + err.response?.data?.message || err.message);
  }
  };

  if (loading) return <CircularProgress sx={{ m: 5 }} />;

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h5" gutterBottom>
          Xin chào, {profile.name}
        </Typography>
        <Typography variant="body1" gutterBottom>
          Email: {profile.email}
        </Typography>

        <Box component="form" noValidate autoComplete="off" sx={{ mt: 2 }}>
          <TextField
            label="Tên"
            fullWidth
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
            sx={{ mb: 2 }}
          />
          <TextField
            label="Tuổi"
            fullWidth
            value={editAge}
            onChange={(e) => setEditAge(e.target.value)}
            sx={{ mb: 2 }}
          />
          <Button variant="contained" fullWidth onClick={handleUpdate}>
            Cập nhật
          </Button>
        </Box>
      </Paper>
    </Container>
  )
}

export default ProfilePage