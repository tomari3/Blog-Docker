import React from "react";

import { useAxiosPrivate } from "../../../hooks/useAxiosPrivate";
import { useAuth } from "../../../hooks/useAuth";

import { StyledButton } from "../../../styles/StyledButton";

export const LikeCommentBtn = ({
  postId,
  commentId,
  likesData,
  setLikesData,
}) => {
  const { auth } = useAuth();
  const axiosPrivate = useAxiosPrivate();

  const liked = likesData.find((l) => l === auth?._id);

  const sendLike = async (e) => {
    e.preventDefault();

    const payload = {};
    const postUrl = `posts/comments/${commentId}/like/`;

    try {
      const { data } = await axiosPrivate.post(postUrl, payload);
      // console.log(data);
      setLikesData(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <StyledButton onMouseDown={sendLike} $bold $muted fontSize={"small"}>
        <div className={`comment-interaction_btn_btn ${liked ? "liked" : ""}`}>
          {liked ? "liked" : "like"}
        </div>
      </StyledButton>
      {likesData.length ? (
        <StyledButton
          className="comment-interaction_btn_amount"
          fontSize={"small"}
          $padding
        >
          <div>
            <p>{likesData.length ? likesData.length : null}</p>
          </div>
        </StyledButton>
      ) : null}
    </>
  );
};
