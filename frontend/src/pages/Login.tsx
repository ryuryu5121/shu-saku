import React, { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; 
import './Back.css';

export const Login = () => {
  const [id, setId] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('ID:', id, 'Password:', password);
    // ログインのロジックをここに追加します

    // ログイン成功後にホームページにリダイレクト
    navigate('/');
  };

  return (
    <div className="page-container backcolor">
      <div className="content-container">
        <h1 className="title">
          <span className="title-ja">就サク</span> 
          <span className="title-en">My Page 2026</span>
        </h1>
        <img src="/images/man.jpeg" alt="Life Anew" className="main-image" />
        <div className="login-container">
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="id">ID</label>
              <input
                id="id"
                type="text"
                value={id}
                onChange={(e) => setId(e.target.value)}
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">PASSWORD</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit">ログイン</button>
          </form>
          {/* <a href="#" className="forgot-link">▶ ID・PASSWORDを忘れた方はこちら</a> */}
        </div>
      </div>
    </div>
  );
};
