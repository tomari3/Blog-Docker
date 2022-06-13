import React from "react";

import { useAuth } from "../../hooks/useAuth";

import { longMonth } from "../../utils/dateFormat";

import { CoverOptions } from "./CoverOptions";
import { ProfilePicture } from "./ProfilePicture";

export const UserProfile = ({ userData }) => {
  const { auth } = useAuth();
  const isAuthor = userData?._id === auth?._id;

  const DEFAULT_VALUE =
    "https://res.cloudinary.com/dv32amiu2/image/upload/v1654709446/t8v9r5wdz4fevb9rrtjs.jpg";
  const src = userData?.cover?.src || DEFAULT_VALUE;

  return (
    <section className="user">
      <section className="user_details">
        <div className="user_details_image-wrapper">
          <div className="user_details_image-wrapper_cover">
            <img src={src} alt="cover" />
          </div>
          <div className="user_details_image-wrapper_actions">
            {isAuthor && (
              <CoverOptions public_id={userData?.cover?.public_id} />
            )}
          </div>
          <div className="user_details_image-wrapper_profile">
            <ProfilePicture userData={userData} />
          </div>
        </div>

        <div className="user_details_info">
          <h1 className="user_details_info_username">{userData?.username}</h1>
          <p className="user_details_info_date">
            {userData?.date ? ("joined: ", longMonth(userData?.date)) : null}
          </p>
        </div>
      </section>
    </section>
  );
};
