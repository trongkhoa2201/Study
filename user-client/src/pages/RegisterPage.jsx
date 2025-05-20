import React from "react";
import API from "../api/api";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [form, setForm] = React.useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/auth/register", form);
      alert("Register successfully");
      navigate("/login");
    } catch (err) {
      alert("Lỗi đăng ký");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Name"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <input
        placeholder="Email"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <input
        placeholder="Password"
        type="password"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterPage;
