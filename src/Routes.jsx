import { Suspense, lazy } from "react";

import Layout from "./components/Layout/Layout";
import { createBrowserRouter } from "react-router-dom";

const Home = lazy(() => import("./pages/Home/Home"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<p>در حال بارگذاری...</p>}>
            <Home />
          </Suspense>
        ),
      },
    //   {
    //     path: "/about",
    //     element: (
    //       <Suspense fallback={<p>در حال بارگذاری...</p>}>
    //         <About />
    //       </Suspense>
    //     ),
    //   },
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

