// src/pages/Login.tsx
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Introduction() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    navigate("/home");
  };

  return (
    <div>
      <h1>Introduction</h1>
      <button onClick={handleLogin}>Entrar</button>
    </div>
  );
}
