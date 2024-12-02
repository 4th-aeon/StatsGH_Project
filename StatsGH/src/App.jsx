import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import AboutUS from "./pages/aboutUsPage";
import NewsPage from "./pages/newsPage";
import TopicsNewsList from "./pages/topicNewsList";
import AdsRequest from "./pages/adsRequest";
import ContactUS from "./pages/contactUS";
import SearchResults from "./pages/results";
import MyAccount from "./pages/myAccount";
import { useScrollToTop } from "./components/scrollToTop";

function App() {
  useScrollToTop();
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/news" element={<HomePage />} />
      <Route path="/about-us" element={<AboutUS />} />
      <Route path="/news/:slug" element={<NewsPage />} />
      <Route path="/topics/:slug" element={<TopicsNewsList />} />
      <Route path="/advertisement-request" element={<AdsRequest />} />
      <Route path="/contact-us" element={<ContactUS />} />
      <Route path="/results" element={<SearchResults />} />
      <Route path="/my-account" element={<MyAccount />} />
    </Routes>
  );
}

export default App;
