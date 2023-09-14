import List from "./List";
import { usePostContextHook } from "../context/PostContext";

const ArchivedPostsList = () => {
  // 3) consume context value
  const { archivedPosts } = usePostContextHook();
  return (
    <List
      posts={archivedPosts}
      message="No Archived Posts Found!"
      isAddPost={true}
    />
  );
};

export default ArchivedPostsList;
