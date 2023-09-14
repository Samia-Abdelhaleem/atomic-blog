import React, { useContext } from "react";
import Post from "./Post";
import { v4 as uuidv4 } from "uuid";
import styles from "../styles/postsList.module.css";
import EmptyState from "./EmptyState";
import List from "./List";
import { PostContext } from "../App";
import { usePostContextHook } from "../context/PostContext";
const PostsList = ({ onAddPost }) => {
  const { posts } = usePostContextHook();
  return <List posts={posts} message="No Posts Found!" />;
};

export default PostsList;
