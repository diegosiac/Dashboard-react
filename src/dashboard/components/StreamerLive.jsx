import { CardStreamer, Spinner } from './';
import './StreamerOfflineAndLive.css';

export const StreamerLive = ({streamers, spinner}) => {

  return (
    <div className="container-streamer-live">
        <div className="streamer-live-text">TWITCH STREAMERS LIVE </div>
        <div className="live-streamers-container" id="streamers-live">
          {
            spinner 
            ? <Spinner/>
            : streamers.streamersLive.map((streamer) => ( 
              <CardStreamer
                key={streamer.streamerName}
                name={streamer.streamerName}
                profileUrl={streamer.urlTwitch}
                imgUrl={streamer.profileImage}
                followers={streamer.follows}
                viwers={streamer.views}
                description={streamer.description}
                partner={streamer.affiliate}
                live={streamer.live}
                liveData={{
                  viwersLive: streamer.viewer_count,
                  title: streamer.title,
                  imgGameUrl: streamer.imgGameUrl,
                }}
              />
          ))}
            
        </div>  
    </div>
  )
}
