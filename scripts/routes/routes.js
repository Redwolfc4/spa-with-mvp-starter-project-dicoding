import AboutPage from "../pages/about/about-page.js";
import HomePage from "../pages/home/home-page.js";
import CatDetailPage from "../pages/cat-detail-page.js";

const routes = {
  "/": () => new HomePage(),
  "/about": () => new AboutPage(),
  "/cat/:id": () => new CatDetailPage(),
};

export default routes;
