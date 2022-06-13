import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { useAuth } from "../../hooks/useAuth";
import { useAxiosPrivate } from "../../hooks/useAxiosPrivate";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";

import { StyledProfilePage } from "../../styles/StyledProfilePage";

import {
  StyledTab,
  StyledTabList,
  StyledTabPanel,
  StyledTabs,
} from "../../styles/StyledTabs";

import { UsersPanel } from "../user/UsersPanel";
import { UserProfile } from "../user/UserProfile";
import { MemoPostGallery } from "../post/PostGallery";

export const ProfilePage = () => {
  const { auth } = useAuth();
  const axiosPrivate = useAxiosPrivate();
  const { width: w } = useWindowDimensions();

  const [userData, setUserData] = useState({});
  const [postsData, setPostsData] = useState([]);
  const [likesData, setLikesData] = useState([]);
  const [savesData, setSavesData] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const userUrl = `users/${id}`;
      const userPayload = "";

      const postsUrl = `users/${id}/posts`;
      const postsPayload = "";

      const likesUrl = `users/${id}/likes`;
      const likesPayload = "";

      const savesUrl = `users/${id}/saves`;
      const savesPayload = "";

      const fetchUser = await axiosPrivate.get(userUrl, userPayload);
      const fetchPosts = await axiosPrivate.get(postsUrl, postsPayload);
      const fetchLikes = await axiosPrivate.get(likesUrl, likesPayload);
      const fetchSaves = await axiosPrivate.get(savesUrl, savesPayload);

      try {
        const [user, posts, likes, saves] = await Promise.all([
          fetchUser,
          fetchPosts,
          fetchLikes,
          fetchSaves,
        ]);
        setUserData(user.data);
        setPostsData(posts.data);
        setLikesData(likes.data);
        setSavesData(saves.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [auth._id, axiosPrivate, id]);

  return (
    <StyledProfilePage className="ProfilePage">
      <section className="profile-page_content">
        <UserProfile userData={userData} />

        <section className="tabs">
          <StyledTabs>
            <StyledTabList>
              <StyledTab>
                <p>posts</p>
              </StyledTab>
              <StyledTab>
                <p>liked</p>
              </StyledTab>
              <StyledTab>
                <p>saved</p>
              </StyledTab>
            </StyledTabList>

            <StyledTabPanel>
              <MemoPostGallery postsData={postsData} />
            </StyledTabPanel>
            <StyledTabPanel>
              <MemoPostGallery postsData={likesData} />
            </StyledTabPanel>
            <StyledTabPanel>
              <MemoPostGallery postsData={savesData} />
            </StyledTabPanel>
          </StyledTabs>
        </section>
      </section>

      {w > 1000 && (
        <section className="profile-page_suggestions">
          <div className="profile-page_suggestions_user-panel">
            <UsersPanel />
          </div>
        </section>
      )}
    </StyledProfilePage>
  );
};
