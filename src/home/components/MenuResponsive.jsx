import { useNavigate } from 'react-router-dom';
import './MenuResponsive.css'

export const MenuResponsive = ({ menuResp }) => {
  const navigate = useNavigate();
  const onChangePage = () => {
    navigate('/dashboard', {
      replace: true
  });
  };

  return (
    <div className={`h-menu ${ menuResp === true ? "menu-active" : ''} `} >
        <div className="hm-container">
            <h6 className="hm-text" onClick={ onChangePage }><span> ESTADÍSTICAS</span></h6>
        </div>
    </div>
  );
};
