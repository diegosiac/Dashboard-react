import { getStreamersFilter } from '../../src/helpers/getStreamersFilter';

describe('Pruebas en getStreamersFilter', () => { 

    test('debe de regresar a los streamers filtrados', async() => { 

        const streamers = [
            { streamerName: "ibai", live: true }, 
            { streamerName: "werlyb", live: false }, 
            { streamerName: "thegrefg", live: true }
        ];

        const { streamersLive, streamersOffline, streamersList } = await getStreamersFilter( streamers );

        const StreamerValidate = {
            streamerName: expect.any(String),
            live: expect.any(Boolean),
            urlTwitch: expect.any(String),
            affiliate: expect.any(Boolean),
            profileImage: expect.any(String),
            views: expect.any(String),
            description: expect.any(String),
            follows: expect.any(String),
        };

        for (let i = 0; i < streamersOffline.length; i++) {
            expect( streamersList[i] ).toMatchObject(StreamerValidate);   
        }; 

        for (let i = 0; i < streamersList.length; i++) {
            expect( streamersList[i] ).toMatchObject(StreamerValidate);   
        }; 

        for (let i = 0; i < streamersLive.length; i++) {
            expect( streamersList[i] ).toMatchObject(StreamerValidate);   
        }; 

    });

    test('debe retornar error por los nombres no correctos de los streamers', async() => {  

        const streamers = [
            { streamerName: "este no es un nombre correcto", live: true }, 
            { streamerName: "Streamer impostor", live: false }, 
            { streamerName: "no existe", live: true }
        ];

        const { ok, message } = await getStreamersFilter( streamers );

        expect( ok ).toBeFalsy();
        expect( message ).toEqual(expect.any(Error));
    });
});