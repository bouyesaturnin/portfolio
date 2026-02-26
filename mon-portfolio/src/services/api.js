import axios from 'axios';

// 1. Définition de l'URL de base
// Si on est en production (sur Render), on utilise l'URL du backend déployé
// Sinon, on utilise localhost pour le développement
const API_URL = window.location.hostname === "localhost" 
    ? "http://127.0.0.1:8000" 
    : "https://portfolio-backend5-fp93.onrender.com";

const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// 2. Exemple de fonctions pour tes articles ou ton portfolio
export const getArticles = async () => {
    try {
        const response = await api.get('/core/articles/'); // Remplace par ton vrai endpoint
        return response.data;
    } catch (error) {
        console.error("Erreur lors de la récupération des articles:", error);
        throw error;
    }
};

export const getProjectDetails = async (id) => {
    try {
        const response = await api.get(`/core/projects/${id}/`);
        return response.data;
    } catch (error) {
        console.error("Erreur projet:", error);
        throw error;
    }
};

export default api;