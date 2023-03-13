import { getFollowersAndStreamerInfo } from './getFollowersAndStreamerInfo';


export const getStreamersFilter = async( streamers ) => {

  const resp = await getFollowersAndStreamerInfo( streamers );

  if(resp.ok === false){
    return{ 
      ok: false,
      message: resp.message
    };
  };

  const { streamersList } = resp;
  const streamersLive = streamersList.filter( streamer => streamer.live === true );
  const streamersOffline = streamersList.filter( streamer => streamer.live === false );

  return {
    streamersLive,
    streamersOffline,
    streamersList
  };
};
