import Home from "./pages/Home";
import Datas from "./pages/Datas";
import Results from "./components/Results"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/:searchInput",
    element: <Datas />,
    children: [
      {
        index: true,
        element: <Results />
      }
    ]
  }
])
function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
