import { Suspense, lazy } from "react";

import Layout from "./components/Layout/Layout";
import NotFound from "./pages/NotFound/NotFound";
import { createBrowserRouter } from "react-router-dom";

const Home = lazy(() => import("./pages/Home/Home"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
      //   {
      //     path: "/contact",
      //     element: (
      //       <Suspense fallback={<p>در حال بارگذاری...</p>}>
      //         <Contact />
      //       </Suspense>
      //     ),
      //   },
    ],
  },
]);

export default router;
