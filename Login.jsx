
import { useState } from 'react';
import { auth } from './firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, senha);
      } else {
        await createUserWithEmailAndPassword(auth, email, senha);
      }
      navigate("/painel");
    } catch (error) {
      alert("Erro: " + error.message);
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: '40px auto' }}>
      <h2>{isLogin ? "Entrar" : "Criar Conta"}</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} required /><br/>
        <input type="password" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)} required /><br/>
        <button type="submit">{isLogin ? "Entrar" : "Cadastrar"}</button>
      </form>
      <p>
        {isLogin ? "Não tem conta?" : "Já tem conta?"}
        <button onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? "Cadastre-se" : "Entrar"}
        </button>
      </p>
    </div>
  );
}
