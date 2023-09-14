import React, { useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "../styles/postsList.module.css";
import EmptyState from "./EmptyState";
import Post from "./Post";
import { PostContext } from "../App";
const List = ({ message, isAddPost = false, posts }) => {
  // 3) consume context value
  // const { posts } = useContext(PostContext);
  return (
    <div className={styles.posts__container}>
      {posts.length ? (
        <ul>
          {posts.map((post) => (
            <Post key={uuidv4()} post={post} isAddPost={isAddPost} />
          ))}
        </ul>
      ) : (
        <EmptyState message={message} />
      )}
    </div>
  );
};

export default List;
