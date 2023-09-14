import AppHeader from "./components/AppHeader";
import FormAddPost from "./components/FormAddPost";
import PostsList from "./components/PostsList";
import ArchivedPostsList from "./components/ArchivedPostsList";
import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "react-toastify/dist/ReactToastify.css";
import Tabs from "./components/Tabs";
import { Outlet, Route, Routes } from "react-router-dom";
import { PostContextProvider } from "./context/PostContext";

function App() {
  return (
    // 2) provide context & set value data
    <PostContextProvider>
      <AppHeader />
      <FormAddPost />
      <Tabs />

      <Routes>
        <Route index element={<PostsList />}></Route>
        <Route path="posts" element={<PostsList />}></Route>
        <Route
          path="archived-posts"
          index
          element={
            <>
              <ArchivedPostsList />
              <ToastContainer
                position="bottom-center"
                theme="dark"
                transition={Zoom}
              />
            </>
          }
        ></Route>
      </Routes>

      <Outlet></Outlet>
    </PostContextProvider>
  );
}
export default App;
