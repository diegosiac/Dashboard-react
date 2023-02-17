import { useQuery } from 'react-query';
import { useContext } from 'react';
import { getStreamersFilter } from '../../helpers/getStreamersFilter';
import { DashContext } from '../context/DashContext';
import { StreamerCharts, StreamerLive, StreamerOffline } from './';
import './BodyDashboard.css';

export const BodyDashboard = () => {

  const { streamers } = useContext(DashContext);
  const { isLoading, error, data } = useQuery('streamers' , () => getStreamersFilter( streamers ))

  return (
    <section className="section-t">
      <div className="st-container">
        <StreamerOffline streamers={data} spinner={isLoading} />
        <StreamerLive streamers={data} spinner={isLoading}/>
        <StreamerCharts streamers={data} spinner={isLoading}/>
      </div>
    </section>
  );
};
