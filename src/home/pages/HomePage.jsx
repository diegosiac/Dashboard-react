import { Footer } from '../../components';
import { Cards, NavBar } from '../components';
import { cardsData } from '../data/cardsContend';
import './HomePage.css';

export const HomePage = () => {
  return (
    <>
      <NavBar/>
      <section className="section">
        <div className="section-jumb">
            <div>
                <div className="sj-img"></div>
                <div className="sji-black"></div>
            </div>
            <div className='sj-container-text'>
                <div className="sj-text">BUM TRAKER</div>
            </div>
        </div>
        <div className="section-info" id="info">
            <div className="si-container">
              {
                cardsData.map( card => (
                  <Cards  key={card.nameImg} 
                          title={card.title} 
                          description={card.description} 
                          url={card.url} 
                          nameImg={card.nameImg}
                  />
                ))
              }
            </div>
        </div>
      </section>
      <Footer />
    </>
    );
};
