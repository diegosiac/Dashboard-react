import { render, screen } from '@testing-library/react';
import { StreamerLive } from '../../../src/dashboard/components';
import { streamers } from '../../fixtures/StreamersList';

describe('Pruebas en <StreamerLive/>', () => {

    test('debe de renderizar el componente en estado de cargar', () => {

        render(<StreamerLive streamers={{}} spinner={true}/>)

        expect( screen.getByTestId('spinner') ).toBeTruthy();
        expect( screen.queryByTestId('card-streamer') ).toBeNull();
    });

    test('debe de renderizar el componente con una lista de streamers Live', () => {

        render(<StreamerLive streamers={streamers} spinner={false}/>)

        expect( screen.queryAllByTestId('card-streamer').length ).toBe(streamers.streamersLive.length);
        expect( screen.queryByTestId('spinner') ).toBeNull();
    });

});