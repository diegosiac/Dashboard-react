import { DashProvider } from './dashboard/context/DashProvider';
import { AppRouter } from './router/AppRouter';
import { useQuery } from 'react-query';
import { getStreamersActiveOrOffline } from './helpers';

export const DashApp = () => {

  const { isLoading, error, data } = useQuery('streamers' , () => getStreamersActiveOrOffline());

  if ( isLoading ) return( <></> );

  return (
      <DashProvider data={data}>
          <AppRouter/>
      </DashProvider>
  );
};
