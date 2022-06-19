import React, { useState } from "react";

import { timeAgo } from "../../utils/dateFormat";

import { StyledPost } from "../../styles/StyledPost";
import { StyledLink } from "../../styles/StyledLink";

import { Tag } from "../tags/Tag";
import { CommentBtn } from "./commentSection/CommentBtn";
import { LikeBtn } from "./LikeBtn";
import { SaveBtn } from "./SaveBtn";
import { CommentInput } from "./commentSection/CommentInput";
import { CommentSection } from "./commentSection/CommentSection";
import { PostOptions } from "./PostOptions";
import { PostContent } from "./PostContent";
import { MediaCarousel } from "./MediaCarousel";
import { ProfilePicture } from "../user/ProfilePicture";
import { StyledButton } from "../../styles/StyledButton";

export const Post = ({ postData }) => {
  const [likesData, setLikesData] = useState(postData.likes);
  const [savesData, setSavesData] = useState(postData.saves);
  const [commentsData, setCommentsData] = useState(postData.comments);
  const [commentModal, setCommentModal] = useState(false);
  const [commentsModal, setCommentsModal] = useState(false);

  const [postContent, setPostContent] = useState(postData.content);
  const [isPostEditMode, setIsPostEditMode] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  const { _id, author, date, tags, media } = postData;

  // const fetchPost = async () => {
  //   const postUrl = `posts/${_id}`;

  //   const { data } = await axiosPrivate.get(postUrl);
  //   console.log(data);
  // };
  const tagsList = tags.map((tag, index) => {
    return index >= 4 ? null : <Tag key={tag._id} tagData={tag} />;
  });

  const amount = commentsData.length;

  return (
    <StyledPost className={`post ${isDeleted ? "deleted" : ""}`}>
      <div className="post-options">
        <PostOptions
          postId={_id}
          postAuthor={author._id}
          setIsPostEditMode={setIsPostEditMode}
          setPostContent={setPostContent}
          isDeleted={isDeleted}
          setIsDeleted={setIsDeleted}
        />
      </div>

      <div className="post-content">
        <div className="post-content-details">
          <div className="post-content-details_img">
            <ProfilePicture userData={author} />
          </div>
          <StyledLink
            to={`/${author?.username}`}
            className="post-content-details_username"
          >
            {author?.username}
          </StyledLink>
          <p className="post-content-details_date">{timeAgo(date)}</p>
        </div>
        <div className="post-content_tags">{tagsList}</div>

        <div className="post-content_content">
          <PostContent
            postId={_id}
            isEditMode={isPostEditMode}
            setIsEditMode={setIsPostEditMode}
            postContent={postContent}
            setPostContent={setPostContent}
          />
          <MediaCarousel mediaData={media} />
        </div>
        <div className="post-social">
          <div className="post-social-likes">
            {likesData.length ? `${likesData.length} likes` : ""}
          </div>
          <div className="post-social-comments">
            <StyledButton
              fontSize="small"
              onClick={() => setCommentsModal(!commentsModal)}
            >
              {commentsData.length
                ? `see all ${commentsData.length} comments`
                : ""}
            </StyledButton>
          </div>
        </div>
      </div>
      <div className="post-interactions">
        <LikeBtn
          likesData={likesData}
          setLikesData={setLikesData}
          postId={_id}
        />
        <SaveBtn
          savesData={savesData}
          setSavesData={setSavesData}
          postId={_id}
        />
        <CommentBtn
          main
          toggleComment={() => setCommentModal(!commentModal)}
          toggleComments={() => setCommentsModal(!commentsModal)}
          amount={amount}
        />
      </div>
      {commentModal ? (
        <CommentInput
          onClick={(e) => e.stopPropagation()}
          closeInput={() => setCommentModal(false)}
          openComments={() => setCommentsModal(true)}
          setCommentsData={setCommentsData}
          postId={_id}
        />
      ) : null}
      {commentsModal ? (
        <CommentSection
          onClick={(e) => e.stopPropagation()}
          commentsData={commentsData}
          setCommentsData={setCommentsData}
          postId={_id}
        />
      ) : null}
    </StyledPost>
  );
};
