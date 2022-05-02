import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Main } from "./pages/Main";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}
