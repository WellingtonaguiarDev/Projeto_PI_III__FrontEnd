import React, { useState } from 'react';
import { useAuth } from '../../authcontext';
import { useNavigate } from 'react-router-dom'; // Importando o useNavigate
import "./LoginPage.css"; 

const Login = () => {
    const { login } = useAuth();
    const navigate = useNavigate(); // Instanciando o navigate
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(email, password);
            navigate('/'); // Redireciona para a página inicial após o login
        } catch (error) {
            console.error("Erro ao fazer login:", error);
            // Opcional: Adicione uma mensagem de erro para o usuário
        }
    };

    return (
        <>
            <main>
                <section className="login-area">
                    <div className="login-container">
                        <form className="login-form" onSubmit={handleSubmit}>
                            <div className="input-group">
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="input-group password-group">
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    placeholder="Senha"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
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
