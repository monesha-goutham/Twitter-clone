import { Avatar, Button } from "@material-ui/core";
import React, { useState } from "react";
import db from "./firebase";

import "./TweetBox.css";
import firebase from "firebase";

const TweetBox = () => {
  const [text, setText] = useState("");
  const [image, setImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      displayName: "Twitter Newbie",
      userName: "twitternewb",
      verified: false,
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRboYVLBuVZBQGFO2PiV6udtIHmB9sFFh58_Q&usqp=CAU",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      text: text,
      image: image,
    });
    setText("");
    setImage("");
  };
  return (
    <div className="tweet-box">
      <form action="" className="tweet-box__form">
        <div className="tweet-box__input">
          <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRboYVLBuVZBQGFO2PiV6udtIHmB9sFFh58_Q&usqp=CAU" />
          <input
            placeHolder="type some text..."
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <input
          placeHolder="optional: enter an image url"
          type="text"
          className="tweet-box__input-img"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        {/* since this is a form, the button type should be submit */}
        <Button className="tweet-box__tweet-button" onClick={sendTweet}>
          Tweet
        </Button>
      </form>
    </div>
  );
};

export default TweetBox;
