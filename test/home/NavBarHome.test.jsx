import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { NavBar } from '../../src/home/components';

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', ()=> ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate
}));

describe('Pruebas en <NavBar/> Home', () => {

    beforeEach( () => jest.clearAllMocks() );

    test('debe de llamar el navigate a la pantalla Home', () => {

        render(
            <MemoryRouter initialEntries={['/home']}>
                <NavBar />
            </MemoryRouter>
        );

        const changePageDash = screen.getByLabelText('changePageDash');
        fireEvent.click(changePageDash)
        
        expect( mockedUseNavigate ).toHaveBeenCalledWith('/dashboard', {'replace': true});

    });
});