import { SearchOutlined } from "@material-ui/icons";
import {
  TwitterShareButton,
  TwitterTimelineEmbed,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import React from "react";
import "./Widgets.css";

const Widgets = () => {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchOutlined />
        <input type="text" placeholder="Search Twitter" />
      </div>
      <div className="widgets__holder">
        <h2>What's happening</h2>
        {/* embeds a tweet based on ID */}
        <TwitterTweetEmbed tweetId="888732169551491072" />

        {/* embed's the user's entire timeline */}
        {/* <TwitterTimelineEmbed
          sourceType="profile"
          screenName="RyuzakiAxel"
          options={{ height: 400 }}
        /> */}
        {/* a button for sending automatic prewritten tweet */}
        <TwitterShareButton
          className="widgets__share-button"
          options={{
            text: "#reactjs is awesome",

            size: "large",
          }}
        />
      </div>
    </div>
  );
};

export default Widgets;
