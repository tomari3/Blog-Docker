import React, { useState } from "react";

import { timeAgo } from "../../../utils/dateFormat";

import { StyledLink } from "../../../styles/StyledLink";
import { StyledComment } from "../../../styles/StyledComment";

import { LikeCommentBtn } from "./LikeCommentBtn";
import { ReplyCommentBtn } from "./replyCommentBtn";
import { SubCommentInput } from "./SubCommentInput";
import { SubComments } from "./SubComments";
import { CommentContent } from "../../../assets/svg/CommentContent";
import { CommentOptions } from "./CommentOptions";
import { ProfilePicture } from "../../user/ProfilePicture";

export const Comment = ({ commentData, sub }) => {
  const [commentModal, setCommentModal] = useState(false);
  const [commentsModal, setCommentsModal] = useState(false);
  const [likesData, setLikesData] = useState(commentData?.likes);
  const [subCommentsData, setSubCommentsData] = useState(commentData?.comments);

  const [commentContent, setCommentContent] = useState(commentData.content);
  const [isCommentEditMode, setIsCommentEditMode] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);

  const {
    author: { _id: authorId, username },
    _id,
    date,
    parent: post_id,
  } = commentData;
  return (
    <StyledComment
      className={`${sub ? "comments_sub-comment" : "comments_comment"} ${
        isDeleted ? "deleted" : ""
      }`}
    >
      <div className={sub ? "sub-comment" : "comment"}>
        <div className="comment-side-up">
          <div className="comment-side-up_img">
            <ProfilePicture userData={commentData.author} />
          </div>
        </div>

        <div className="comment-content">
          <StyledLink to={`/${username}`} className="comment-content_name">
            {username}
          </StyledLink>

          <div className="comment-content_content">
            <div className="comment-options">
              <CommentOptions
                commentId={_id}
                commentAuthor={authorId}
                postId={post_id}
                setIsCommentEditMode={setIsCommentEditMode}
                setCommentContent={setCommentContent}
                isDeleted={isDeleted}
                setIsDeleted={setIsDeleted}
              />
            </div>
            <CommentContent
              postId={post_id}
              commentId={_id}
              isEditMode={isCommentEditMode}
              setIsEditMode={setIsCommentEditMode}
              commentContent={commentContent}
              setCommentContent={setCommentContent}
            />
          </div>
        </div>

        <div className="comment-interaction">
          <div className="comment-interaction_btn">
            <LikeCommentBtn
              likesData={likesData}
              setLikesData={setLikesData}
              commentId={_id}
              postId={post_id}
            />

            <ReplyCommentBtn
              amount={subCommentsData.length}
              toggleInput={() => setCommentModal(!commentModal)}
              toggleComments={() => setCommentsModal(!commentsModal)}
            />
          </div>
          <span className="comment-interaction_date">{timeAgo(date)}</span>
        </div>
      </div>

      {subCommentsData?.length ? (
        <div className="comment_line">
          <span></span>
        </div>
      ) : null}

      {commentModal ? (
        <SubCommentInput
          closeInput={() => setCommentModal(false)}
          openComments={() => setCommentsModal(true)}
          setSubCommentsData={setSubCommentsData}
          commentId={_id}
        />
      ) : null}

      {commentsModal ? (
        <SubComments
          commentId={_id}
          setSubCommentsData={setSubCommentsData}
          subCommentsData={subCommentsData}
          data={subCommentsData}
        />
      ) : null}
    </StyledComment>
  );
};
