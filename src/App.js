import { BrowserRouter, Routes, Route } from "react-router-dom";
import LateNight from "./lateNight";
import Pages from "./pages";
import EndQ from "./endQ";
import NoHesNot from "./noHesNot";
import ThenMaybe from "./thenMaybe";
import Reagrdless from "./regardless";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Pages />} />
        <Route path="/lateNight" element={<LateNight />} />
        <Route path="/endQ" element={<EndQ />} />
        <Route path="/notG" element={<NoHesNot />} />
        <Route path="/thenMaybe" element={<ThenMaybe />} />
        <Route path="/reg" element={<Reagrdless />} />
      </Routes>
    </BrowserRouter>
  );
}
