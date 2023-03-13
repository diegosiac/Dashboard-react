import { setTwitchApi } from '../api/twitchApi';
import { urls } from '../data/linksApi';

export const getStreamersActiveOrOffline = async( streamers = [] ) => {
    let messageError;
    try {
        const twitchApi = setTwitchApi( urls.urlApi );
        let streamerError = false;

        
        await Promise.allSettled(
            streamers.map( async(streamer) => {
                try {
                    const { data } = await twitchApi.get( urls.pathStreams + streamer.streamerName );
                    streamer.affiliate = false;
                    if (data.data[0] !== undefined) {
                        streamer.live = true;  
                        streamer.title = data.data[0].title;
                        streamer.viewer_count = data.data[0].viewer_count.toLocaleString('en-US');
                        
                        const { data:img } = await twitchApi.get( urls.pathGames + data.data[0].game_id );
                        streamer.imgGameUrl = img.data[0].box_art_url;
                    } else {
                        streamer.live = false;  
                    };
                } catch (error) {
                    return streamerError = true, messageError = error
                };
            })
        );

        if (streamerError) throw streamers 
    
        return {
            streamers: streamers
        };
    } catch (error) {
        return {
            ok: false,
            messageError
        };
    };
};