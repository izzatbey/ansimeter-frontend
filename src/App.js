import { Routes, Route } from "react-router-dom";
import DataSentimen from "./views/DataSentimen";
import LandingPage from "./views/LandingPage";
import Marketplace from "./views/Marketplace";
import GraphicTokped from "./views/Tokopedia/GraphicTokped";
import TokopediaDataTweet from "./views/Tokopedia/TokopediaDataTweet";
import Visualize from "./views/Visualize";
import TokopediaAnalyzeTweet from "./views/Tokopedia/TokopediaAnalyzeTweet";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/tokped-data-tweet" element={<TokopediaDataTweet />} />
        <Route
          path="/tokped-analyze-tweet"
          element={<TokopediaAnalyzeTweet />}
        />
        <Route path="/grafik-tokped" element={<GraphicTokped />} />
        <Route path="/data-sentimen" element={<DataSentimen />} />
        <Route path="/visualize" element={<Visualize />} />
      </Routes>
    </Provider>
  );
}

export default App;
