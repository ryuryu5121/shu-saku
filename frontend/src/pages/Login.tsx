import React, { useState, FormEvent } from 'react';
import './Login.css'; 
import './Back.css'



export const Login = () => {
  const [id, setId] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('ID:', id, 'Password:', password);
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
          {/* <p className="warning">
            ご自分以外の第三者が使用する可能性のあるパソコン（学校・会社・インターネットカフェ、図書館等）をご利用の場合は、チェックを外してログインされることをお奨めします。
          </p> */}
          <a href="#" className="forgot-link">▶ ID・PASSWORDを忘れた方はこちら</a>
        </div>
      </div>
    </div>
  );
};


// <div className="checkbox-group">
// <input type="checkbox" id="remember" />
// <label htmlFor="remember">ログイン情報（ID）を記憶する</label>
// </div>

