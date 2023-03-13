import { useNavigate } from 'react-router-dom';
import './MenuResponsive.css'

export const MenuResponsive = ({ menuResp }) => {
  const navigate = useNavigate();
  const onChangePage = () => {
    if( menuResp ) return navigate('/dashboard', { replace: true});
  }; 

  return (
    <div className={`h-menu ${ menuResp ? "menu-active" : ''} `} aria-label="containerDiv">
        <div className="hm-container">
            <h6 className="hm-text" onClick={ onChangePage } aria-label="changePageDash"><span> ESTADÍSTICAS</span></h6>
        </div>
    </div>
  );
};
