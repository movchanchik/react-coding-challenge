import { createBrowserRouter } from "react-router-dom";
import ArtDetailCard from "../components/ArtDetailCard";
import ArtPage from "../components/ArtPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <ArtPage />,
  },
  {
    path: "/art-card/:id",
    element: <ArtDetailCard />,
  },
]);
