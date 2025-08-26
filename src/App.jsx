import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, useEffect } from "react";
import RootLayout from "./layout/RootLayout";
import { useSelector, useDispatch } from "react-redux";
import { Loader } from "./components/Loader/Loader.jsx";
import { isLoading } from "./redux/global/selectors.js";

import { Toaster } from "react-hot-toast";
import { setCurrentUser } from "./redux/user/userSlice";

const HomePage = lazy(() => import("./pages/HomePage/HomePage.jsx"));
const CatalogPage = lazy(() => import("./pages/CatalogPage/CatalogPage.jsx"));
const CatalogDetailPage = lazy(() =>
  import("./pages/CatalogDetailPage/CatalogDetailPage.jsx")
);
const RevievsPage = lazy(() => import("./pages/ RevievsPage/RevievsPage.jsx"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "articles", element: <ArticlesPage /> },
      { path: "articles/:id", element: <ArticleDetailPage /> },
      { path: "users", element: <AuthorsPage /> },
      { path: "register", element: <RegisterPage /> },
      { path: "photo", element: <UploadPhotoPage /> },
      { path: "login", element: <LoginPage /> },
      { path: "users/:id", element: <AuthorProfilePage /> },
      { path: "create", element: <CreateArticlePage /> },
    ],
  },
]);

function App() {
  const isRefreshing = useSelector(selectIsRefreshing);
  const isGlobalLoading = useSelector(isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    const refreshAndSetUser = async () => {
      const action = await dispatch(refresh());
      if (refresh.fulfilled.match(action)) {
        dispatch(setCurrentUser(action.payload.user));
      }
    };

    refreshAndSetUser();
  }, [dispatch]);

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      {(isGlobalLoading && <Loader />) || (isRefreshing && <Loader />)}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
