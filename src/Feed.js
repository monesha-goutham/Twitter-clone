import React, { useState, useEffect } from "react";
import "./Feed.css";
import db from "./firebase";
import Post from "./Post";
import TweetBox from "./TweetBox";
import FlipMove from "react-flip-move";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(snapshot.docs.map((doc) => doc.data()))
      );
  }, []);
  return (
    <div className="feed">
      {/* home bar */}
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      {/* tweet box */}
      <TweetBox />

      {/* posts */}
      <FlipMove>
        {posts.map((post) => (
          <Post
            // for flipmove to work, we need to use unique key
            key={post.text}
            displayName={post.displayName}
            userName={post.userName}
            verified={post.verified}
            text={post.text}
            image={post.image}
            avatar={post.avatar}
          />
        ))}
      </FlipMove>

      <Post
        displayName="Monesha Goutham"
        userName="Ryux41"
        verified
        text="test w/o pictures"
        avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWizYSSEpzd0bTso17q-yVquaKqvnvhLRtyg&usqp=CAU"
      />
      <Post
        displayName="Monesha Goutham"
        userName="Ryux41"
        verified
        text="yo hermanos! I'm working on twitter"
        image="https://media.giphy.com/media/xUySTX1LkkkYHi63yE/giphy.gif"
        avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWizYSSEpzd0bTso17q-yVquaKqvnvhLRtyg&usqp=CAU"
      />
    </div>
  );
};

export default Feed;
