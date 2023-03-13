import { listStreamers } from '../../src/data/listStreamer';
import { getStreamersActiveOrOffline } from '../../src/helpers';


describe('Pruebas en getStreamersActiveOrOffline', () => { 

    test('debe de retornar una lista de streamers y retornarlo con su informacion', async() => { 
        
        const { streamers } = await getStreamersActiveOrOffline(listStreamers);
        const streamerLive = streamers.filter( streamer => streamer.live );
        const streamerOffline = streamers.filter( streamer => !streamer.live );

        for (let i = 0; i < streamerOffline.length; i++) {
            expect( streamerOffline[i] ).toMatchObject({
                streamerName: expect.any(String),
                affiliate: expect.any(Boolean),
                live: expect.any(Boolean),
            });
        };

        for (let i = 0; i < streamerLive.length; i++) {
            expect( streamerLive[i] ).toMatchObject({
                streamerName: expect.any(String),
                affiliate: expect.any(Boolean),
                live: expect.any(Boolean),
                title: expect.any(String),
                viewer_count: expect.any(String),
                imgGameUrl: expect.any(String),
            });   
        }; 
    });


    test('debe de retornar un mensaje de error por error en la peticion', async() => {  

        const streamerFalse = ['Este no es un streamer valido', 'streamer impostor'];

        const error = await getStreamersActiveOrOffline(streamerFalse);
        expect( error ).toEqual({
            ok: false,
            messageError: expect.any(Error),
        });
    });

});