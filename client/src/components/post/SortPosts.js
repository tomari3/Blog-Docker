import React from "react";

import { StyledSortOptions } from "../../styles/StyledSortOptions";

export const SortPosts = ({ query, setQuery }) => {
  return (
    <StyledSortOptions className="PostsSort">
      <div className="line-wrapper">
        <span className="line-wrapper_line"></span>
      </div>
      <div className="posts_sort">
        <label for="sort-select">sort by:</label>

        <select name="pets" id="sort-select">
          <option value="latest">latest</option>
          <option value="likes">likes</option>
          <option value="saves">saves</option>
          <option value="comments">comments</option>
        </select>
      </div>
    </StyledSortOptions>
  );
};
