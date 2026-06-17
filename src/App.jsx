import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, useEffect } from "react";
import RootLayout from "./layout/RootLayout";
import { useSelector, useDispatch } from "react-redux";
import Header from "./components/header/Header.jsx";
import { Loader } from "./components/Loader/Loader.jsx";
import { Toaster } from "react-hot-toast";

const HomePage = lazy(() => import("./pages/HomePage/HomePage.jsx"));
const CatalogPage = lazy(() => import("./pages/CatalogPage/CatalogPage.jsx"));
const CampersDetailPage = lazy(
  () => import("./pages/CampersDetailsPage/CampersDetailsPage.jsx"),
);
const NotFoundPage = lazy(
  () => import("./pages/NotFoundPage/NotFoundPage.jsx"),
);
const CampersFeatures = lazy(
  () => import("./components/CampersFeatures/CampersFeatures.jsx"),
);
const CampersReviews = lazy(
  () => import("./components/CampersReviews/CampersReviews.jsx"),
);

function App() {
  return (
    <>
      <Toaster />
      <Suspense fallback={<Loader type="page loader" />}>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/catalog/:id" element={<CamperDetailsPage />}>
              <Route path="features" element={<CamperFeatures />} />
              <Route path="reviews" element={<CamperReviews />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
      </Suspense>
    </>
  );
}
export default App;
