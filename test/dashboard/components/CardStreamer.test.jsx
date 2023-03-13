import { render, screen } from '@testing-library/react';
import { CardStreamer } from '../../../src/dashboard/components/CardStreamer';

const data = { 
    streamerName: 'TenGriss', 
    urlTwitch: 'www.twitch.tv/THEGREFG', 
    profileImage: 'https://static-cdn.jtvnw.net/jtv_user_pictures/de4cee58-aee7-400d-b823-32aa7a1d3235-profile_image-300x300.png', 
    follows: '11,187,403', 
    views: '263,195,635', 
    description: 'Hola, me llamo David aunque la gente me llama "TheGrefg" y me gusta entretener =) Business: contact@thegrefg.com', 
    live: false, 
    liveData: {
        viwersLive: '123,123',
        title: 'Directo Esland',
        imgGameUrl: 'https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-{width}x{height}.jpg',
    }
};
const mockLiveStreamerInfo = jest.fn();

jest.mock('../../../src/dashboard/components/LiveStreamerInfo', () => ({
    LiveStreamerInfo: ( liveData ) => {
        mockLiveStreamerInfo( liveData );
        return <div></div>;
    },
}));

describe('Pruebas en <CardStreamer/>', () => {

    beforeEach( () => jest.clearAllMocks() );

    test('debe de renderizar el componente con los parametros enviados y ser partner', () => {
        
        render(<CardStreamer
            key={data.streamerName}
            name={data.streamerName}
            profileUrl={data.urlTwitch}
            imgUrl={data.profileImage}
            followers={data.follows}
            viwers={data.views}
            description={data.description}
            partner={true}
            live={false}
        />)
        
        const img = screen.getByLabelText('Card-Img');
        const link = screen.getByLabelText('Card-Link');

        expect( img.href ).toBe(data.imgUrl);
        expect( link.src ).toBe(data.profileUrl);


        expect( screen.getByText(data.streamerName) ).toBeTruthy();

        expect( screen.getByText(data.follows) ).toBeTruthy();
        expect( screen.getByText(data.views) ).toBeTruthy();
        expect( screen.getByText(data.description) ).toBeTruthy();
        expect( screen.getByText('Partner') ).toBeTruthy();

        expect( screen.queryByText('LIVE') ).toBeNull();
    });

    test('debe de renderizar el componente con los parametros enviados, estar live y no ser partner', () => {
        
        render(<CardStreamer
            key={data.streamerName}
            name={data.streamerName}
            profileUrl={data.urlTwitch}
            imgUrl={data.profileImage}
            followers={data.follows}
            viwers={data.views}
            description={data.description}
            partner={false}
            live={true}
            liveData={data.liveData}
        />);

        const img = screen.getByLabelText('Card-Img');
        const link = screen.getByLabelText('Card-Link');
        
        expect( img.href ).toBe(data.imgUrl);
        expect( link.src ).toBe(data.profileUrl);
        
        expect( screen.getByText(data.streamerName) ).toBeTruthy();
        expect( screen.getByText(data.follows) ).toBeTruthy();
        expect( screen.getByText(data.views) ).toBeTruthy();
        expect( screen.getByText(data.description) ).toBeTruthy();
        expect( screen.queryByText('Partner') ).toBeNull();
        
        expect( mockLiveStreamerInfo ).toHaveBeenCalledWith({liveData: data.liveData});
    });

});