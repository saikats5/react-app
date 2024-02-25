import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});
const postListReducer = (currPostList, action) => {
  return currPostList;
};
const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );
  const addPost = () => {};
  const deletePost = () => {};
  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};
const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Test1",
    body: "Test1 Body",
    reactions: 11,
    userId: "user-1",
    tags: ["111", "222", "333"],
  },
  {
    id: "2",
    title: "Test2",
    body: "Test2 Body",
    reactions: 22,
    userId: "user-2",
    tags: ["444", "555", "666"],
  },
];
export default PostListProvider;
