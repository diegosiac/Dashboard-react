import './Footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer-container">
            <div className="footer-left">
                <div className="footer-left-container">
                    <div className="f-title f-l-title">ACERCA DE NOSOTROS</div>
                    <div className="f-l-description f-description">BUM TRAKER no está afiliado a Twitch o Amazon. Todas las marcas registradas a las que se hace referencia son propiedad de sus respectivos dueños.</div>
                </div>
            </div>
            <div className="footer-right">
                <div className="footer-right-container">
                    <div className="f-title f-r-title">SÍGUENOS EN NUESTRAS REDES</div>
                    <div className="f-r-logos">
                        {/* <!-- Footer Icons Liks --> */}
                        <a href="#"><i className="fa-brands fa-twitter"></i></a>
                        <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                        <a href="#"><i className="fa-brands fa-instagram"></i></a>
                        <a href="#"><i className="fa-brands fa-youtube"></i></a>
                    </div>
                    <div className="f-description f-r-description">
                        <p>BUM S.L. 2022</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  );
};
