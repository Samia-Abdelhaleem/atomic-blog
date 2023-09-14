import React, { useContext } from "react";
import styles from "../styles/post.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { PostContext } from "../App";
import { usePostContextHook } from "../context/PostContext";
const Post = ({ isAddPost, post }) => {
  // 3) consume context value
  const { onAddPostFromArchived } = usePostContextHook();
  return (
    <>
      <li className={styles.post__container}>
        <span> ✏️</span>

        <div className={styles.post__content}>
          <div className={styles.post__content__header}>
            <h3>{post.title}</h3>
            {isAddPost ? (
              <button
                className={styles.post__content__btn}
                onClick={() => onAddPostFromArchived({ ...post })}
              >
                <FontAwesomeIcon icon={faPlus} />
              </button>
            ) : (
              ""
            )}
          </div>

          <p>{post.body}</p>
          {/* <button className={styles.post__content__btn}>add as a post </button> */}
        </div>
      </li>
    </>
  );
};

export default Post;
