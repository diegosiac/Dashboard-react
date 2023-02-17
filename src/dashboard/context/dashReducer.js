import { types } from '../types/types';

export const dashReducer = ( state = { a: "asdf"}, action ) => {

    switch ( action.type ) {
        case types.refresh:
            return {
                streamersLive: action.streamersLive,
                streamersOffline: action.streamersOffline
            };
        
        case types.error:
            return {
                ok: false,
                errorMessage: action.error
            };

        default:
            return state;

    };
};