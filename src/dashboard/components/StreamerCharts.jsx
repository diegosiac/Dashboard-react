import { ChartStreamersBar, ChartStreamersLine } from './';
import './StreamerCharts.css';

export const StreamerCharts = ({streamers, spinner}) => {

  return (
    <div className="container-streamer-chart">
        <div className="streamer-live-text">TWITCH TOPS</div>
        <div className="streamer-container-charts">
            <div className="streamer-chart streamer-chart-top">
              <div className="streamer-chart-text">TOP 10 MAYORES VISTAS</div>
                <ChartStreamersBar streamers={streamers} spinner={spinner}/>
            </div>
            <div className="streamer-chart">
              <div className="streamer-chart-text">TOP 10 MAYORES SEGUIDORES</div>
                <ChartStreamersLine streamers={streamers} spinner={spinner}/>
            </div>
        </div>
    </div>
  );
};
