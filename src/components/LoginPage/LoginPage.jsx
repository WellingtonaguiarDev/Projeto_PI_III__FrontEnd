import React from 'react';
import { Navbar } from '../NavBar';
import "./LoginPage.css"; 

const Login = () => {
    return (
        <>
            <Navbar />
            <main>
                <section className="login-area">
                    <div className="login-container">
                        <form className="login-form" action="login_action.php" method="POST">
                            <div className="input-group">
                                <input
                                    type="text"
                                    id="username"
                                    name="username"
                                    placeholder="Usuário"
                                    required
                                />
                            </div>
                            <div className="input-group password-group">
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    placeholder="Senha"
                                    required
                                />
                            </div>
                            <button type="submit" className="btn-submit">
                                Entrar
                            </button>
                            <div className="options">
                                <label>
                                    <input type="checkbox" name="remember" /> Lembrar
                                </label>
                                <a href="#" className="forgot-password">
                                    Esqueci a senha
                                </a>
                            </div>
                            <p>Entrar com</p>
                            <div className="social-login">
                                <button type="button" className="btn-social gmail">
                                    Gmail
                                </button>
                                <button type="button" className="btn-social facebook">
                                    Facebook
                                </button>
                            </div>
                        </form>
                        <button
                            type="button"
                            className="btn-register"
                            onClick={() => (window.location.href = '/cadastro')}
                        >
                            Cadastrar
                        </button>
                    </div>
                </section>
            </main>
        </>
    );
};

export { Login };
