import Home from "./pages/Home";
import Datas from "./pages/Datas";
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
    element: <Datas />
  }
])
function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
