export const archivedPostsReducer = (state, action) => {
  switch (action.type) {
    case "REMOVE_POST":
      return state.filter((post) => {
        if (
          post.title !== action.payload.title &&
          post.body !== action.payload.body
        ) {
          return post;
        }
      });
    default:
      return state;
  }
};
