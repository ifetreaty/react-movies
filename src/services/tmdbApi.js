import { API_KEY } from "./apiConfig";

export const getRecommended = `discover/tv?api_key=${API_KEY}&with_networks=213`;
export const getDiscover = `discover/movie?api_key=${API_KEY}&with_genres=28`;
