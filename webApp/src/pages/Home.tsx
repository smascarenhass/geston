// src/pages/Login.tsx
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    navigate("/home");
  };

  return (
    <div>
      <h1>Home</h1>
      <button onClick={handleLogin}>Sair</button>
    </div>
  );
}
