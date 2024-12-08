// src/App.js
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './authcontext'; // Importando o AuthProvider
import { AppRoutes } from './routes/index.js';
import { Navbar } from './components/index.js';
import './App.css';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Navbar />
        <AppRoutes />
      </AuthProvider>
    </Router>
  );
}

export default App;