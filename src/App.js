import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root";

import HomePage from "./pages/home/Home";
import SearchCityPage from "./pages/search/SearchCityPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/search-city",
        element: <SearchCityPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
