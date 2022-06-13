import React, { useState, useRef, useEffect } from "react";

import { useAxiosPrivate } from "../../hooks/useAxiosPrivate";
import { useAuth } from "../../hooks/useAuth";

import { handleResponseMessage } from "../../utils/handleResponseMessage";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";

import { Toast } from "../../assets/Toast";
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

export const CoverOptions = ({ public_id }) => {
  const { auth } = useAuth();
  const axiosPrivate = useAxiosPrivate();

  const { newCoverFile, handleFileInput } = useInput(null);
  const [open, setOpen] = useState(false);

  const [responseStatus, setResponseStatus] = useState("");
  const [responseInfo, setResponseInfo] = useState("");

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
      setResponseInfo(handleResponseMessage(data));
      setResponseStatus("success");

      setTimeout(() => {
        setResponseStatus("");
      }, 4000);

      formData = new FormData();
    } catch (error) {
      setResponseInfo(handleResponseMessage(error));
      setResponseStatus("error");

      setTimeout(() => {
        setResponseStatus("");
      }, 4000);
    }
  };

  const sendDelete = async () => {
    const postUrl = `users/${auth._id}/cover`;
    const payload = {
      public_id: public_id,
    };

    try {
      const { data } = await axiosPrivate.delete(postUrl, { data: payload });
      setResponseInfo(handleResponseMessage(data));
      setResponseStatus("success");

      setTimeout(() => {
        setResponseStatus("");
      }, 4000);
    } catch (error) {
      setResponseInfo(handleResponseMessage(error.response.data));
      setResponseStatus("error");

      setTimeout(() => {
        setResponseStatus("");
      }, 4000);
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
      <Toast
        type={responseStatus}
        msg={responseInfo}
        setResponseStatus={setResponseStatus}
      />
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
                  change
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
            <StyledButton onClick={sendDelete}>delete</StyledButton>
          </div>
        </div>
      )}
    </StyledOptions>
  );
};
