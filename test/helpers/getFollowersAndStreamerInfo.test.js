import { getFollowersAndStreamerInfo } from '../../src/helpers';

describe('Pruebas en getFollowersAndStreamerInfo', () => { 

    test('debe de retornar una lista de streamer con informacion de el', async() => { 
        const listStreamer = [{streamerName: "ibai"}, {streamerName: "thegrefg"}, {streamerName: "auronplay"}];

        const { streamersList } = await getFollowersAndStreamerInfo(listStreamer);

        expect( streamersList[0] ).toMatchObject({
            streamerName: expect.any(String),
            urlTwitch: expect.any(String),
            affiliate: expect.any(Boolean),
            profileImage: expect.any(String),
            views: expect.any(String),
            description: expect.any(String),
            follows: expect.any(String)
        });

        expect( streamersList.length ).toBe( listStreamer.length );
        
    });


    test('debe de retornar un mensaje de error por error en la peticion', async() => {  

        const param = [{ streamerName: 'este no usuario no existe' }];

        const error = await getFollowersAndStreamerInfo(param);

        expect( error ).toEqual({ ok: false, error: param });

    });

});