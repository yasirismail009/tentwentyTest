import React from "react";

export default function Cards(props) {
  const { cardData, currentSlide, dataKey } = props;
  console.log(dataKey);
  return (
    <div className="carosal_card" style={{transform: currentSlide<dataKey?"rotateY(0deg) rotate(30deg)":currentSlide>dataKey?"rotateY(0deg) rotate(-30deg)":"rotateY(0deg) rotate(0deg)"}}>
      <div>
        <img className="carosal_img" style={{borderRadius:"10px"}} src={cardData?.url} alt="img1"  />
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
