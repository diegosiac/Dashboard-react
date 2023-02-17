import { CardStreamer, Spinner } from './';

export const StreamerOffline = ({streamers, spinner}) => {
  return (
    <div className="container-streamer-live">
        <div className="streamer-live-text">TWITCH STREAMERS</div>
        <div className="live-streamers-container" id="streamers">
            {
              spinner
              ? <Spinner/>
              : streamers.streamersOffline.map((streamer) => ( 
                <CardStreamer
                  key={streamer.streamerName}
                  name={streamer.streamerName}
                  profileUrl={streamer.urlTwitch}
                  imgUrl={streamer.profileImage}
                  followers={streamer.follows}
                  viwers={streamer.views}
                  description={streamer.description}
                  partner={streamer.affiliate}
                />
            ))}
            
        </div>  
    </div>
  );
};
