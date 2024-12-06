import { Routes, Route } from 'react-router-dom';
import {
    HomePage,
    AboutPage,
    ContactPage,
    Login,
    Cadastro,
    Dashboard
} from "../components";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/mapa" element={<Dashboard />} />
            <Route path="/sobre-nos" element={<AboutPage />} />
            <Route path="/contato" element={<ContactPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
        </Routes>
    );
};

export { AppRoutes };