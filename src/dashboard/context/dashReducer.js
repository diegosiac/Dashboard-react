import { types } from '../types/types';

export const dashReducer = ( state = {}, action ) => {

    switch ( action.type ) {
        case types.refresh:
            return {
                streamersList: action.payload
            };
        
        case types.error:
            return {
                ok: false,
                errorMessage: action.payload
            };

        default:
            return state;

    };
};