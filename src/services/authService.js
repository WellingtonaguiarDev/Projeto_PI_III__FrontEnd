const BASE_URL = 'https://back-end-repository-2.onrender.com/api/client';

export const register = async (userData) => {
  console.log('Sending registration data to backend:', userData);
  const response = await fetch(`${BASE_URL}/register`, { // Altere para a URL de registro correta
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });

  if (!response.ok) {
    console.error('Cadastro falhou com status:', response.status);
    throw new Error('Cadastro falhou');
  }

  const data = await response.json();
  return data; // Aqui você pode retornar uma mensagem de sucesso ou dados do usuário
};

export const login = async (credentials) => {
  console.log('Sending credentials to backend:', credentials);
  const response = await fetch(`${BASE_URL}/login`, { // Ajuste conforme necessário
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  });

  if (!response.ok) {
    console.error('Login failed with status:', response.status);
    throw new Error('Login failed');
  }

  const data = await response.json();
  localStorage.setItem('token', data.token);
  return data;
};

export const logout = () => {
  localStorage.removeItem('token');
};

export const isAuthenticated = () => {
  return !!localStorage.getItem('token');
};
