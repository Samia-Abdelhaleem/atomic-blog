import React, { useContext, useState } from "react";
import { PostContext } from "../App";
import { usePostContextHook } from "../context/PostContext";

const AppHeader = () => {
  // 3) consume context value
  const { postsNumber, clearPosts, searchPosts } = usePostContextHook();
  const [searchTextQuery, setSearchTextQuery] = useState("");

  function handleSearchQuery(searchText) {
    setSearchTextQuery(searchText);
    searchPosts(searchText);
  }
  return (
    <>
      <header>
        <h1>
          <span> 📖</span>The Atomic Blog
        </h1>
        <div>
          <p>🚀 {postsNumber} atomic posts found</p>
          <input
            value={searchTextQuery}
            onChange={(e) => handleSearchQuery(e.target.value)}
            placeholder="Search posts..."
          />
          <button onClick={clearPosts}>Clear posts</button>
        </div>
      </header>
    </>
  );
};

export default AppHeader;
