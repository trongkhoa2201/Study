import React, { useEffect } from 'react'
import API from '../api/api';

const ProfilePage = () => {
  const [profile, setProfile] = React.useState({});
  const [editName, setEditName] = React.useState("");
  const [editAge, setEditAge] = React.useState("");

  useEffect(() => {
    const fetchProfile = async () => {
      const res = await API.get('/users/profile');
      setProfile(res.data);
      setEditName(res.data.name);
      setEditAge(res.data.age || '');
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

  if (!profile) return <p>Loading...</p>;

  return (
    <div>
      <h2>Xin chào, {profile.name}</h2>
      <p>Email: {profile.email}</p>
      <input value={editName} onChange={(e) => setEditName(e.target.value)} />
      <input value={editAge} onChange={(e) => setEditAge(e.target.value)} placeholder="Age" />
      <button onClick={handleUpdate}>Update</button>
    </div>
  )
}

export default ProfilePage