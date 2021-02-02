import { Avatar } from "@material-ui/core";
import {
  ChatBubbleOutline,
  FavoriteBorder,
  Publish,
  Repeat,
  VerifiedUser,
} from "@material-ui/icons";
import React, { forwardRef } from "react";
import "./Post.css";

const Post = forwardRef(
  ({ displayName, userName, verified, text, image, avatar }, ref) => {
    return (
      <div className="post" ref={ref}>
        <div className="post__avatar">
          <Avatar src={avatar} />
        </div>
        <div className="post__body">
          <div className="post__header">
            <div className="post__header-text">
              <h3>
                {displayName}{" "}
                <span className="post__header-special">
                  {/* if "verified" inside posts, print verified badge */}
                  {verified && <VerifiedUser className="post__badge" />}@
                  {userName}
                </span>
              </h3>
            </div>
            <div className="post__header-description">
              <p>{text}</p>
            </div>
            <img src={image} alt="" />
          </div>
          <div className="post__footer">
            <ChatBubbleOutline fontSize="small" />
            <Repeat fontSize="small" />
            <FavoriteBorder fontSize="small" />
            <Publish fontSize="small" />
          </div>
        </div>
      </div>
    );
  }
);

export default Post;
