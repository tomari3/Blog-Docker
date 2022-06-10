import React, { useState } from "react";

import { useAxiosPrivate } from "../../hooks/useAxiosPrivate";
import { useAuth } from "../../hooks/useAuth";

import { StyledButton } from "../../styles/StyledButton";
import { Save } from "../../assets/svg/Save";

export const SaveBtn = ({ postId, savesData, setSavesData }) => {
  const { auth } = useAuth();
  const axiosPrivate = useAxiosPrivate();

  const [pop, setPop] = useState(false);
  const saved = savesData.find((s) => s === auth?._id);

  const sendSave = async (e) => {
    e.preventDefault();

    const payload = {};
    const postUrl = `posts/${postId}/save`;

    try {
      const { data } = await axiosPrivate.post(postUrl, payload);
      setSavesData(data);
      // console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const popAnimation = () => {
    if (saved) return setPop(false);
    return setPop(true);
  };

  return (
    <div className="interaction-btn">
      <StyledButton className="amount" fontSize={"small"}>
        <div>
          <p>{savesData.length > 0 ? savesData.length : null}</p>
        </div>
      </StyledButton>
      <StyledButton
        className="SaveBtn"
        onClick={popAnimation}
        onMouseDown={sendSave}
      >
        <Save
          className={`${saved ? "liked" : undefined} ${
            pop ? "pop" : undefined
          }`}
        />
      </StyledButton>
    </div>
  );
};
