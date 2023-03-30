import "./Styles.css";

const Card = ({ title, text, price }) => {
  return (
    <div className="card__container">
      <span className="card__head-firstH"></span>
      <span className="card__head-band"></span>
      <span className="card__head-secondH"></span>
      <div className="card__body">
        <p className="texto">{title}</p>
        <p className="texto">{text}</p>
        <p className="texto">R$ {price}</p>
        <div className="card__turner">
          <p className="card__spinner">a</p>
        </div>
        <div className="card__opener">
          <p className="card__opener-detail">a</p>
          <p className="card__opener-detail">a</p>
          <p className="card__opener-detail">a</p>
        </div>
      </div>
      <span className="card__foot"></span>
    </div>
  );
};

export default Card;
