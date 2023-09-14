import { toast } from "react-toastify";
import { archivedPosts, randomPosts } from "../data/data";
import { createContext, useContext, useReducer } from "react";
import { postsReducer } from "../reducers/PostsReducer";
import { archivedPostsReducer } from "../reducers/ArchivedPostsReducer";

// 1) create context
export const PostContext = createContext();
function PostContextProvider({ children }) {
  const [posts, dispatch] = useReducer(postsReducer, randomPosts);
  const [archivePosts, dispatchArchivedPost] = useReducer(
    archivedPostsReducer,
    archivedPosts
  );
  function handleSearchPost(searchText) {
    dispatch({
      type: "SEARCH_POST",
      payload: searchText,
    });
  }

  function handleAddPost(post) {
    dispatch({
      type: "ADD_POST",
      payload: post,
    });
  }
  function handleClearPosts() {
    dispatch({
      type: "DELETE_POST",
    });
  }

  function handleAddPostFromArchive(post) {
    handleAddPost(post);
    dispatchArchivedPost({
      type: "REMOVE_POST",
      payload: post,
    });

    toast.success("new post added from archived posts");
  }
  return (
    <PostContext.Provider
      value={{
        posts: posts,
        postsNumber: posts?.length,
        clearPosts: handleClearPosts,
        onAddPost: handleAddPost,
        archivedPosts: archivePosts,
        onAddPostFromArchived: handleAddPostFromArchive,
        searchPosts: handleSearchPost,
      }}
    >
      {children}
    </PostContext.Provider>
  );
}

function usePostContextHook() {
  const context = useContext(PostContext);
  return context;
}

export { PostContextProvider, usePostContextHook };
