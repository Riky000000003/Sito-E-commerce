import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import CarelloView from "./CarelloView";
import CarrelloContex from "./components/carello";
import Dettaglio from "./Dettaglio";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "products/:id",
    element: <Dettaglio />
  },
  {
    path: "carrello",
    element: <CarelloView />
  }
]);

root.render(
  <StrictMode>
    <CarrelloContex>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </CarrelloContex>
  </StrictMode>
);
