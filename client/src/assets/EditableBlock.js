import React, { useState } from "react";
import { textAreaAutoSize } from "../utils/textAreaAutoSize";

export const EditableBlock = ({
  content,
  editedContent,
  setEditedContent,
  isEditMode,
}) => {
  const [intermediateValue, setIntermediateValue] = useState(editedContent);

  const onBlur = () => setEditedContent(intermediateValue);

  const onChange = (e) => setIntermediateValue(e.target.value);

  const onKeyDown = (e) => {
    if (e.key === "Enter" || e.key === "Escape") {
      e.target.blur();
    }
  };

  return isEditMode ? (
    <textarea
      rows={1}
      autoFocus={true}
      aria-label="post-content"
      value={intermediateValue}
      onChange={onChange}
      onKeyDown={onKeyDown}
      onBlur={onBlur}
      onFocus={textAreaAutoSize}
      onInput={textAreaAutoSize}
    />
  ) : (
    <div>{content}</div>
  );
};
