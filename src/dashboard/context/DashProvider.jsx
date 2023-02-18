import { useReducer } from 'react';
import { types } from '../types/types';
import { DashContext } from './DashContext';
import { dashReducer } from './dashReducer';

export const DashProvider = ({ children, data }) => {

    const [ dashState, dispatch ] = useReducer( dashReducer, data);
    
    const upDate = () => {
        const action = {
            type: types.refresh,
            payload: data
        };
        dispatch( action );
    };
    
    return (
        <DashContext.Provider value={{
            ...dashState,
            upDate
        }}>
            { children }
        </DashContext.Provider>
    );
};
