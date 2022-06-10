import React, { useState, useRef, useEffect } from "react";

import { useAxiosPrivate } from "../../hooks/useAxiosPrivate";
import { useAuth } from "../../hooks/useAuth";

import { useOnClickOutside } from "../../hooks/useOnClickOutside";

import { StyledButton } from "../../styles/StyledButton";
import { StyledOptions } from "../../styles/StyledOptions";
import { Dots } from "../../assets/svg/Dots";
import { Camera } from "../../assets/svg/Camera";
import { Trash } from "../../assets/svg/Trash";
import { StyledFileInput } from "../../styles/StyledFileInput";

function useInput(init) {
  const [newCoverFile, setFile] = useState(init);
  const handleFileInput = (e) => {
    setFile(e.target.files[0]);
  };
  return { newCoverFile, handleFileInput };
}

export const CoverOptions = ({ children }) => {
  const { auth } = useAuth();
  const axiosPrivate = useAxiosPrivate();

  const { newCoverFile, handleFileInput } = useInput(null);
  const [open, setOpen] = useState(false);

  const ref = useRef();
  const ignored = useRef();
  useOnClickOutside(ref, ignored, () => setOpen(false));

  const sendNewCover = async () => {
    let formData = new FormData();
    formData.append("cover", newCoverFile);
    const postUrl = `users/${auth._id}/cover`;
    console.log(newCoverFile);
    try {
      const { data } = await axiosPrivate.put(postUrl, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log(data);
      formData = new FormData();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (newCoverFile === null) return;
    console.log(newCoverFile);
    sendNewCover();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newCoverFile]);

  return (
    <StyledOptions
      onClick={(e) => e.stopPropagation()}
      className="CoverOptions"
    >
      <StyledButton ref={ignored} onClick={() => setOpen(!open)}>
        <Dots />
      </StyledButton>
      {open && (
        <div ref={ref} className="options">
          <div className="options_option">
            <Camera />
            <StyledButton className="hidden-input-file">
              <StyledFileInput>
                <label>
                  edit
                  <input
                    type="file"
                    accept=".png,.jpeg"
                    name="cover"
                    onChange={handleFileInput}
                    onInput={sendNewCover}
                  />
                </label>
              </StyledFileInput>
            </StyledButton>
          </div>
          <div className="options_option">
            <Trash />
            <StyledButton>delete</StyledButton>
          </div>
        </div>
      )}
    </StyledOptions>
  );
};
