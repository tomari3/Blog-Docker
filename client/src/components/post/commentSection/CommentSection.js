import React, { useEffect } from "react";

import { useAxiosPrivate } from "../../../hooks/useAxiosPrivate";

import { StyledCommentSection } from "../../../styles/StyledCommentSection";
import { Comments } from "./Comments";

export const CommentSection = ({ postId, commentsData, setCommentsData }) => {
  const axiosPrivate = useAxiosPrivate();

  const fetchData = async () => {
    const payload = {};
    const postUrl = `posts/${postId}/comments`;

    try {
      const { data } = await axiosPrivate.get(postUrl, payload);
      setCommentsData(data);
    } catch (error) {}
  };
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StyledCommentSection className="post_comment-section">
      {<Comments data={commentsData} />}
    </StyledCommentSection>
  );
};
