import React, { useState as useStateMock } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { BurguerButton } from '../../src/home/components';



describe('Pruebas en <BurguerButton/>', () => {

    beforeEach(() => {})

    test('debe de renderizar el componente activando el menu hamburguesa con el boton', () => {

        const state = jest.fn()

        render( <BurguerButton menuResp={true} setMenuResp={state}/> );
        
        const changePageDash = screen.getByRole('button');
        fireEvent.click(changePageDash) 
        
        expect(state).toHaveBeenCalledWith(false)
        expect(changePageDash.className).toContain('open');

    });

    test('debe de renderizar el componente desactivando el menu hamburguesa con el boton', () => {
        const state = jest.fn()

        render( <BurguerButton menuResp={false} setMenuResp={state}/> );
        
        const changePageDash = screen.getByRole('button');
        fireEvent.click(changePageDash) 
        
        expect(state).toHaveBeenCalledWith(true)
        expect(changePageDash.className).toContain('');
    });


});