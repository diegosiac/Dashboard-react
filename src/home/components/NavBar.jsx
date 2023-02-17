import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BurguerButton, MenuResponsive } from './';
import './NavBar.css'


export const NavBar = () => {

  const navigate = useNavigate();

  const [menuResp, setMenuResp] = useState(false);

  const onChangePage = () => {
    navigate('/dashboard', {
      replace: true
  });
  };

  return (
    <nav className="header">
        <div className="header-container-l">
            <a href="#" className="hc-title">BUM</a>
        </div>
        <div className="nav-menu">
            <h6 href="" onClick={ onChangePage } className="nav-item1"><span> ESTADÍSTICAS </span></h6>
            {/* <!-- Header Nav Burger --> */}
            <BurguerButton menuResp={ menuResp } setMenuResp={ setMenuResp }/>
        </div>
        <MenuResponsive menuResp={ menuResp }/>
    </nav> 
  );
};
