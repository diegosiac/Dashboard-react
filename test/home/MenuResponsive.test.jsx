import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { MenuResponsive } from '../../src/home/components';

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', ()=> ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate
}));

describe('Pruebas en <MenuResponsive/>', () => {

    beforeEach( () => jest.clearAllMocks() );

    test('debe de desplegarse el menú responsivo y debe cambiar de pagina', () => {

        render(
            <MemoryRouter initialEntries={['/home']}>
                <MenuResponsive menuResp={true}/>
            </MemoryRouter>
        );

        const changePageDash = screen.getByLabelText('changePageDash');
        fireEvent.click(changePageDash)
        
        expect( mockedUseNavigate ).toHaveBeenCalledWith('/dashboard', {'replace': true});

    });

    test('debe de desplegarse el menú responsivo y debe cambiar de pagina', () => {

        render(
            <MemoryRouter initialEntries={['/home']}>
                <MenuResponsive menuResp={false}/>
            </MemoryRouter>
        );

        const changePageDash = screen.getByLabelText('changePageDash');
        fireEvent.click(changePageDash)
        
        expect( screen.getByLabelText('containerDiv') ).not.toContain('menu-active');
        expect( mockedUseNavigate ).not.toHaveBeenCalled();

    });
});