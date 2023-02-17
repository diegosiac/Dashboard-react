
export const getStreamersList = async ()=> {
    try {
        const res = await fetch('./data/listStreamer.json');
        const data = await res.json();

        return {
            ok: true,
            streamers: {
                data
            }
        };
    } catch (error) {
        return {
            ok: false
        };
    };
};