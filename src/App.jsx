import { useState } from "react";
import Home from "./pages/Home";
import Datas from "./pages/Datas";
import Results from "./components/Results";
import WebOrImg from "./components/WebOrImg";
import ErrorElement from "./components/ErrorElement";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const [nightMode, setNightMode] = useState(false);
  const toggleNightMode = () => {
    setNightMode((prev) => !prev);
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorElement />,
    },
    {
      path: "/:searchInput",
      element: (
        <Datas nightMode={nightMode} toggleNightMode={toggleNightMode} />
      ),
      children: [
        {
          path: "",
          element: <Results nightMode={nightMode} />,
          children: [
            {
              path: ":type",
              element: <WebOrImg nightMode={nightMode} />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
