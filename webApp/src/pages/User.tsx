// src/pages/Login.tsx
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function User() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    navigate("/user");
  };

  return (
    <div>
      <h1>User</h1>
      <button onClick={handleLogin}>Sair</button>
    </div>
  );
}
