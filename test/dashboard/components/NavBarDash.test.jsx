import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { NavBar } from '../../../src/dashboard/components';

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', ()=> ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate
}));

describe('Pruebas en <NavBar Dashboard/>', () => {

    beforeEach( () => jest.clearAllMocks() );

    test('debe de llamar el navigate a la pantalla Home', () => {

        render(
            <MemoryRouter initialEntries={['/dashboard']}>
                <NavBar />
            </MemoryRouter>
        );

        const changePageHome = screen.getByLabelText('changePageHome');
        fireEvent.click(changePageHome)
        
        expect( mockedUseNavigate ).toHaveBeenCalledWith('/home', {'replace': true});

    });
});