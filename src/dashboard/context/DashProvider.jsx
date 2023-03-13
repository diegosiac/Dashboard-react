import { useReducer } from 'react';
import { DashContext } from './DashContext';
import { dashReducer } from './dashReducer';

export const DashProvider = ({ children, data }) => {

    const [ dashState, dispatch ] = useReducer( dashReducer, data );
        
    return (
        <DashContext.Provider value={{
            ...dashState
        }}>
            { children }
        </DashContext.Provider>
    );
};
