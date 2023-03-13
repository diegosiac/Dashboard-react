import { DashProvider } from './dashboard/context/DashProvider';
import { AppRouter } from './router/AppRouter';
import { useQuery } from 'react-query';
import { getStreamersActiveOrOffline } from './helpers';
import { listStreamers } from './data/listStreamer';

export const DashApp = () => {

  const { isLoading, error, data } = useQuery('streamers' , () => getStreamersActiveOrOffline(listStreamers));

  if ( isLoading ) return( <></> );

  return (
      <DashProvider data={data}>
          <AppRouter/>
      </DashProvider>
  );
};
