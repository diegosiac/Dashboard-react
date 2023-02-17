import { useReducer } from 'react';
import { getStreamersActiveOrOffline } from '../../helpers';
import { types } from '../types/types';
import { DashContext } from './DashContext';
import { dashReducer } from './dashReducer';

const streamerList = await getStreamersActiveOrOffline();

export const DashProvider = ({ children }) => {

    const [ dashState, dispatch ] = useReducer( dashReducer, streamerList);
    
    const upDate = () => {
        const action = {
            type: types.refresh,
            payload: streamerList
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
