import axios from 'axios';



const api = axios.create({

  baseURL: process.env.EXPO_PUBLIC_API_URL || 'https://api-contatos-auth-04-09-25.onrender.com/',

});



export const setAuthToken = (token) => {

  if (token) {

    api.defaults.headers.common.Authorization = `Bearer ${token}`;

  } else {

    delete api.defaults.headers.common.Authorization;

  }

};



export const fotoUrl = (foto) => {
  if (!foto) return undefined;
  if (/^https?:\/\//i.test(foto)) return foto;
  const base = api.defaults.baseURL.replace(/\/$/, '');
  const caminho = foto.replace(/^\/+/, '');
  return `${base}/${caminho.startsWith('uploads/') ? caminho : `uploads/${caminho}`}`;
};

export default api;
