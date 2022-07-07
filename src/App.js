import { Routes, Route } from "react-router-dom";
import DataSentimen from "./views/DataSentimen";
import LandingPage from "./views/LandingPage";
import Marketplace from "./views/Marketplace";
import GraphicTokped from "./views/Tokopedia/GraphicTokped";
import TokopediaDataTweet from "./views/Tokopedia/TokopediaDataTweet";
import Visualize from "./views/Visualize";
import TokopediaAnalyzeTweet from "./views/Tokopedia/TokopediaAnalyzeTweet";
import ShopeeAnalyzeTweet from "./views/Shopee/ShopeeAnalyzeTweet";
import ShopeeDataTweet from "./views/Shopee/ShopeeDataTweet";
import GraphicShopee from "./views/Shopee/GraphicShopee";
import LazadaAnalyzeTweet from "./views/Lazada/LazadaAnalyzeTweet";
import LazadaDataTweet from "./views/Lazada/LazadaDataTweet";
import GraphicLazada from "./views/Lazada/GraphicLazada";
import BlibliAnalyzeTweet from "./views/Blibli/BlibliAnalyzeTweet";
import BlibliDataTweet from "./views/Blibli/BlibliDataTweet";
import GraphicBlibli from "./views/Blibli/GraphicBlibli";
import BukalapakAnalyzeTweet from "./views/Bukalapak/BukalapakAnalyzeTweet.js";
import BukalapakDataTweet from "./views/Bukalapak/BukalapakDataTweet";
import GraphicBukalapak from "./views/Bukalapak/GraphicBukalapak";
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

        <Route path="/shopee-data-tweet" element={<ShopeeDataTweet />} />
        <Route
          path="/shopee-analyze-tweet"
          element={<ShopeeAnalyzeTweet />}
        />
        <Route path="/grafik-shopee" element={<GraphicShopee />} />

        <Route path="/lazada-data-tweet" element={<LazadaDataTweet />} />
        <Route
          path="/lazada-analyze-tweet"
          element={<LazadaAnalyzeTweet />}
        />
        <Route path="/grafik-lazada" element={<GraphicLazada />} />

        <Route path="/blibli-data-tweet" element={<BlibliDataTweet />} />
        <Route
          path="/blibli-analyze-tweet"
          element={<BlibliAnalyzeTweet />}
        />
        <Route path="/grafik-blibli" element={<GraphicBlibli />} />

        <Route path="/bukalapak-data-tweet" element={<BukalapakDataTweet />} />
        <Route
          path="/bukalapak-analyze-tweet"
          element={<BukalapakAnalyzeTweet />}
        />
        <Route path="/grafik-bukalapak" element={<GraphicBukalapak />} />
        <Route path="/data-sentimen" element={<DataSentimen />} />
        <Route path="/visualize" element={<Visualize />} />
      </Routes>
    </Provider>
  );
}

export default App;
