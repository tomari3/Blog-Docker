import React from "react";
import { StyledPanel } from "../../styles/StyledPanel";
import { TagBanner } from "./TagBanner";

export const TagsPanel = ({ tagsData }) => {
  // return the first 10
  const tags = !tagsData
    ? null
    : tagsData.map((tagData, index) => {
        return index >= 10 ? null : (
          <TagBanner tagData={tagData} key={tagData._id}></TagBanner>
        );
      });

  return (
    <StyledPanel className="TagsPanel">
      <aside className="tags-panel">
        <h1> Popular Tags </h1>
        {tags}
      </aside>
    </StyledPanel>
  );
};

export const MemoTagsPanel = React.memo(TagsPanel);
