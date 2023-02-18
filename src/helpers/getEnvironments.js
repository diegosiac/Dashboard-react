export const getEnvironments = () => {

    
    return {
        VITE_AUTHORIZATION_BEARER: import.meta.env.VITE_AUTHORIZATION_BEARER,
        VITE_CLIEND_ID: import.meta.env.VITE_CLIEND_ID,
    };
};