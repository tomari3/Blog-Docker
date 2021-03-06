import React, { useState, useEffect } from "react";

import { StyledHomePage } from "../../styles/StyledHomePage";

import { MemoPostGallery } from "../post/PostGallery";
import { MemoTagsPanel } from "../tags/TagsPanel";
import { PostFormPrompt } from "../post/PostFormPrompt";
import { UsersPanel } from "../user/UsersPanel";
import { SearchPanel } from "../../assets/SearchPanel";

import { useWindowDimensions } from "../../hooks/useWindowDimensions";
import { useAxiosPrivate } from "../../hooks/useAxiosPrivate";
import { SortPosts } from "../post/SortPosts";
export const HomePage = () => {
  const [tagsData, setTagsData] = useState([]);
  const [postsData, setPostsData] = useState([]);
  const { width: w } = useWindowDimensions();
  const axiosPrivate = useAxiosPrivate();

  useEffect(() => {
    // console.log("___POSTS___");
    const fetchData = async () => {
      const postUrl = `posts`;
      const tagsUrl = `tags`;

      const fetchPosts = await axiosPrivate.get(postUrl);
      const fetchTags = await axiosPrivate.get(tagsUrl);

      Promise.all([fetchPosts, fetchTags])
        .then((data) => {
          setPostsData(data[0].data);
          setTagsData(data[1].data);
          console.log(data);
        })
        .catch((error) => {
          console.error(error);
        });
    };
    fetchData();
  }, [axiosPrivate]);

  return (
    <StyledHomePage className="HomePage">
      <div className="posts">
        <PostFormPrompt setPostsData={setPostsData} />
        <SortPosts />
        <MemoPostGallery postsData={postsData} />
      </div>
      {w > 1000 && (
        <div className="side-panels">
          <SearchPanel />
          <UsersPanel />
          <MemoTagsPanel tagsData={tagsData} />
        </div>
      )}
    </StyledHomePage>
  );
};
