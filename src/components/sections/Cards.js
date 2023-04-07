import React from "react";

export default function Cards(props) {
  const { cardData, currentSlide, dataKey } = props;
  console.log(dataKey);
  return (
    <div className="carosal_card" style={{transform: cardData.rotate==="left"?"rotateY(0deg) rotate(0deg)": cardData.rotate==="right"?"rotateY(0deg) rotate(0deg)":"rotateY(0deg) rotate(0deg)"}}>
      <div>
        <img className="carosal_img" src={cardData?.url} alt="img1"  />
      </div>
      {currentSlide===dataKey ? (
        <div className="crosal_card_data">
          <h1>{cardData?.title}</h1>
          <p>{cardData?.des}</p>
        </div>
      ) : null}
    </div>
  );
}
