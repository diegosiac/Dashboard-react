
export const Cards = ({ title, description, url, nameImg }) => {
  
  return (
    <div className="si-item">
        <div className="si-item-text">
            <p>{title}</p>
            <p>{description}</p>
        </div>
        <img src={url} className="si-item-img" alt={nameImg} />
    </div>
  );
};
