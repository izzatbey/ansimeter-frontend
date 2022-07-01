import { Routes, Route } from "react-router-dom";
import DataSentimen from "./views/DataSentimen";
import DataTweet from "./views/DataTweet";
import LandingPage from "./views/LandingPage";
import Marketplace from "./views/Marketplace";
import Visualize from "./views/Visualize";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/marketplace" element={<Marketplace />} />
      <Route path="/data-tweet" element={<DataTweet />} />
      <Route path="/data-sentimen" element={<DataSentimen />} />
      <Route path="/visualize" element={<Visualize />} />
    </Routes>
  );
}

export default App;
