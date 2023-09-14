import { searchPosts } from "../data/data";

export const postsReducer = (state, action) => {
  switch (action.type) {
    case "ADD_POST":
      return [...state, action.payload];
    case "DELETE_POST":
      return [];
    case "SEARCH_POST":
      return searchPosts(action.payload);
    default:
      return state;
  }
};
