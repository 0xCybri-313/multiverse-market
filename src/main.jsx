import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { ClerkProvider } from "@clerk/react";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";

import { Home, About, Contact, Products, Cart } from "./pages";

import "./index.css";
import App from "./App.jsx";
import { DataProvider } from "./context/DataContext.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="products" element={<Products />} />
      <Route path="cart" element={<Cart />} />
    </Route>,
  ),
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DataProvider>
      <ClerkProvider>
        <RouterProvider router={router} />
      </ClerkProvider>
    </DataProvider>
  </StrictMode>,
);
