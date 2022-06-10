import React, { useEffect } from "react";

import { useAxiosPrivate } from "../../../hooks/useAxiosPrivate";

import { Comments } from "./Comments";

export const SubComments = ({
  commentId,
  subCommentsData,
  setSubCommentsData,
}) => {
  const axiosPrivate = useAxiosPrivate();

  const fetchData = async () => {
    const payload = {};
    const postUrl = `posts/comments/${commentId}/comments`;

    try {
      const { data } = await axiosPrivate.get(postUrl, payload);
      // console.log(data);
      setSubCommentsData(data);
    } catch (error) {}
  };

  useEffect(() => {
    if (subCommentsData[0]._id) {
      return;
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // console.log(subCommentsData);
  return <Comments data={subCommentsData} sub={true} />;
};
