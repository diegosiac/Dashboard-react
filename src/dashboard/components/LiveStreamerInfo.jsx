import './LiveStreamerInfo.css';

export const LiveStreamerInfo = ({ liveData }) => {

    const gameImg = liveData.imgGameUrl.replace("{width}x{height}", "300x400");

    return (
        <div className="info-streamer-live">
            <div className="info-live-container">
                <div className="live-container">
                    <div className="live-circle">
                        <div className="circle-pulsate"></div>
                    </div>
                    <div className="live-text">
                        <div>LIVE</div>
                    </div>
                    <div className="live-viewers">
                        <div id="viwersLive">{liveData.viwersLive}</div>
                        <div>Vistas en Directo</div>
                    </div>
                </div>
                <div className="live-description" id="descriptionLive">
                    {liveData.title}
                </div>
            </div>
            <div className="info-live-game">
                <img id="imgGame" src={gameImg} alt="TwitchImage"/>
            </div>
        </div>
    );
};
