import { render, screen } from '@testing-library/react';
import { LiveStreamerInfo } from "../../../src/dashboard/components/LiveStreamerInfo";

const data = { 
    liveData: {
        viwersLive: '123,123',
        title: 'Directo Esland',
        imgGameUrl: 'https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-{width}x{height}.jpg',
    }
};

describe('Pruebas <LiveStreamerInfo/>', () => {
    test('debe de renderizar el componenete con los parametros enviados', () => {
        render(<LiveStreamerInfo liveData={data.liveData}/>);
        
        expect( screen.getByText(data.liveData.viwersLive) ).toBeTruthy();
        expect( screen.getByText(data.liveData.title) ).toBeTruthy();

        const img = screen.getByLabelText('Info-Img');
        const gameImg = data.liveData.imgGameUrl.replace("{width}x{height}", "300x400");

        expect( img.src ).toBe(gameImg);
    }); 
});