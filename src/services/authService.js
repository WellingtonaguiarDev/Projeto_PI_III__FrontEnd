import axios from 'axios';

const BASE_URL = 'https://oceanmap-api.onrender.com/api';

export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, {
      email,
      password
    });
    return response;
  } catch (error) {
    throw new Error(error.response.data || 'Erro ao fazer login');
  }
};

export const register = async (name, email, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/register`, {
      name,
      email,
      password
    });
    return response;
  } catch (error) {
    throw new Error(error.response.data || 'Erro ao cadastrar');
  }
};

export const saveSearchHistory = async (userId, beachAddress) => {
  try {
    const response = await axios.post(`${BASE_URL}/${userId}/saveSearchHistory`, {
      beachAddress,
      searchDate: new Date().toISOString()
    });
    return response;
  } catch (error) {
    throw new Error(error.response.data || 'Erro ao salvar histórico de busca');
  }
};

export const updateUser = async (id, userDTO) => {
  try {
    const response = await axios.put(`${BASE_URL}/${id}/update`, userDTO);
    return response;
  } catch (error) {
    throw new Error(error.response.data || 'Erro ao atualizar');
  }
};

export const deleteUser = async (id) => {
  try {
    const response = await axios.delete(`${BASE_URL}/${id}`);
    return response;
  } catch (error) {
    throw new Error(error.response.data || 'Erro ao deletar');
  }
};