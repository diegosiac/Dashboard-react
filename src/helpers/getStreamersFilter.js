import { getFollowersAndStreamerInfo } from './getFollowersAndStreamerInfo';


export const getStreamersFilter = async( streamers ) => {

  const { streamersList } = await getFollowersAndStreamerInfo( streamers );

  const streamersLive = streamersList.filter( streamer => streamer.live === true );
  const streamersOffline = streamersList.filter( streamer => streamer.live === false );

  return {
    streamersLive,
    streamersOffline,
    streamersList
  };
};
