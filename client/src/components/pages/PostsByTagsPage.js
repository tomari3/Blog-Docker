import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { useAxiosPrivate } from "../../hooks/useAxiosPrivate";
import { StyledHomePage } from "../../styles/StyledHomePage";

import { PostFormPrompt } from "../post/PostFormPrompt";
import { MemoPostGallery } from "../post/PostGallery";

export const PostsByTagsPage = () => {
  const [tagPosts, setTagPosts] = useState();

  const { id } = useParams();

  const axiosPrivate = useAxiosPrivate();

  useEffect(() => {
    const fetchPostsByTags = async () => {
      const tagUrl = `tags/${id}`;

      const { data } = await axiosPrivate.get(tagUrl);
      setTagPosts(data);
    };
    fetchPostsByTags();
  }, [axiosPrivate, id]);

  return (
    <StyledHomePage>
      <div key={"m"} className="m">
        <PostFormPrompt setTagPosts={setTagPosts} />
        <MemoPostGallery postsData={tagPosts} />
      </div>
    </StyledHomePage>
  );
};
