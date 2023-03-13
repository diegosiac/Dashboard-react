import { setTwitchApi } from '../../src/api/twitchApi';
import { urls } from '../../src/data/linksApi';

describe('Pruebas en twitchApi', () => { 

    test('debe de contener Authorization y Client-Id en los headers', async() => { 

        const twitchApi = setTwitchApi(urls.urlApi);

        const res = await twitchApi.get(urls.pathGames);

        expect( res.config.headers['Authorization'] ).toBe( process.env.VITE_AUTHORIZATION_BEARER );        
        expect( res.config.headers['Client-Id'] ).toBe( process.env.VITE_CLIEND_ID );        
    
    });

});