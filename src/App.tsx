import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import { Layer } from "./components/layer/layer";
import { aMenuItems } from "./interface/menu";

function App() {
  const HomePage = React.lazy(() => import("./pages/home.page"));
  const ShoesPage = React.lazy(() => import("./pages/shoes.page"));
  const TshirtPage = React.lazy(() => import("./pages/tshirt.page"));

  const options: aMenuItems = [
    { path: "", label: "Home - footlooker", page: <HomePage /> },
    { path: "shoe", label: "Shoes", page: <ShoesPage /> },
    { path: "tshirt", label: "Tshirt", page: <TshirtPage /> },
    { path: "*", label: "", page: <Navigate replace to="" /> },
  ];
  return (
    <Router>
      <Layer options={options}>
        <React.Suspense>
          <React.StrictMode>
            <Routes>
              {options.map((item) => (
                <Route
                  key={item.label}
                  path={item.path}
                  element={item.page}
                ></Route>
              ))}
            </Routes>
          </React.StrictMode>
        </React.Suspense>
      </Layer>
    </Router>
  );
}

export default App;
