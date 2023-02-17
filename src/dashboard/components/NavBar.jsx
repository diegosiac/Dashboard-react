import { useNavigate } from 'react-router-dom';
import './NavBar.css'

export const NavBar = () => {

    const navigate = useNavigate();
  
    const onChangePage = () => {
      navigate('/home', {
        replace: true
    });
    };
    
    return (
        <nav className="header">
            <div className="header-container-l">
                <a href="#" className="hc-title">BUM</a>
            </div>
            <div className="nav-menu">
                <h6 onClick={ onChangePage } className="nav-item1"><span> INICIO </span></h6>
            </div>
        </nav> 
    );
};
