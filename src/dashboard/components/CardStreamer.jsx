import { LiveStreamerInfo } from './LiveStreamerInfo';
import { Partner } from './Partner';
import './CardStreamer.css';


export const CardStreamer = ({ name, profileUrl, imgUrl, followers, viwers, description, partner, live, liveData }) => {

    return (
        <div className="card-streamer-container" data-testid="card-streamer">
            <div className="info-streamer">
                <div className="info-streamer-container">
                    <div className="info-img">
                        <img src={imgUrl} alt={name} aria-label='Card-Img'/>
                    </div>
                    <div className="info-container">
                        <div className="info-container-name">
                            {
                                partner
                                && <Partner/>
                            }
                            <div className="info-name">
                                <a href={profileUrl} target="_blank" aria-label='Card-Link'>{name}</a>
                            </div>
                        </div>
                        <div className="info-container-followers">
                            <div className="info-viewers">
                                <div>{followers}</div>
                                <div>Seguidores</div>
                            </div>
                        </div>
                        <div className="info-container-viewers">
                            <div className="info-viewers">
                                <div>{viwers}</div>
                                <div>Total de Vistas</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="info-streamer-description">
                    {description}
                </div>
            </div>

            {
                live
                && <LiveStreamerInfo liveData={liveData}/>
            }
        </div>
    )
}
