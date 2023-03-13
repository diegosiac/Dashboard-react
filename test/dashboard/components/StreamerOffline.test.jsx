import { render, screen } from '@testing-library/react';
import { StreamerOffline } from '../../../src/dashboard/components';
import { streamers } from '../../fixtures/StreamersList';

describe('Pruebas en <StreamerOffline/>', () => {

    test('debe de renderizar el componente en estado de cargar', () => {

        render(<StreamerOffline streamers={{}} spinner={true}/>)

        expect( screen.getByTestId('spinner') ).toBeTruthy();
        expect( screen.queryByTestId('card-streamer') ).toBeNull();
    });
    
    test('debe de renderizar el componente con una lista de streamers Offline', () => {

        render(<StreamerOffline streamers={streamers} spinner={false}/>)

        expect( screen.queryAllByTestId('card-streamer').length ).toBe(streamers.streamersOffline.length);
        expect( screen.queryByTestId('spinner') ).toBeNull();
    });

});