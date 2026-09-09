import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";

import Layout from "./Components/Layout";

const Home = lazy(() => import("./Pages/Home"));
const Services = lazy(() => import("./Pages/Services"));
const Prices = lazy(() => import("./Pages/Prices"));

//  Создаем компонент-заглушку (Fallback)
const PageLoader = () => (
  <div className="flex items-center justify-center h-screen">
    <p>Загрузка раздела...</p>
  </div>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<PageLoader />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "services",
        element: (
          <Suspense fallback={<PageLoader />}>
            <Services />
          </Suspense>
        ),
      },

      {
        path: "prices",
        element: (
          <Suspense fallback={<PageLoader />}>
            <Prices />
          </Suspense>
        ),
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
