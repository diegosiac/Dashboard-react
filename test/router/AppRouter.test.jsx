import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AppRouter } from '../../src/router/AppRouter';

jest.mock('../../src/dashboard/pages/DashboardPage', () => ({
    DashboardPage: () => <h1>DashboardPage</h1>
}));

describe('Pruebas en <AppRouter/>', () => {
    
    beforeEach( () => jest.clearAllMocks() );

    test('debe de mostrar el home', () => {

        render( 
            <MemoryRouter initialEntries={['/home']}>
                <AppRouter/>
            </MemoryRouter>
         );

        expect( screen.getByText('BUM TRAKER') ).toBeTruthy();
    });

    test('debe de mostrar el dashboard', () => {
        render( 
            <MemoryRouter initialEntries={['/dashboard']}>
                <AppRouter/>
            </MemoryRouter>
        );

        expect( screen.getByText('DashboardPage') ).toBeTruthy();
    });

    test('debe de mostrar el home si se escribe cualquier caracter en el path', () => {
        const path = 'Cualquier cosas'

        render( 
            <MemoryRouter initialEntries={[`/${path}`]}>
                <AppRouter/>
            </MemoryRouter>
         );

        expect( screen.getByText('BUM TRAKER') ).toBeTruthy();

    });
});