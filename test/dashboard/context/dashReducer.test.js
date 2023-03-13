import { dashReducer } from '../../../src/dashboard/context/dashReducer';
import { types } from '../../../src/dashboard/types/types';

describe('Pruebas en dashReducer', () => { 

    test('debe de retornar el estado por defecto', () => { 

        const initialState = {
            streamerList: [
                {
                    displayName: 'AuronPlay'
                },
                {
                    displayName: 'Then Gris'
                },
                {
                    displayName: 'Jh'
                }
            ],
        };
        
        const state = dashReducer( initialState, {} );
        expect( state ).toBe( initialState );
    });

    test('debe de hacer un refresh en la lista de streamers', () => { 

        const action = {
            type: types.refresh,
            payload: [
                {
                    displayName: 'AuronPlay'
                },
                {
                    displayName: 'Then Gris'
                },
                {
                    displayName: 'Jh'
                }
            ]
        };
        
        const state = dashReducer( {}, action );
        expect( state ).toEqual({
            streamersList: action.payload
        });
    });

    test('debe de regresar un error', () => {  
        const action = {
            type: types.error,
            payload: 'Error en el reducer'
        };
        
        const state = dashReducer( {}, action );
        expect( state ).toEqual({
            ok: false,
            errorMessage: action.payload
        });
    });

});