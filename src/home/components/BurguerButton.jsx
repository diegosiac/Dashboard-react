import './BurguerButton.css'

export const BurguerButton = ({ menuResp, setMenuResp }) => {
  return (
    <div className="nav-hamburger" >
        <button onClick={ () => setMenuResp( !menuResp ) } className={`${ menuResp === true ? "open" : "" }`}>
            <span className="hambur-top-line"></span>
            <span className="hambur-middle-line"></span>
            <span className="hambur-bottom-line"></span>
        </button>
    </div>  
  );
};
