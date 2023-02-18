import axios from 'axios';
import { getEnvironments } from '../helpers';

const { VITE_AUTHORIZATION_BEARER, VITE_CLIEND_ID } = getEnvironments();

export const setTwitchApi = ( url ) => {
    const twitchApi = axios.create({
        baseURL: url
    });
    twitchApi.interceptors.request.use( config => {
    
        config.headers = {
            ...config.headers,
            'Authorization': VITE_AUTHORIZATION_BEARER,
            'Client-Id': VITE_CLIEND_ID,
        };
        return config;
    });
    
    return twitchApi;
};

