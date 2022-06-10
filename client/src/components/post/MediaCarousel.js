import React, { useState } from "react";
import { SwipeArrow } from "../../assets/svg/SwipeArrow";
import { StyledButton } from "../../styles/StyledButton";
import { StyledCarousel } from "../../styles/StyledCarousel";

export const MediaCarousel = ({ mediaData }) => {
  const [imageIndex, setImageIndex] = useState(0);
  const handleImageSwipe = (direction) => {
    const minIndex = 0;
    const maxIndex = mediaData.length - 1;

    if (imageIndex + direction < minIndex || imageIndex + direction > maxIndex)
      return;

    setImageIndex(imageIndex + direction);
  };
  const media = mediaData.map((media) => {
    const { _id, src, role } = media;
    return <img key={_id} src={src} alt={role} />;
  });

  return (
    <StyledCarousel className="MediaCarousel" imageIndex={imageIndex}>
      {mediaData.length > 1 && (
        <div className="images-counter">
          <span>
            {imageIndex + 1}/{mediaData.length}
          </span>
        </div>
      )}
      {imageIndex > 0 && (
        <StyledButton
          className="swipe-left"
          onClick={() => handleImageSwipe(-1)}
        >
          <SwipeArrow />
        </StyledButton>
      )}
      {imageIndex < mediaData.length - 1 && (
        <StyledButton
          className="swipe-right"
          onClick={() => handleImageSwipe(1)}
        >
          <SwipeArrow />
        </StyledButton>
      )}
      <div className="images-wrapper">{media}</div>
    </StyledCarousel>
  );
};
