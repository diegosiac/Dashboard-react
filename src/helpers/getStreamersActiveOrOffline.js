import { setTwitchApi } from '../api/twitchApi';
import { urls } from '../data/linksApi';
import { getStreamersList } from './getStreamersList';


export const getStreamersActiveOrOffline = async() => {

    try {
        const twitchApi = setTwitchApi( urls.urlApi );
        const { streamers } = await getStreamersList();
        await Promise.allSettled(
            streamers.data.map( async(streamer) => {
                const { data } = await twitchApi.get( urls.pathStreams + streamer.streamerName );
                // console.log(data)
                streamer.affiliate = false;
                if (data.data[0] !== undefined) {
                    streamer.live = true;  
                    streamer.title = data.data[0].title;
                    streamer.viewer_count = data.data[0].viewer_count.toLocaleString('en-US');;

                    const { data:img } = await twitchApi.get( urls.pathGames + data.data[0].game_id );
                    streamer.imgGameUrl = img.data[0].box_art_url;
                } else {
                    streamer.live = false;  
                };
            })
        );
    
        return {
            streamers: streamers.data
        };
    } catch (error) {
        return {
            ok: false,
            error
        };
    };
};