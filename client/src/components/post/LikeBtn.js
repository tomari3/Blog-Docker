import React, { useState } from "react";

import { useAxiosPrivate } from "../../hooks/useAxiosPrivate";
import { useAuth } from "../../hooks/useAuth";

import { StyledButton } from "../../styles/StyledButton";
import { Like } from "../../assets/svg/Like";

export const LikeBtn = ({ postId, likesData, setLikesData }) => {
  const { auth } = useAuth();
  const axiosPrivate = useAxiosPrivate();

  const [pop, setPop] = useState(false);
  const liked = likesData.find((l) => l === auth?._id);

  const sendLike = async (e) => {
    e.preventDefault();

    const payload = {};
    const postUrl = `posts/${postId}/like`;

    try {
      const { data } = await axiosPrivate.post(postUrl, payload);
      setLikesData(data);
    } catch (error) {
      // console.log(error);
    }
  };

  const popAnimation = () => {
    if (liked) return setPop(false);
    return setPop(true);
  };

  return (
    <div className="interaction-btn">
      <StyledButton
        className="LikeBtn"
        onClick={popAnimation}
        onMouseDown={sendLike}
      >
        <Like
          className={`${liked ? "liked" : undefined} ${
            pop ? "pop" : undefined
          }`}
        />
      </StyledButton>
    </div>
  );
};
