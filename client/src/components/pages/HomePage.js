import React, { useState, useEffect } from "react";

import { StyledHomePage } from "../../styles/StyledHomePage";

import { MemoPostGallery } from "../post/PostGallery";
import { MemoTagsPanel } from "../tags/TagsPanel";
import { PostFormPrompt } from "../post/PostFormPrompt";
import { UsersPanel } from "../user/UsersPanel";

import { useWindowDimensions } from "../../hooks/useWindowDimensions";
import { useAxiosPrivate } from "../../hooks/useAxiosPrivate";
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

  const e = {
    m: w > 500,
    l: w > 1200,
    LEFT: <div key={"l"} className="l"></div>,
    MIDDLE: (
      <div key={"m"} className="m">
        <PostFormPrompt setPostsData={setPostsData} />
        <MemoPostGallery postsData={postsData} />
      </div>
    ),
    RIGHT: (
      <div key={"r"} className="r">
        <UsersPanel />
        <MemoTagsPanel tagsData={tagsData} />
      </div>
    ),
  };

  return (
    <StyledHomePage className="HomePage">
      {{
        [e.m]: [e.LEFT, e.MIDDLE],
        [e.l]: [e.LEFT, e.MIDDLE, e.RIGHT],
      }[true] || e.MIDDLE}
    </StyledHomePage>
  );
};
