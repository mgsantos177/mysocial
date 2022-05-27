import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { DetailPage } from "./pages/Detail";
import { HomePage } from "./pages/Home";

export function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/detail/:userId" element={<DetailPage />} />
      </Routes>
    </div>
  );
}
