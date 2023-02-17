import { setTwitchApi } from "../api/twitchApi";
import { urls } from "../data/linksApi";


export const getFollowersAndStreamerInfo = async( streamers = [] ) => {
    try {
        const streamersList = streamers;
        const twitchApi = setTwitchApi( urls.urlApi );
        await Promise.allSettled(
            streamersList.map( async(streamer) => {
                try {
                    const { data } = await twitchApi.get( urls.pathUsers + streamer.streamerName);
                    const user = data.data[0]
                    const { data:follows } = await twitchApi.get( urls.pathFollows + user.id );
    
                    streamer.urlTwitch = urls.urlTwitch + user.display_name.toUpperCase();
    
                    if( user.broadcaster_type === "partner") streamer.affiliate = true;
                    streamer.profileImage = user.profile_image_url;
                    streamer.streamerName = user.display_name.toUpperCase();
                    streamer.views = user.view_count.toLocaleString('en-US');
                    streamer.description = user.description;
    
                    streamer.follows = follows.total.toLocaleString('en-US');
                } catch (error) {
                    console.log(error);
                };
            })
        );
    
        return {
            streamersList
        };
    } catch (error) {
        return {
            ok: false,
            error
        };
    };

};


