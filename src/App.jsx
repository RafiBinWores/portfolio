import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout"
import Home from "./pages/home/Home";
import Article from "./pages/article/Article";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/articles",
          element: <Article />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App