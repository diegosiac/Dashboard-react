

export const getChartFilter = ( streamerFilter, type ) => {

    const { streamersList } = streamerFilter;

    let streamers;
    let data;

    if ( type === "views") {

        streamers = streamersList.slice().sort((a, b) => (
            Number(b.views.replace(/,/g, "")) - Number(a.views.replace(/,/g, ""))
        )).slice(0, 10);
        data = streamers.map((views) => {
            return Number(views.views.replace(/,/g, ""))
        });
        
    } else if ( type === "follows") {
        
        streamers = streamersList.slice().sort((a, b) => (
            Number(b.follows.replace(/,/g, "")) - Number(a.follows.replace(/,/g, ""))
        )).slice(0, 10);
        data = streamers.map((follows) => {
            return Number(follows.follows.replace(/,/g, ""))
        });

    } else {
        return {
            error: "this type does not exist"
        };
    };

    const labels = streamers.map((name) => {
        return name.streamerName
    });

    return {
        labels,
        data
    };
};
